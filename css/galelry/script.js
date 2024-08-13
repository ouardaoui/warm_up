const baseUrl = "https://raw.githubusercontent.com/WebDevSimplified/Learn-CSS-Today/master/26-27-image-gallery/before/";
const images = document.querySelectorAll('body img');

images.forEach((img) => {
    img.src = baseUrl + img.id
});
