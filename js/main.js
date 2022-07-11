let today = new Date()

let date =
  today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()

const navToggler = document.querySelector('.nav-toggler')
const nav = document.querySelector('.nav')

navToggler.addEventListener('click', () => {
  nav.classList.toggle('nav-active')
})
