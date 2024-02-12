let colorArr = []
const colorScheme = document.getElementById('color-scheme')
const formElement = document.getElementById('form-element')

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
                      <button class="hex-color" id=${color}">${color}</button>
											<span>
                  </div>                    
              `
            }

						document.querySelectorAll('.hex-color').forEach(button => {
							button.addEventListener('click', event => {
								const buttonText = event.target.textContent
								navigator.clipboard.writeText(buttonText).then(() => {
									alert(`Hex color copied to clipboard ${buttonText}`)
								}, err => {
									alert('Unable to copy hex color to clipboard')
								})
							})
						})

            document.querySelectorAll('.color').forEach(element => {
              element.style.backgroundColor = `${element.getAttribute('id')}`
            })
            
            colorArr = []
            
        })

})



    






 




