import './App.css';

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
let mouse_mode = false
let is_pause = false
let slider

function App() {
    const setup = (p5, canvasParentRef) => {
    // Set simulation framerate to 10 to avoid flickering
    
    p5.frameRate(10)
    p5.createCanvas(720, 400)
    // Calculate columns and rows
    columns = p5.floor(p5.width / w)
    rows = p5.floor(p5.height / w)
    // JS 2D array
    console.log(columns)
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
    new_board(p5)
  }
  
  function pause_sim() {
    is_pause = !is_pause
  }

  const draw = p5 => {
    p5.frameRate(slider.value())
    p5.background(255)
    if(!is_pause) {
       generate()
    }
    for ( let i = 0; i < columns;i++) {
      for ( let j = 0; j < rows;j++) {
        if ((board[i][j] === 1)) p5.fill(0)
        else p5.fill(255)
        p5.stroke(240)
        p5.rect(i * w, j * w, w-1, w-1)
      }
    }
  
  }

  const mousePressed = (p5, canvasParentRef) => {
    mouse_mode = !board[ p5.floor(canvasParentRef.mouseX / w)][p5.floor(canvasParentRef.mouseY / w)]
    toggle(p5,canvasParentRef) 
  }
  // reset board when mouse is pressed
  const mouseDragged = (p5, canvasParentRef) => {
    toggle(p5,canvasParentRef) 
  }
  function toggle(p5,canvasParentRef) {
      board[ p5.floor(canvasParentRef.mouseX / w)][p5.floor(canvasParentRef.mouseY / w)] = mouse_mode
  
  }
  // Fill board randomly
  function new_board(p5) {
    for (let i = 0; i < columns; i++) {
      for (let j = 0; j < rows; j++) {
        // Lining the edges with 0s
        if (i === 0 || j === 0 || i === columns-1 || j === rows-1) board[i][j] = 0
        // Filling the rest randomly
        else board[i][j] = p5.floor(p5.random(2))
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
  return <Sketch setup={setup} draw={draw} />
}

export default App;
