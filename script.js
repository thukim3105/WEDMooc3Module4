function changeImage() {
    options = ["munising.jpg", "pink_blossoms.png", "potted_plants.png", "red_maple.png", "reflected_tree.JPG", "tree_with_white_blooms.png", "tulips.png", "white_buds_on_tree.png"];
    random = "images/" + options[Math.floor(Math.random() * options.length)];

    image = document.querySelector(".images");
    image.setAttribute("src",random);
    image.setAttribute("alt",""); 
}

function mouseClick() {
    document.getElementById("box").innerHTML = "Who are you?";
    document.getElementById("box").style.backgroundColor = "blue";
}

function mouseMove() {
    document.getElementById("box").innerHTML = "You moved.";
    document.getElementById("box").style.backgroundColor = "purple";
}

function mouseOut() {
    document.getElementById("box").innerHTML = "Oops!";
    document.getElementById("box").style.backgroundColor = "red";
}

function setTabIndex() {
    list = document.querySelectorAll(".images");
    for (let i = 0; i < 3; i++) {
        list[i].tabIndex = "0";
        console.log(list[i]);
    }
}