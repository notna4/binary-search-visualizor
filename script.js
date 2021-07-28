const grid = document.querySelector("grid");

let a = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

var steps = 0;
var target = 0;
var clicked = 0;
var prev;

for (let i = 0; i < a.length; i++) {
  const tile = document.createElement("div");
  const para = document.createElement("p");

  tile.className = "tile";
  para.innerHTML = a[i];

  tile.appendChild(para);
  grid.appendChild(tile);

  tile.onclick = function () {
    if (clicked == 1) {
      tile[prev].style.backgroundColor = "black";
      target = tile.textContent;
      tile.style.backgroundColor = "red";
    } else if (clicked == 0) {
      target = tile.textContent;
      tile.style.backgroundColor = "red";
      prev = tile.textContent;
      clicked = 1;
    }
    var text = document.getElementById("text");
    text.textContent = "number " + target;
  };
}

var left = 0;
var right = a.length - 1;
var found = 0;
var tiles = document.getElementsByClassName("tile");
var mid = Math.floor((left + right) / 2);

var mid = Math.floor((left + right) / 2);

function binarySearch(target) {
  var btn = document.getElementById("search-btn");
  btn.textContent = "Next step";
  steps++;
  if (found != 1) {
    if (left <= right) {
      mid = Math.floor((left + right) / 2);

      tiles[left].style.backgroundColor = "rebeccapurple";
      tiles[mid].style.backgroundColor = "rosybrown";
      tiles[right].style.backgroundColor = "orchid";

      if (steps > 0) {
        if (left > 0) {
          for (let i = 0; i < left; i++) {
            tiles[i].style.backgroundColor = "palegoldenrod";
            tiles[i].style.color = "palegoldenrod";
          }
        }
        var margin = a.length;
        if (right < margin) {
          for (let i = right + 1; i < margin; i++) {
            tiles[i].style.backgroundColor = "palegoldenrod";
            tiles[i].style.color = "palegoldenrod";
          }
        }
      }

      if (target == a[mid]) {
        tiles[mid].style.backgroundColor = "gold";
        found = 1;
      } else if (target > a[mid]) {
        left = mid + 1;
      } else if (target < a[mid]) {
        right = mid - 1;
      }
    }
  }
  if (found == 1) {
    var btn = document.getElementById("search-btn");
    btn.disabled = "true";

    var text = document.getElementById("text");
    text.textContent =
      "number " +
      target +
      " is found on position " +
      mid +
      " with only " +
      steps +
      " steps.";
  }
}

function reset() {
  location.reload();
}
