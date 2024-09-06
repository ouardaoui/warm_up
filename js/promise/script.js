const button = document.querySelector("button")

function myEven(element , method) {
    return new Promise((resolve , reject ) => {
        element.addEventListener(method,resolve)
    }) 
}

function getValueWithDelay(value , delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(`ur value ${value}`), delay)
    })
}

function getValueWithDelayError(value , delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(`something went wrong`), delay)
    })
}

async function myfunc() 
{
    try {
        let mes = await getValueWithDelay(4, 250)
        console.log(mes)
        mes = await getValueWithDelay(5, 250)
        console.log(mes)
        const e = await getValueWithDelayError(6, 250)
        console.log(e)

    }catch(e)
    {
        console.error(e)
    }finally {
        console.log("im excute even fail or seccus")
    }
}

myfunc()