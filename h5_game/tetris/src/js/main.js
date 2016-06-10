var board = new window.Board();
ResourceManager.load(()=>{
  board.init();
  intervalId = setInterval(()=>{
    board.tick();
  }, 500);
});