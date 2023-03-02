
//STEP 1.
function add(a,b){
    return display.innerHTML = parseFloat(a) + parseFloat(b)
}
function subtract(a,b){
   
   return display.innerHTML = parseFloat(a) - parseFloat(b)
}
function multiply(a,b){
    return display.innerHTML = parseFloat(a) * parseFloat(b)
}
function divide(a,b){
    return display.innerHTML = parseFloat(a) / parseFloat(b)
}
//

//OPERATE
function operate(operand,operator,operand2){
    if(operator === "+"){
        display.innerHTML = add(operand,operand2)

    }
    else if(operator === "-"){
    display.innerHTML = subtract(operand,operand2)

    }
    else if(operator === "*"){

    display.innerHtml = multiply(operand,operand2)

    }
    else if(operator === "/"){

     display.innerHTML = divide(operand,operand2)

    }
}
//
let display = document.querySelector('.display')
let num1 = ''
let op = ''
let num2 = ''

//GRAB THE NUMBERS
  let btnNums = document.querySelectorAll('.number')
  btnNums.forEach((nums)=> {
    nums.addEventListener('click',()=> {
      if(op === ""){
        num1 += nums.value
        display.innerHTML = num1
      }else {
        num2 += nums.value
        display.innerHTML = num2
      }
      
       
    })
  })

//


//GRAB THE OPERATORS
let opBtns = document.querySelectorAll('.operator')
opBtns.forEach((opBtn)=> {
    opBtn.addEventListener('click',()=> {

        if(num2){
            operate(num1,op,num2)
            num1 = ''
            num1 = display.innerHTML
            num2 = ''
            op = ''
            op = opBtn.value
            
        }else {
            op = opBtn.value
        }
    })
})


//


//EQUALS 
let equals = document.querySelector('#equals')

equals.addEventListener('click',()=> {
   operate(num1,op,num2)
  
})
//



//CLEAR




function clean(){
    display.innerHTML = ''
   num1 = ''
   num2 = ''
   op = ''
}

