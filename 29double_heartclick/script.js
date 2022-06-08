const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) => { //ease way: dblclick
    if(clickTime === 0) {
        clickTime = new Date().getTime()
    } else {
        if ((new Date().getTime() - clickTime) < 800) {
            createHeart(e)
            clickTime = 0
        } else {
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e) => {
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY
    
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    const xInsideImg = x - leftOffset
    const yInsideImg = y - topOffset

    heart.style.top = `${yInsideImg}px`
    heart.style.left = `${xInsideImg}px`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}