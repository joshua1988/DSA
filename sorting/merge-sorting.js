var test = [4, 30, 2, 100, 23, 1, 60, 77, 47, 18];

var leftArr = [],
    rightArr = [],
    result = [],
    il = 0,
    ir = 0;

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  var mid = Math.floor(arr.length / 2),
      leftArr = arr.slice(0, mid);
      rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  while (leftArr.length > il && rightArr.length > ir) {
    if (leftArr[il] < rightArr[ir]) {
      result.push(leftArr[il++]);
    } else {
      result.push(rightArr[ir++]);
    }
  }
  return result.concat(leftArr.slice(il)).concat(rightArr.slice(ir));
}

mergeSort(test);
