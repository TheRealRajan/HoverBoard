const container = document.querySelector('.container')
const colors = ['#3891a6', '#fde74c', '#ec9e57', '#e4795c', '#db5461','#e3655b','#95b8d1', '#666a86', '#edafb8', '#f42272', '#2541b2', '#1768ac', '#06bee1',
'#003459', '#662c91', '#17a398']

const SQUARES = 621

for(let i =0; i < SQUARES ; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', ()=> setColor(square))
    square.addEventListener('mouseout', ()=> removeColor(square))

    container.appendChild(square)
}

function setColor(element){
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 5px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}
