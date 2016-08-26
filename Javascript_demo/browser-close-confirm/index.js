window.addEventListener('beforeunload', function (evt) {
  let returnValue = '您确定要离开了么？';
  evt.returnValue = returnValue;
  return returnValue;
}, false);