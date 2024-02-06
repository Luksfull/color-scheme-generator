let colorArr = []
const colorScheme = document.getElementById('color-scheme')
const formElement = document.getElementById('form-element')

function copy(text) {
    navigator.clipboard.writeText(text).then(() => {
        console.log(`Copied text: ${text}`)
        // alert(`Copied text: ${text}`)
    })
    .catch((error) => {
        console.error(`Could not copy text: ${error}`)
    })
}

formElement.addEventListener('submit', function displayColorScheme(e) {
    
    e.preventDefault()
    const color = document.getElementById('color-picker').value.slice(1)
    const scheme = document.getElementById('schemes-list').value
    
    if (colorScheme != "") {
            colorScheme.innerHTML = ""
        }
    

    
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            data.colors.map(function(color) {
                colorArr.push(color.hex.value)
            })
            
            for (let color of colorArr) {
                colorScheme.innerHTML += `
                    <div id="color-holder" class="color-holder">
                        <div class="color" id=${color}></div>
                        <button class="hex-color" id=${color} onclick="copy()">${color}</button>
                    </div>                    
                `
            }
            
            document.querySelectorAll('.color').forEach(element => {
                element.style.backgroundColor = `${element.getAttribute('id')}`
            })
            
            colorArr = []
            
        })

})





// document.querySelectorAll('.hex-color').forEach(hexcolor => hexcolor.addEventListener('click'), event => {
//         document.getElementById('color-hodler').innerHTML += "itworks"
//     })


    






 




