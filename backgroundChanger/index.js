const parent = document.getElementById("parent");

parent.addEventListener("click", function(e) {
    document.body.style.backgroundColor = e.target.id;
});