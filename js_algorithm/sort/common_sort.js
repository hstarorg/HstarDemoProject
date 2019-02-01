function quickSort(arr) {
  var middle = arr[Math.floor(arr.length / 2)];
  var beforeArr = [];
  var afterArr = [];
  var middleArr = [];
  // 分
  for (var i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === middle) {
      middleArr.push(arr[i]);
    } else if (arr[i] < middle) {
      beforeArr.push(arr[i]);
    } else {
      afterArr.push(arr[i]);
    }
  }
  // 分 End
  if (beforeArr.length > 1) {
    beforeArr = quickSort(beforeArr);
  }
  if (afterArr.length > 1) {
    afterArr = quickSort(afterArr);
  }
  return [...beforeArr, ...middleArr, ...afterArr];
}

/**
 * 冒泡排序
 * @param arr
 */
function bubbleSort(arr) {
  var resultArr = arr.slice(0);
  for (var i = 0, len = resultArr.length; i < len; i++) {
    for (var j = 0; j < len - i - 1; j++) {
      if (resultArr[j] > resultArr[j + 1]) {
        // 交换
        var temp = resultArr[j];
        resultArr[j] = resultArr[j + 1];
        resultArr[j + 1] = temp;
      }
    }
  }
  return resultArr;
}

/**
 * 选择排序
 * @param arr
 */
function selectSort(arr) {
  var resultArr = arr.slice(0);
  for (var i = 0, len = resultArr.length; i < len; i++) {
    var minIdx = i;
    for (var j = i + 1; j < len; j++) {
      if (resultArr[j] < resultArr[minIdx]) {
        minIdx = j;
      }
    }
    // 交换
    var temp = resultArr[i];
    resultArr[i] = resultArr[minIdx];
    resultArr[minIdx] = temp;
    // 装逼写法，实际性能差
    // [resultArr[i], resultArr[minIdx]] = [resultArr[minIdx], resultArr[i]];
  }
  return resultArr;
}

/**
 * 插入排序
 * @param arr
 */
function insertionSort(arr) {
  var resultArr = arr.slice(0);
  // 想想打扑克的时候，没摸一张牌，都根据大小插入到手中已有的牌中
  for (var i = 1, len = resultArr.length; i < len; i++) {
    // 摸牌
    var card = resultArr[i];
    var j = i - 1;
    // 从右往左，看手里的牌，如果比刚摸的牌大，就腾位置
    while (j >= 0 && resultArr[j] > card) {
      resultArr[j + 1] = resultArr[j];
      j--;
    }
    // 放牌
    resultArr[j + 1] = card;
  }
  return resultArr;
}

/**
 * 归并排序
 * @param arr
 */
function mergeSort(arr) {
  var splitIdx = Math.floor(arr.length / 2);
  var beforeArr = arr.slice(0, splitIdx);
  var afterArr = arr.slice(splitIdx);
  if (beforeArr.length > 1) {
    beforeArr = mergeSort(beforeArr);
  }
  if (afterArr.length > 1) {
    afterArr = mergeSort(afterArr);
  }
  var resultArr = [];
  var beforeIdx = 0,
    afterIdx = 0;
  while (beforeIdx < beforeArr.length || afterIdx < afterArr.length) {
    // 前后都有
    if (beforeIdx < beforeArr.length && afterIdx < afterArr.length) {
      if (beforeArr[beforeIdx] < afterArr[afterIdx]) {
        resultArr.push(beforeArr[beforeIdx]);
        beforeIdx++;
      } else {
        resultArr.push(afterArr[afterIdx]);
        afterIdx++;
      }
    } else if (beforeIdx < beforeArr.length) {
      // 前还有
      resultArr.push(beforeArr[beforeIdx]);
      beforeIdx++;
    } else {
      resultArr.push(afterArr[afterIdx]);
      afterIdx++;
    }
  }
  return resultArr;
}

// Prepare
var ARRAY_LENGTH = 10000;
var MAX_VALUE = ARRAY_LENGTH * 10;
var arr = new Array(ARRAY_LENGTH).fill(0).map(x => Math.floor(Math.random() * MAX_VALUE));

// Test quick sort
console.time('quick sort');
quickSort(arr);
console.timeEnd('quick sort');

// Test bulle sort
console.time('bulle sort');
bubbleSort(arr);
console.timeEnd('bulle sort');

// Test select sort
console.time('select sort');
bubbleSort(arr);
console.timeEnd('select sort');

// Test insertion sort
console.time('insertion sort');
insertionSort(arr);
console.timeEnd('insertion sort');

// Test merge sort
console.time('merge sort');
mergeSort(arr);
console.timeEnd('merge sort');
