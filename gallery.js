/* Minimal gallery helper.
   The expand/collapse behaviour is pure CSS via native <details>
   (with the shared name= attribute giving single-open accordion).
   Script is only needed for two things:
   1. A click on the "Download" link lives inside the <summary>, so
      without this it would also toggle the card open/closed. Stop
      that one click from bubbling.
   2. Deep links: index.html#momentum-tails (and the redirect pages
      under /studies/) open and scroll to the matching card. */
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.gc-gallery summary a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  function openCardFromHash() {
    var id = window.location.hash.slice(1);
    if (!id) return;
    var el = document.getElementById(id);
    if (!el) return;
    if (el.tagName === 'DETAILS') el.open = true;
    el.scrollIntoView({ block: 'start' });
  }

  openCardFromHash();
  window.addEventListener('hashchange', openCardFromHash);
});
