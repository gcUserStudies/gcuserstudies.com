/* Minimal gallery helper.
   The expand/collapse behaviour is pure CSS via native <details>
   (with the shared name= attribute giving single-open accordion).
   The only thing script is needed for: a click on the "Download"
   link lives inside the <summary>, so without this it would also
   toggle the card open/closed. Stop that one click from bubbling. */
document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.gc-gallery summary a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }
});
