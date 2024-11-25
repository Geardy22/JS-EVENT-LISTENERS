const divs = document.querySelectorAll('div')

document.addEventListener('click', () => {

})

addGlobalEventListener('click', 'div', e => {
    if (e.target.matches('div')){
        console.log('hi')
    }
})

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener('click', e => {
        if (e.target.matches(selector)) callback(e)
    })
}

const newDiv = document.createElement('div')
newDiv.style.width = '200px'
newDiv.style.height = '200px'
newDiv.style.backgroundColor = 'purple'
document.body.append(newDiv)