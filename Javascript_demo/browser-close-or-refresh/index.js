document.body.onunload = function () {
  // if (document.documentElement.scrollWidth != 0) {
  //   alert("是刷新而非关闭");
  //   navigator.sendBeacon('http://localhost:9999/?t=refesh', '');
  // }
  // else {
  //   alert("是关闭而非刷新");
  //   navigator.sendBeacon('http://localhost:9999/?t=close', '');
  // }
};

window.onbeforeunload = function (evt) {
  console.log('onbeforeunload', Date.now());
  if (navigator.sendBeacon) {
    navigator.sendBeacon('http://localhost:9999/?t=onbeforeunload', 'onbeforeunload');
  } else {

  }
  window.start = Date.now();
};

window.onunload = function () {
  console.log('onunload', Date.now());
  if (navigator.sendBeacon) {
    // navigator.sendBeacon(`http://localhost:9999/?t=onunload&ts=${Date.now() - window.start}`, 'onunload');
  } else {
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', `http://localhost:9999/?t=onunload&ts=${Date.now() - window.start}`, true);
    // xhr.send();
    // let now = Date.now();
    // while(Date.now() - now <= 2000){
    //   console.log('abc');
    // }
  }
  window.open('http://10.16.85.170:8000/' + (Date.now() - window.start));
}