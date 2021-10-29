//screen text
const topScreen = document.querySelector('.topS');
const botScreen = document.querySelector('.botS');

//all buttons
const buttonNumber = document.querySelectorAll('.btnNumber');
const buttonOperator = document.querySelectorAll('.operation');
const buttonDel = document.querySelector('#butn-del');
const buttonAc = document.querySelector('#butn-ac');
const buttonPosNeg = document.querySelector('#butn-posneg');

//START--TEMP CONTENT
let botScTempContent =[];
let topScTempContent =[];

//FOR OPERATION 
let valueA ='';
let valueB =0;
let operationArr =[];
let currentOperator ='';
let newValue =0;
let Answer =0;

//START--ALL FUNCTIONS

function combineInput(){
    const combinedNum = botScTempContent.join('');
    botScreen.textContent = combinedNum;
}

function updateScreen(){
    topScreen.textContent = `${valueA}${currentOperator}`
    botScreen.textContent=Answer;
    console.log(Answer);
}

function operate(a,b,symbol){
    if (symbol=='+'){
        return a+b;
    }
    else if (symbol=='-'){
        return a-b;
    }
    else if (symbol=='*'){
        return a*b;
    }
    else if (symbol=='÷'){
        return a/b;
    }
    else if (symbol=='sqrt'){
        return a**0.5;
    }
    else if (symbol=='='){
        return valueA;
    }
    else{
        return valueA;
    }

}

function evaluate(){
    Answer = operate(valueA,valueB,currentOperator);
}

function clearNew(){
    botScTempContent =[];
    botScreen.textContent = '';
    topScreen.textContent = '';
    valueA ='';
    valueB =0;
    operationArr =[];
    currentOperator ='';
    newValue =0;  
}

//END--ALL FUNCTIONS

buttonDel.addEventListener('click', function(){
    botScTempContent.pop();
    combineInput();
})

buttonAc.addEventListener('click', clearNew)

buttonPosNeg.addEventListener('click', function(){
    if (botScTempContent.length>0){
        if(botScTempContent[0]!='-'){
            botScTempContent.unshift('-');
        }
        else if(botScTempContent[0]=='-'){
            botScTempContent.shift('-');
        }
    }
    else if(botScTempContent.length==0 && currentOperator=='='){
        clearNew();
        botScTempContent=[Answer];
        if(botScTempContent[0]!='-'){
            botScTempContent.unshift('-');
        }
        else if(botScTempContent[0]=='-'){
            botScTempContent.shift('-');
        }
    }
    else if(botScTempContent.length==0 && currentOperator!='='){
        valueA=Answer;
        botScTempContent=[Answer];
        if(botScTempContent[0]!='-'){
            botScTempContent.unshift('-');
        }
        else if(botScTempContent[0]=='-'){
            botScTempContent.shift('-');
        }
    }

    combineInput(); 

})

for(let i=0; i<buttonNumber.length; i++){
    buttonNumber[i].addEventListener('click', function(){
        let tempSet = new Set(botScTempContent);

        if(currentOperator=='='){
            clearNew();
        }
        
        if (tempSet.has('.')){
            if (buttonNumber[i].textContent == '.'){

            }
            else{
                botScTempContent.push(buttonNumber[i].textContent);
                combineInput(); 
            }
            
        }
        else{
            botScTempContent.push(buttonNumber[i].textContent);
             combineInput(); 
        }
        

    })
}


for(let i=0; i<buttonOperator.length; i++){
    buttonOperator[i].addEventListener('click', function(){
        
       if(valueA == ''){
            valueA = Number(botScTempContent.join(''));
            botScTempContent=[];
        }
       else{
            valueB = Number(botScTempContent.join(''));
            valueA = Answer;
            botScTempContent=[];
        }  
        
        evaluate()

            if(buttonOperator[i].textContent === '+'){
                currentOperator ='+'; 
                valueA = Answer;
                updateScreen();
            }
            
            else if(buttonOperator[i].textContent === '-'){
                currentOperator ='-'; 
                valueA = Answer;
                updateScreen();
            }

            else if(buttonOperator[i].textContent === 'x'){
                currentOperator ='*';     
                valueA = Answer;
                updateScreen();
            }

            else if(buttonOperator[i].textContent === '÷'){
                currentOperator ='÷';     
                valueA = Answer;
                updateScreen();
            }

            else if(buttonOperator[i].textContent === 'sqrt'){
                currentOperator ='sqrt';     
                valueA = operate(valueA,valueB,currentOperator);
                topScreen.textContent = `${Answer}${currentOperator}`;
                botScreen.textContent=valueA;
            }

            else if(buttonOperator[i].textContent === '='){
                currentOperator ='=';     
                valueA = Answer;
                updateScreen();
            }

        
    })
}









    
