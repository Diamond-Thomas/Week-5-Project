const snakePoem = document.getElementById("poem-the-snake");
snakePoem.style.backgroundColor = "green";

const westWallPoems = document.querySelectorAll("#wall-west article");

console.log("Single selected poem: " , snakePoem);
console.log("All poems on the West Wall: " , westWallPoems);

const movingPoem = document.getElementById("poem-dancing-in-the-Rain");
const eastWall = document.getElementById("wall-east");

eastWall.appendChild(movingPoem);
movingPoem.style.backgroundColor = "blue";





document.getElementById("add-poem-to-gallery").addEventListener("click", function () {
    const title = document.getElementById("poem-title").value;
    const lines = document.getElementById("poem-lines").value;
    const color = document.getElementById("poem-color").value;
    const wallId = document.getElementById("wall-select").value;

    const newPoem = document.createElement("article");
    newPoem.style.backgroundColor = color;
    const h3 = document.createElement("h3");
    h3.textContent = title;

    const p = document.createElement("p");
    p.textContent = lines;

    newPoem.append(h3, p);

    document.getElementById(wallId).appendChild(newPoem);

    document.getElementById("poem-title").value = "";
    document.getElementById("poem-lines").value = "";
    document.getElementById("poem-color").value = "";
});