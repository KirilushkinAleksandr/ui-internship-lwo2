function firstNSmallest(arr, num) {
  let res = Array(...arr).reverse();
  while (res.length !== num){
    res.splice(res.indexOf(Math.max(...res)),1);
  }
  return res.reverse();
}

export {firstNSmallest};
