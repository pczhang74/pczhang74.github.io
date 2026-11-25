/* Small enhancement script. Deliberately dependency-free: the page must work
   from a single static origin so the network analysis in the report is
   uncluttered by third-party requests. */

(function () {
  'use strict';

  var clock = document.getElementById('clock');
  if (clock) {
    var now = new Date();
    clock.textContent = 'Page loaded at ' + now.toISOString() +
      ' (client clock).';
  }

  // Anchor links scroll smoothly where supported. Adds no network traffic.
  var links = document.querySelectorAll('a[href^="#"]');
  Array.prototype.forEach.call(links, function (link) {
    link.addEventListener('click', function (event) {
      var target = document.querySelector(link.getAttribute('href'));
      if (target && typeof target.scrollIntoView === 'function') {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}());
