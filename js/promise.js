// this callback hell
/*
setTimeout(() => {
    console.log("1")
    setTimeout(() => {
        console.log("2")
        setTimeout(() => {
            console.log("3")
        }, 300);
    }, 300);
}, 300);
*/

// warp up wit promise first

const promise = new Promise((reselve, reject) => {
  const sum = 1
  if (sum == 1) reselve('hello')
  else reject('Error')
})

promise
  .then(message => {
    console.log(message)
  })
  .catch(message => {
    console.error(message)
  })

// resolve callback hell

function setTimeoutPromise(delta) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("all is right");
    }, delta)
  })
}

setTimeoutPromise(250)
  .then(() => {
    console.log('1')
    return setTimeoutPromise(250)
  })
  .then(() => {
    console.log('2')
    return setTimeoutPromise(250)
  })
  .then(() => {
    console.log('3')
  })

// u can use async await rather than code above

async function func() {
  try {
    let message = await setTimeoutPromise(250)
    console.log('1')
    console.log(message)
    message = await setTimeoutPromise(250)
    console.log('2')
    console.log(message)
  } catch (e) {
    console.error(e)
  } 
}

//func() // but in asyn await i should wait 250 + 250 + 250 is bad think 
//so 


//but this solution handless  waiting time 
setTimeoutPromise(250).then(message => {
    console.log(message)
})

setTimeoutPromise(250).then(message => {
    console.log(message)
})

setTimeoutPromise(250).then(message => {
    console.log(message)
})

// in promise.all if 1 failed  all fct didnt work
// lock at Promise.race  Promise.any  Promise.allSettled
Promise.all([
  Promise.resolve('1'),
  Promise.reject('error on 2'),
  Promise.resolve('3'),
])
  .then(message => {
    console.log(message)
  })
  .catch(err => {
    console.error(err)
  })

//.finaly work even then or catch work
