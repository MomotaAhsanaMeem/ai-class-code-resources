const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const penBtn = document.getElementById("penBtn");
const eraserBtn = document.getElementById("eraserBtn");
const clearBtn = document.getElementById("clearBtn");

let drawing = false;
let erasing = false;

// Set default pen settings
ctx.lineWidth = 3;
ctx.lineCap = "round";
ctx.strokeStyle = "black";

// Event Listeners for Drawing
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", stopDrawing);

function startDrawing(event) {
    drawing = true;
    draw(event);
}

function draw(event) {
    if (!drawing) return;
    
    ctx.lineWidth = erasing ? 15 : 3; // Make eraser thicker
    ctx.strokeStyle = erasing ? "white" : "black";

    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke();
}

function stopDrawing() {
    drawing = false;
    ctx.beginPath();
}

// Pen & Eraser Controls
penBtn.addEventListener("click", () => { erasing = false; });
eraserBtn.addEventListener("click", () => { erasing = true; });

// Clear Canvas
clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
