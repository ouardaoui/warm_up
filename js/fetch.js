fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if(res.ok)
    {
        const body = res.json()
        return body
    }
  })
  .then(data => {
    data.forEach(element => {
        console.log(element.name)
    });
  })
  .catch(e => {
    console.error(e)
  })
