var loading = (function() {
  
  var h = ['|', '/', '-', '\\'];
  var i = 0;
  var counter = 0;

  return setInterval(() => {
    counter++;
    i = (i > 3) ? 0 : i;
    //console.clear();
    console.log(h[i] + ' ' + counter);
    i++;
  }, 300);
})();

// clearInterval(loading) to stop it.