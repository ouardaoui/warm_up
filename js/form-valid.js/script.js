const form = document.getElementById("form")
const username = document.getElementById("username")
const password = document.getElementById("password")
const passwordConf = document.getElementById("password-confirmation")
const terms = document.getElementById("terms")
const errorList = document.querySelector(".errors-list")
const error = document.querySelector(".errors")


function createELe(string) {
    const ele = document.createElement("li")
    ele.innerText = string 
    return ele
}

// TODO: Create an event listener for when the form is submitted and do the following inside of it.
form.addEventListener("submit" , (e) => {
    error.querySelectorAll("li").forEach(ele => {
        ele.remove()
    })
    error.classList.remove("show")
    let hasError = false 
    const stringError = [
            "Username must be a least 6 characters long", 
            "Password must be a least 10 characters long",
            "You must accept the terms",
            "Password must match"
    ]
    if(username.value.length < 6)
    {
        hasError = true
        const list = createELe(stringError[0])
        errorList.appendChild(list)
    }
    if(password.value.length < 10)
    {
        hasError = true
        const list = createELe(stringError[1])
        errorList.appendChild(list)
        
    }
    else
    {
        if(passwordConf.value !== password.value)
        {
            hasError = true
            const list = createELe(stringError[3])
            errorList.appendChild(list)
        }
    }
    if(!terms.checked)
    {
        hasError = true
        const list = createELe(stringError[2])
        errorList.appendChild(list)
    } 
    if(hasError)
    {
        e.preventDefault()
        error.classList.add("show")
    }
    
})
