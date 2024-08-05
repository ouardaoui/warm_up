/*
console.log(window)

const element = document.createElement("span")
element.innerText = "hello there"
document.body.appendChild(element)
*/

const elementwithid = document.getElementById('id')
elementwithid.style.color = 'red'

const elementswithclass = document.getElementsByClassName('class')

arrayclass = Array.from(elementswithclass)

arrayclass.forEach(div => (div.style.color = 'green'))

input = document.querySelector("body > input[type='text']")
// queryselector to select first one and queryselectorALL for select all elements with selector 
//keeping mind queryselectorall return nodelist foreach work but map filter ... didnt work 


/*
function print()
{
    console.log("clicked")
}

const btn = document.querySelector("[btn]")


btn.addEventListener("click", print)
btn.removeEventListener("click",print )
console.log(btn)
*/

const form = document.querySelector("[form]")
form.addEventListener("submit" , e => {
    e.preventDefault();
    console.log("was submited !!")
})

console.log(form)
