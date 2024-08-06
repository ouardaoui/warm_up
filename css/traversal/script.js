const grand = document.querySelector(".grandparent")

grand.style.color = "red";

const firstparent = grand.children[0]

firstparent.style.color = "blue"

const secondparent = grand.children[1]

const sparent = firstparent.nextElementSibling

sparent.style.color = "purple"