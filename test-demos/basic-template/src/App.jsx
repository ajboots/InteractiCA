import './App.css';

import React from 'react'
import Sketch from 'react-p5'
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

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
let width = 270
let height = 400
let cnv
let skip_step = false
function mouseClicked(_p5, event) {
  console.log(event)
}
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
    let pausebutton = p5.createButton('Toggle Pause')
    pausebutton.position(0, 0)
    pausebutton.mousePressed(pause_sim)
    let randomStatebutton = p5.createButton('Random State')
    randomStatebutton.position(100, 0)
    randomStatebutton.mousePressed(new_board)
    slider = p5.createSlider(2, 15, 10, 1)
    new_board()
  }
  
  function pause_sim() {
    is_pause = !is_pause
  }

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
    board[ p5.floor(event.clientX / w)][p5.floor(event.clientY / w)] = mouse_mode
    skip_step = true
    p5.redraw()
  }
  const draw = p5 => {
    p5.frameRate(slider.value())
    p5.background(255)
    if(!is_pause && !skip_step) {
       generate()
    }
    skip_step = false
    for ( let i = 0; i < columns;i++) {
      for ( let j = 0; j < rows;j++) {
        if ((board[i][j] === 1)) p5.fill(0)
        else p5.fill(255)
        p5.stroke(240)
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
        if      ((board[x][y] === 1) && (neighbors <  2)) next[x][y] = 0           // Loneliness
        else if ((board[x][y] === 1) && (neighbors >  3)) next[x][y] = 0           // Overpopulation
        else if ((board[x][y] === 0) && (neighbors === 3)) next[x][y] = 1           // Reproduction
        else                                             next[x][y] = board[x][y] // Stasis
      }
    }
  
    // Swap!
    let temp = board
    board = next
    next = temp
  }

  const onChange = React.useCallback((value, viewUpdate) => {
    console.log('value:', value);
  }, []);

  return (
    <div>
      <h1>Template for Initial Interative Cellular Automata Demo</h1>
      <Sketch setup={setup} draw={draw} mousePressed={mousePressed}  mouseDragged={mouseDragged} />
      <CodeMirror
      value="console.log('hello world!');"
      height="200px"
      width={width * 2 + 'px'}
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      />
    </div>
  );
}

export default App;
