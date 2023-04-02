var sketch1 = function( sketch ) {
  let numCells = 1;
  let cellWidth = 100;

  let cells = [];

  sketch.setup = () => {
    let canvas = sketch.createCanvas(numCells * cellWidth, cellWidth);
    canvas.mousePressed(changeBox);
  }

  sketch.draw = () => {

    for (let i = 0; i < numCells; i++) {
        let x = i * cellWidth;
        sketch.stroke(0);
        if (cells[i] >= 1) {
          sketch.fill(24, 124, 206); // Make it blue (alive)
        } else {
          sketch.fill(255); // Make it white (dead)
        }
        sketch.square(x, 0, cellWidth);
    }
  }

  function changeBox() {
    if (cells[sketch.floor(sketch.mouseX / cellWidth)] == 1) {
      cells[sketch.floor(sketch.mouseX / cellWidth)] = 0;
    } else {
      cells[sketch.floor(sketch.mouseX / cellWidth)] = 1;
    }
  }
};

var sketch2 = function ( sketch ) {
  let numCells = 7;
  let cellWidth = 100;

  let cells = [];

  sketch.setup = () => {
    let canvas = sketch.createCanvas(numCells * cellWidth, cellWidth);
    canvas.mousePressed(changeBox);
  }

  sketch.draw = () => {
    for (let i = 0; i < numCells; i++) {
        let x = i * cellWidth;
        sketch.stroke(0);
        if (cells[i] >= 1) {
          sketch.fill(24, 124, 206); // Make it blue (alive)
        } else {
          sketch.fill(255); // Make it white (dead)
        }
        sketch.square(x, 0, cellWidth);
    }
  }

  function changeBox() {
    if (cells[sketch.floor(sketch.mouseX / cellWidth)] == 1) {
      cells[sketch.floor(sketch.mouseX / cellWidth)] = 0;
    } else {
      cells[sketch.floor(sketch.mouseX / cellWidth)] = 1;
    }
  }
};

var sketch3 = function ( sketch ) {
  let numCells = 7;
  let cellWidth = 100;
  let button;
  let numGenerations = 1;

  let cells = [];

  sketch.setup = () => {
    let canvas = sketch.createCanvas(numCells * cellWidth, cellWidth);
    canvas.mousePressed(changeBox);
    button = sketch.createButton('Generate');
    button.mousePressed(generate);  
  }

  sketch.draw = () => {
    for (let i = 0; i < numCells; i++) {
        let x = i * cellWidth;
        sketch.stroke(0);
        if (cells[i] >= 1) {
          sketch.fill(24, 124, 206); // Make it blue (alive)
        } else {
          sketch.fill(255); // Make it white (dead)
        }
        sketch.square(x, 0, cellWidth);
    }
  }

  function changeBox() {
    if (cells[sketch.floor(sketch.mouseX / cellWidth)] == 1) {
      cells[sketch.floor(sketch.mouseX / cellWidth)] = 0;
    } else {
      cells[sketch.floor(sketch.mouseX / cellWidth)] = 1;
    }
  }

  function generate() {
    sketch.resizeCanvas(numCells * cellWidth, cellWidth * (numGenerations + 1));
    for (let i = 0; i < numCells; i++) {
      let x = i * cellWidth;
      sketch.stroke(0);
      if (cells[i] >= 1) {
        sketch.fill(24, 124, 206); // Make it blue (alive)
      } else {
        sketch.fill(255); // Make it white (dead)
      }
      sketch.square(x, cellWidth * numGenerations, cellWidth);
    }
    numGenerations++;
  }
};


var p5_1 = new p5(sketch1, 'boxContainer');
var p5_2 = new p5(sketch2, 'arrayContainer');
var p5_3 = new p5(sketch3, 'generatorContainer');