var sketch1 = function ( sketch ) {
  let numCells = 23;
  let cellSide = 40;
  let cellBuffer = 4;
  let generation = 0;
  let cells;
  let ruleset = [0, 0, 0, 1, 1, 1, 1, 0];
  let container;
  let height = 60;

  sketch.setup = () => {
    canvas = sketch.createCanvas(numCells * (cellSide + cellBuffer), 10 * (cellSide + cellBuffer));
    cells = Array(numCells);
    for (let i = 0; i < cells.length; i++) {
      cells[i] = 0;
    }
    cells[sketch.floor(numCells/2)] = 1;
    container = sketch.select('#ruleGenContainer');
    container.style('height', height + 'px');
  }

  sketch.draw = () => {
    for (let i = 2; i < numCells - 2; i++) {
      if (cells[i] >= 1) {
        sketch.fill(24, 124, 206);
      } else {
        sketch.fill(255);
      }
      let x = i * (cellSide + cellBuffer);
      let y = generation * (cellSide + cellBuffer);
      sketch.square(x, y, cellSide);
    }
    if (generation < 9) {
      sketch.generate();
    }
  }

  sketch.generate = () => {
    height += 42;
    container.style('height', height + 'px');
    let nextgen = Array(cells.length);
    for (let i = 0; i < cells.length; i++) {
      let left   = cells[i-1];   // Left neighbor state
      let me     = cells[i];     // Current state
      let right  = cells[i+1];   // Right neighbor state
      nextgen[i] = sketch.rules(left, me, right); // Compute next generation state based on ruleset
    }
    cells = nextgen;
    generation++;
  }


  // Implementing the Wolfram rules
  sketch.rules = (a, b, c) => {
    if (a == 1 && b == 1 && c == 1) return ruleset[0];
    if (a == 1 && b == 1 && c == 0) return ruleset[1];
    if (a == 1 && b == 0 && c == 1) return ruleset[2];
    if (a == 1 && b == 0 && c == 0) return ruleset[3];
    if (a == 0 && b == 1 && c == 1) return ruleset[4];
    if (a == 0 && b == 1 && c == 0) return ruleset[5];
    if (a == 0 && b == 0 && c == 1) return ruleset[6];
    if (a == 0 && b == 0 && c == 0) return ruleset[7];
    return 0;
  }
};

var p5_1 = new p5(sketch1, 'ruleGenContainer');