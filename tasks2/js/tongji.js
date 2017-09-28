"use strict";
window.onload = function() {
  var h_series = document.querySelectorAll('.data_cell div:nth-child(1)');
  var h = 0;
  var $__3 = true;
  var $__4 = false;
  var $__5 = undefined;
  try {
    for (var $__1 = void 0,
        $__0 = (h_series)[Symbol.iterator](); !($__3 = ($__1 = $__0.next()).done); $__3 = true) {
      var i = $__1.value;
      {
        if (parseFloat(i.innerHTML) > h)
          h = parseFloat(i.innerHTML);
      }
    }
  } catch ($__6) {
    $__4 = true;
    $__5 = $__6;
  } finally {
    try {
      if (!$__3 && $__0.return != null) {
        $__0.return();
      }
    } finally {
      if ($__4) {
        throw $__5;
      }
    }
  }
  var multiple = 100 / h;
  var series = document.querySelectorAll('.data_cell');
  var $__10 = true;
  var $__11 = false;
  var $__12 = undefined;
  try {
    for (var $__8 = void 0,
        $__7 = (series)[Symbol.iterator](); !($__10 = ($__8 = $__7.next()).done); $__10 = true) {
      var i$__14 = $__8.value;
      {
        i$__14.querySelectorAll('div')[2].style['height'] = multiple * i$__14.querySelectorAll('div')[0].innerHTML + 'px';
      }
    }
  } catch ($__13) {
    $__11 = true;
    $__12 = $__13;
  } finally {
    try {
      if (!$__10 && $__7.return != null) {
        $__7.return();
      }
    } finally {
      if ($__11) {
        throw $__12;
      }
    }
  }
  document.querySelector('.nav_series').addEventListener('click', function(event) {
    event = event || window.event;
    var id = event.target.getAttribute('id');
    var dh_line = document.querySelector('#cjzttj .dh_line');
    if (id === 'cjzttj') {
      dh_line.style['left'] = 0;
      document.querySelector('#cjzttj').style['color'] = 'rgb(46,130,252)';
      document.querySelector('#mexxtj').style['color'] = '#92a1a8';
      document.querySelector('#cjzt').style['display'] = 'block';
      document.querySelector('#mdxx').style['display'] = 'none';
    } else if (id === 'mexxtj') {
      dh_line.style['left'] = dh_line.offsetWidth + 40 + 'px';
      document.querySelector('#cjzttj').style['color'] = '#92a1a8';
      document.querySelector('#mexxtj').style['color'] = 'rgb(46,130,252)';
      document.querySelector('#cjzt').style['display'] = 'none';
      document.querySelector('#mdxx').style['display'] = 'block';
    }
  });
};
