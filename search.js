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

 module.exports.bfs = function traverse(queue) {
   while (queue.length > 0) {
     // queueの戦闘から取り出す
     let [row, col] = queue.shift();
     // 壁か池だったら再帰
     if (row < 0 || row >= height || col < 0 || col >= width 
       || grid[row][col] == '0') continue;
     // チェックする場所は池にする
     grid[row][col] = "0"; 

     // 各direction毎にチェックする
     for (let dir of DIRECTIONS) {
       queue.push([row+dir[0], col+dir[1]]);
     }
   }
 }
