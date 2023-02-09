import './App.css';

//here, we specify using the "react" and "react-p5" libraries
//react is a frontend javascript library 
//react-p5 is connects react to p5.js a drawing tool used to display the demos
import React from 'react'
import Sketch from 'react-p5'

//how wide every cell is
let w = 25;
//calculated based on screensize and cell width
let columns
let rows
//a 2D boolean matrix representing each cell
let board
//the precompted next board
let next
//control constants
let mouse_mode = 0
let is_pause = false
let slider
//height and width of the drawing on the webpage
let width = 270
let height = 400
//global reference to the canvas
let cnv
let skip_step = false

function App() {

  const setup = (p5, canvasParentRef) => {

    //set up canvas and canvas interactivity
    cnv = p5.createCanvas(width, height).parent(canvasParentRef)

    // Set simulation framerate to 10 to avoid flickering
    p5.frameRate(10)

    // Calculate columns and rows
    columns = p5.floor(p5.width / w)
    rows = p5.floor(p5.height / w)
    // JS 2D array
    board = Array(columns)
    for (let i = 0; i < columns; i++) {
      board[i] = Array(rows)
    }
    // Second board 
    next = Array(columns)
    for (let i = 0; i < columns; i++) {
      next[i] = Array(rows)
    }
    //these buttons will show up on the UI
    let pausebutton = p5.createButton('Toggle Pause')
    pausebutton.position(0, 0)
    //this is where we tell the putton what function to call when pressed
    pausebutton.mousePressed(pause_sim)
    let randomStatebutton = p5.createButton('Random State')
    randomStatebutton.position(100, 0)
    randomStatebutton.mousePressed(new_board)
    //slider is created with (minimum), (maximum), (starting value), (increment value)
    //**  try changing the first field to 1 to get the simulation to run slower! **//
    slider = p5.createSlider(1, 15, 10, 1)
    new_board()
  }
  //this is the function called by the button labeled (toggle pause) on the UI
  function pause_sim() {
    is_pause = !is_pause
  }
  //when the mouse is pressed, this function is called
  const mousePressed = (p5 , event) => {
    if (board[ p5.floor(event.clientX / w)][p5.floor(event.clientY / w)] === 1) {
      mouse_mode = 0
    }
    else {
      mouse_mode = 1
    }
    toggle(p5 , event)
  }
  // reset board when mouse is pressed
  const mouseDragged = (p5 , event) => {
    toggle(p5 , event)
  }
  function toggle(p5 , event) {
    //this function toggles the cells to the "mouse_mode" which is set to be opposite of the tile clicked in the "mousePressed" funciton
    board[ p5.floor(event.clientX / w)][p5.floor(event.clientY / w)] = mouse_mode
    //this code redraws the state instantly so the canged cell can be seen, but makes it so the simulation doesnt run that frame
    //** try removing the line below this comment and changing cells, can you guess what will happen? **//
    skip_step = true
    p5.redraw()
  }
  const draw = p5 => {
    //this chunk generates a new step of the simulation
    p5.frameRate(slider.value())
    if(!is_pause && !skip_step) {
       generate()
    }
    skip_step = false
    //this step looks at each row and column of the table and colors the cells accordingly
    for ( let i = 0; i < columns;i++) {
      for ( let j = 0; j < rows;j++) {
        //the following three lines of code define the colors for an "on" "off" and the table outlines respectivly 
        //the colors are defined with (Red), (Green), (Blue), (Alpha) with limits of 0 - 255
        //** try defining your own colors for the simulation! **//
        if ((board[i][j] === 1)) p5.fill(0,0,0,255)
        else p5.fill(255,255,255,255)
        p5.stroke(240,240,240,240)
        //this defines the rectangles position and size of the screen. 
        p5.rect(i * w, j * w, w-1, w-1)
      }
    }
  
  }
  // Fill board randomly
  function new_board() {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        // Lining the edges with 0s
        if (i === 0 || j === 0 || i === columns-1 || j === rows-1) board[i][j] = 0
        // Filling the rest randomly
        else board[i][j] = Math.floor(Math.random() * 2)
        next[i][j] = 0
      }
    }
  }
  
  // The process of creating the new generation
  function generate() {
  
    // Loop through every spot in our 2D array and check spots neighbors
    for (let x = 1; x < columns - 1; x++) {
      for (let y = 1; y < rows - 1; y++) {
        // Add up all the states in a 3x3 surrounding grid
        let neighbors = 0
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            neighbors += board[x+i][y+j]
          }
        }
  
        // A little trick to subtract the current cell's state since
        // we added it in the above loop
        neighbors -= board[x][y];
        // Rules of Life
        //** Try changing some of these numbers! **/
        if      ((board[x][y] === 1) && (neighbors  <  2)) next[x][y] = 0           // Loneliness      (turns cell off)
        else if ((board[x][y] === 1) && (neighbors  >  3)) next[x][y] = 0           // Overpopulation  (turns cell off)
        else if ((board[x][y] === 0) && (neighbors === 3)) next[x][y] = 1           // Reproduction    (turns cell on)
        else                                               next[x][y] = board[x][y] // Stasis          (nothing happens)
      }
    }
  
    // Swap boards!
    let temp = board
    board = next
    next = temp
  }
  //export the functions that need UI information so react can know about them
  return <Sketch setup={setup} draw={draw} mousePressed={mousePressed}  mouseDragged={mouseDragged} />
}
export default App;
