module.exports.dfs = function (row, col, opt) {
  const {
    grid,
    height,
    width,
    directions,
  } = opt
  console.log("dfs", row, col)
  // 壁
  if (row < 0 || row >= height || col < 0 || 
    col >= width) {
    console.log(row, col, "は壁です")
    return;
  }
  // 池
  if (grid[row][col] == '0') {
    console.log(row, col, "は池です")
    return;
  }
  grid[row][col] = "0"; 
  for (let dir of directions) {
    this.dfs(row+dir[0],col+dir[1], opt);
  }
}

