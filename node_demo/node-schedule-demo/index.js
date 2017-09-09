var schedule = require('node-schedule');

// 每个小时的2第24分钟执行
// var j = schedule.scheduleJob('24 * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });

// 每一分钟的第5s执行
// var rule = new schedule.RecurrenceRule();
// rule.second = 5;
// var j = schedule.scheduleJob(rule, function(){
//   console.log('The answer to life, the universe, and everything!');
// });

// 每隔5分钟执行一次
var rule = new schedule.RecurrenceRule();
rule.minute = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
var count = 0;
var j = schedule.scheduleJob(rule, function () {
  count++;
  console.log(`当前执行第${count}次，当前时间${new Date()}`);
});
