let today = new Date()

let date =
  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
let year = today.getFullYear()
const currentYear = document.querySelector('.current-year')
const navToggler = document.querySelector('.nav-toggler')
const nav = document.querySelector('.nav')

navToggler.addEventListener('click', () => {
  nav.classList.toggle('nav-active')
})

currentYear.innerHTML = year
