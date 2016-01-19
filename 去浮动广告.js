-function (doc) {
  var bc = Array.prototype.forEach;

  function getStyle(o, s) {
    if (o.style[s]) return o.style[s];
    if (doc.defaultView && doc.defaultView.getComputedStyle) {
      var x = doc.defaultView.getComputedStyle(o, '');
      return x && x.getPropertyValue(s);
    }
  }
  function testStyle(o) {
    var s = getStyle(o, 'position');
    return s === 'fixed' || s === 'absolute';
  }
  function isFloatLay(o) {
    var x = o.offsetParent;
    return !x || x.tagName === 'BODY' || x.tagName === 'HTML';
  }
  -function(el) {
    ['iframe','img','object','embed','video'].forEach(function (s){
      bc.call(el.getElementsByTagName(s), function (x){
        while (x) {
          if (isFloatLay(x)) {
            testStyle(x) && x.parentNode.removeChild(x);
            break;
          }
          x = x.offsetParent;
        }
      });
    });
  }(doc);
}(document);