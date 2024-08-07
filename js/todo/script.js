const input = document.querySelector("#item-input")
const form = document.querySelector(".new-item")
const list = document.querySelector(".list")

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    const item = document.createElement("div")
    item.innerText = input.value 
    item.classList.add("list-item")
    list.appendChild(item)
    input.value = ""
    item.addEventListener("click", () => {
        item.remove()
        //list.removeChild(item)
    })
})

