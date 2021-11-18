/* Deleting tracklist functionality */

let deleteBtn = document.querySelectorAll(".btn-danger")

deleteBtn.forEach((e) => {
    e.addEventListener('click', () => {
        e.parentNode.parentNode.remove()
    })
})

