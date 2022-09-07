const search = require("./dfs")

const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

const main = function (grid) {
  if (grid.length <= 0) return 0;

  let count = 0, directions = [[-1,0],[0,1],[1,0],[0,-1]];
  let height = grid.length, width = grid[0].length;

  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      console.log("grid(", row, ",", col, ")")
      if (grid[row][col] == '1') {
        search.dfs(row, col, {
          grid,
          height,
          width,
          directions,
        }); 
        count++;
      }
    }
  }

  return count;
};

console.log("island count :", main(grid))
