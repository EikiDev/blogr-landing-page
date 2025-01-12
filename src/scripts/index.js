const dropdowns = document.querySelectorAll('.dropdown')
const dropdownsButtons = document.querySelectorAll('.dropdown-btn')

dropdownsButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if(dropdowns[index].classList.contains('show')) {
            dropdowns[index].classList.remove('show')
        } else {
            dropdowns.forEach(dropdown => {dropdown.classList.remove('show')})
            dropdowns[index].classList.add('show')
        }
    })
})