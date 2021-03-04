const a = function (cb) {
  window.onload = cb;
  // либо
  // window.addEventListener('load', cb)
}

a(function() {});
