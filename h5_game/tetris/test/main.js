var c1 = document.getElementById('c1');
// 如果不用id属性，我们可以用如下方式来获取canvas对象
//var c1 = document.getElementsByTagName('canvas')[0];
c1.width = 800;
c1.height = 600;
var context = c1.getContext('2d');
console.log(context); //可以看到context是一个CanvasRenderingContext2D对象

function getRadian(degrees/*角度值*/) {
  return (Math.PI / 180) * degrees;
}

//绘制红色矩形
context.fillStyle = 'red';
context.fillRect(10, 10, 100, 100);

//绘制蓝色矩形框
context.strokeStyle = 'blue';
context.strokeRect(150, 150, 100, 100);

//清空矩形区域（设置矩形区域为空白）
context.clearRect(100, 100, 100, 100);

//画线，设置起点。
context.moveTo(200, 200);
//设置轨迹
context.lineTo(500, 500);
//画线
context.stroke();

//绘制空心矩形
context.beginPath();
context.moveTo(400, 400);
context.lineTo(450, 400);
context.lineTo(450, 450);
context.lineTo(400, 450);
context.closePath();
context.stroke();

//绘制实心梯形
context.beginPath();
context.moveTo(100, 400);
context.lineTo(200, 400);
context.lineTo(250, 500);
context.lineTo(50, 500);
context.fill();

//绘制圆弧
context.beginPath();
context.arc(550, 150, 100, getRadian(90), getRadian(360), true);
context.stroke();
context.beginPath();
context.arc(550, 150, 100, 0, getRadian(90), true);
context.stroke();

//绘制圆弧（必须要设定起始点）
context.beginPath();
context.fillRect(600, 400, 10, 10);
context.fillRect(700, 500, 10, 10);
context.fillStyle = 'blue';
context.fillRect(700, 400, 10, 10);

context.beginPath();
context.moveTo(700, 400);
context.arcTo(600, 600, 700, 700, 500);
context.stroke();

//绘制矩形线条
context.beginPath();
context.rect(700, 10, 50, 50);
context.stroke();
context.fillStyle = 'red';
context.fill();


function drawHeart() {
  context.fillStyle = 'purple';
  //三次曲线
  context.beginPath();
  context.moveTo(75, 40);
  context.bezierCurveTo(75, 37, 70, 25, 50, 25);
  context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  context.bezierCurveTo(20, 80, 40, 102, 75, 120);
  context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  context.bezierCurveTo(85, 25, 75, 37, 75, 40);
  context.fill();
}
drawHeart();