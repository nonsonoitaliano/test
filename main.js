const groups = [
  "designers",
  "writers",
  "coders"
]

let currentIndex = 0;

window.onload = function() {
  setInterval(
    function() {
      document.getElementById("target-group").innerHTML = groups[currentIndex];

      currentIndex++;

      if (currentIndex >= groups.length) {
        currentIndex = 0;
      }
    },
    5000
  );
}
