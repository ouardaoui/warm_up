const button = document.querySelector('button')

button.addEventListener("click", () => {
    let color = getComputedStyle(document.documentElement).getPropertyValue('--proprity-color')
    color = color=="green" ?  "red"  : "green"
    document.documentElement.style.setProperty('--proprity-color', color)
})



