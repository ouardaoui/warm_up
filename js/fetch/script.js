const URL = 'https://jsonplaceholder.typicode.com/posts/100'

fetch(URL)
  .then(response => {
    if (!response.ok) throw new Error(`Response status : ${response.status}`)
    return response.json()
  })
  .then(data => {
    console.log(data.title + ' ' + data.id)
  })
  .catch(e => {
    console.error(e)
  })

const request = new Request('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'im comiing',
  }),
  headers: {
    'Content-Type': 'application/json',
  },
})

async function post () {
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
}

const button = document.querySelector("button")

button.addEventListener("click", post)