const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

const dfs = function (grid) {
  if (grid.length <= 0) return 0;
  let count = 0, DIRECTIONS = [[-1,0,"↑"],[0,1,"→"],[1,0,"↓"],[0,-1,"←"]];
  let height = grid.length, width = grid[0].length;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      console.log("grid(", row, ",", col, ")")
      if (grid[row][col] == '1') {
        traverse(row, col); 
        count++;
        console.log("count", count, row, col)
      }
    }
  }

  return count;

  // BFS Traversal
  function traverse(row, col) {
    console.log("traverse", row, col)
    if (row < 0 || row >= height || col < 0 || 
      col >= width || grid[row][col] == '0') {
      console.log("return traverse", row, col)
      return;
    }
    grid[row][col] = "0"; 
    for (let dir of DIRECTIONS) {
      console.log(dir[2])
      traverse(row+dir[0],col+dir[1]);
    }
  }
};

console.log("island count :", numIslands(grid))
// console.log("island2 count:", numIslands(grid2))
