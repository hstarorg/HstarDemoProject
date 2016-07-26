let pathList = [
  { path: 'a/b/b.txt' },
  { path: 'a/b/c/c.txt' },
  { path: 'a/a.txt' },
  { path: 'ab/a.txt' },
  { path: 'b/a.txt' },
  { path: 'a/x/a.txt' },
];

// 将数据转换为目录树
let folderTree = {};
pathList.forEach(p => {
  let pArr = p.path.split('/');
  let temp = folderTree;
  pArr.forEach(p2 => {
    if (!temp[p2]) {
      temp[p2] = {};
    }
    temp = temp[p2];
  });
});

// 通过递归计算
let result = {};

let isFile = (f) => f.indexOf('.') >= 0;

let getFileCountByFolder = (root, folderObj, level) => {
  let count = 0;
  Object.keys(folderObj).forEach(p => {
    if (isFile(p)) {
      return count += 1;
    }
    let cPath = `${root}${p}/`;
    if (result[cPath]) {
      count += result[cPath].fileCount;
    } else {
      let childCount = getFileCountByFolder(cPath, folderObj[p], level + 1);
      count += childCount;
      result[cPath] = { path: cPath, fileCount: childCount, level: level };
    }
  });
  return count;
};

getFileCountByFolder('', folderTree, 1);

// 将结果处理为数组
let resultArr = [];
Object.keys(result).forEach(key => resultArr.push(result[key]));

// 按照level和path排序（后来发现按照path排序更好看）
resultArr.sort((a1, a2) => {
  // old - 按照level和path排序
  // if (a1.level === a2.level) {
  //   return a1.path === a2.path ? 0 : (a1.path > a2.path ? 1 : -1);
  // }
  // return a1.level - a2.level;
  // new - 按照path排序
  return a1.path === a2.path ? 0 : (a1.path > a2.path ? 1 : -1);
});

// 输出结果
console.log(resultArr);