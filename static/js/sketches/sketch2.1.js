var neighbourhood2D = function ( sketch ) {
  let numCells = 9;
  let cellWidth = 100;
  let cellBuffer = 7;

  let cells = [];

  sketch.setup = () => {
    let canvas = sketch.createCanvas(numCells * (cellWidth + cellBuffer), cellWidth);
    canvas.mousePressed(changeBox);
  }

  sketch.draw = () => { 
    sketch.clear();
    for (let i = 0; i < numCells; i++) {
        let x = i * (cellWidth + cellBuffer);
        sketch.stroke(0);
        if (cells[i] == 1) {
          sketch.fill(24, 124, 206); // Make it blue (selected)
        } else if (cells[i] == 2) {
          sketch.fill(255, 253, 188); // Make it yellow (neighbor)
        } else {
          sketch.fill(255); // Make it white (dead)
        }
        if (i == 0) {
          if (cells[1] == 1) {
            sketch.drawingContext.setLineDash([5,5]);
            sketch.square(x, 0, cellWidth);
            sketch.drawingContext.setLineDash([]);
          }
        } else if (i == numCells - 1) {
          if (cells[numCells - 2] == 1) {
            sketch.drawingContext.setLineDash([5,5]);
            sketch.square(x, 0, cellWidth);
            sketch.drawingContext.setLineDash([]);
          }
        } else {
          sketch.square(x, 0, cellWidth);
        }
        
    }
  }

  function changeBox() {
    let index = sketch.floor(sketch.mouseX / (cellWidth + cellBuffer));
    if (index == 0 || index == numCells - 1)
      return;
    clearBoard();
    if (cells[index] == 1) {
      cells[index] = 0;
    } else {
      cells[index] = 1;
      cells[index - 1] = 2;
      cells[index + 1] = 2;
    }
  }

  function clearBoard() {
    for(let i = 0; i < numCells; i++) {
      cells[i] = 0;
    }
  }
};

var p5_1 = new p5(neighbourhood2D, 'neighbourhoods2DContainer');
