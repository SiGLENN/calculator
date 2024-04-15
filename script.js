
const buttons = document.querySelectorAll('button') 
const display = document.querySelector('.number-on-screen')


let numberStored = '' 
let operatorStored = '' 

let newInput = false
let didEquals = false 


function storeCalc(operator) { 
  if (!numberStored) { 
    numberStored = display.textContent 
  } 
  else { 
    numberStored = operate(Number(numberStored), operatorStored, Number(display.textContent))
    
  }
  
  operatorStored = operator 
  newInput = true 
  didEquals = false 
}

function operate(a, operator, b) {
  if (operator == '+') {
    return add(a, b)  
  }
  else if (operator == '-') {
    return subtract(a, b)
  }
  else if (operator == 'x') {
    return multiply(a, b) 
  }
  else if (operator == '÷') {
      return divide(a, b)
    } 
  else {
    return null; 
  }
}

  console.log(operate(10, '/', 2));


  function add(a, b) {
    return a + b
  }

  function subtract(a, b) {
    return a - b
  }

  function multiply(a, b) {
    return a * b
  }

  function divide(a, b) {
    return a / b
  }


function clear() {
  display.textContent = 0 
  numberStored = '' 
  operatorStored = ''
}


function addToDisplay(number) {
  let displayNum = display.textContent 
  
  if(newInput) { 
    newInput = false 
    setDisplay(number) 
  } 
  else if (displayNum == 0) { 
    setDisplay(number) 
  } 
  else {
    if (displayNum.includes('e')) { 
      displayNum = Number(displayNum); 
    } 
    
    displayNum = displayNum + number
    setDisplay(displayNum)
    
  }
}


  
  function setDisplay(displayNum) { 
    displayNum = displayNum.toString()

    if (displayNum.length > 9) { 
      displayNum = parseFloat(displayNum) 
      displayNum = displayNum.toExponential(2) 
    } 
    
    display.textContent = displayNum;  
  } 

buttons.forEach(button =>{ 
    button.addEventListener('click', function(){ 
        let input = this.textContent
        
        
        if (/\d/.test(input)) { 
            if (didEquals) { 
                setDisplay(input) 
                didEquals = false 
            } 
            else { 
            addToDisplay(input) 
            }
        } 
        else if (input == 'AC') { 
            clear() 
        }
        else if (input == 'C') { 
            clear() 
        }
        else if (input == '=') { 
          
            if (!numberStored || !operatorStored) { 
                alert('Syntax Error') 
                clear()
            }
           
            else { 
                numberStored = operate(Number(numberStored), operatorStored, Number(display.textContent))
             
                operatorStored = '' 
                setDisplay(numberStored) 
                numberStored = '' 
                didEquals = true 
            }
        } 
        else { 
            storeCalc(input) 
        } 
    }) 
}); 
