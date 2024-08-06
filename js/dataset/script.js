const btns = document.querySelectorAll('button')

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const currentClicks = parseInt(btn.dataset.clicks)
        btn.dataset.clicks = currentClicks + 1
    })
})