const boy = document.getElementById("boy");
const girl = document.getElementById("girl");
const l1 = boy.value.length;
const l2 = girl.value.length;
const result = document.getElementById("result")

document.querySelector("button").addEventListener("click", function(e) {
    e.preventDefault();
    if(girl.value === "" || boy.value === "") {
        alert("Please enter both names");
        return;
    }    
    const loveScore = Math.floor(Math.random() * 100) + 1;
    result.innerText = loveScore;
    boy.value = "";
    girl.value = "";
})