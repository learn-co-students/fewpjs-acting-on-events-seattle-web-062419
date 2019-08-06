// Your code here
const dodger = document.getElementById("dodger");
dodger.style.backgroundColor = "#000000";
dodger.style.backgroundColor = "#FF69B4";
dodger.style.left;
console.log(dodger.style.left)
dodger.style.bottom;
dodger.style.bottom = "100px";
dodger.style.bottom = "0px";
document.addEventListener("keydown",function(event) {
    if(event.key === "ArrowLeft") {
        const leftNumbers = dodger.style.left.replace("px","");
        console.log(leftNumbers)
        const left = parseInt(leftNumbers,10);
        if (left > 0) {
            dodger.style.left = `${left - 1}px`;
          }
    }
})