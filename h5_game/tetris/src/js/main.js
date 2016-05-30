var board = new window.Board();
ResourceManager.load(()=>{
  board.init();
  intervalId = setInterval(()=>{
    board.tick();
    console.log('tick');
  }, 500);
});