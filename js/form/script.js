const div = document.getElementById("result")

new URLSearchParams(window.location.search).forEach((value, name) => {
  div.append(`${name} : ${value}`)
  div.append(document.createElement('br'))
    console.log(div)
})
