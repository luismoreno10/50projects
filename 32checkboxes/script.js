const toggles = document.querySelectorAll('.toggle')
const opt1 = document.querySelector('#Option1')
const opt2 = document.querySelector('#Option2')
const opt3 = document.querySelector('#Option3')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theclickedOne) {
    if(opt1.checked && opt2.checked && opt3.checked) {
        if(opt1 === theclickedOne) {
            opt3.checked = false
        }

        if(opt2 === theclickedOne) {
            opt1.checked = false
        }

        if(opt3 === theclickedOne) {
            opt2.checked = false
        }
    }
}