//screen text
const topScreen = document.querySelector('.topS');
const botScreen = document.querySelector('.botS');

//all buttons
const buttonNumber = document.querySelectorAll('.btnNumber');
const buttonOperator = document.querySelectorAll('.operation');
const buttonDel = document.querySelector('#butn-del');
const buttonAc = document.querySelector('#butn-ac');

//START--TEMP CONTENT
let botScTempContent =[];
let topScTempContent =[];

//FOR OPERATION 
let newValue =0;

//START--ALL FUNCTIONS

function combineInput(){
    const combinedNum = botScTempContent.join('');
    console.log(combinedNum);
    botScreen.textContent = combinedNum;
}

function updateScreen(){
    topScreen.textContent = botScreen.textContent;
    botScreen.textContent=newValue;
}

//END--ALL FUNCTIONS

buttonDel.addEventListener('click', function(){
    botScTempContent.pop();
    combineInput();
})

buttonAc.addEventListener('click', function(){
    botScTempContent =[];
    botScreen.textContent = '';
    topScreen.textContent = '';
})

for(let i=0; i<buttonNumber.length; i++){
    buttonNumber[i].addEventListener('click', function(){
        let tempSet = new Set(botScTempContent);
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
        console.log(botScTempContent);

        if(buttonOperator[i].textContent === '+'){
            newValue = eval(botScTempContent.join(''));
            botScTempContent=[newValue];
            botScTempContent.push('+');
            updateScreen();           
        }

        else if(buttonOperator[i].textContent === '-'){
            newValue = eval(botScTempContent.join(''));
            botScTempContent=[newValue];
            botScTempContent.push('-');
            console.log(newValue);
            updateScreen();
        }

        else if(buttonOperator[i].textContent === 'x'){
            newValue = eval(botScTempContent.join(''));
            botScTempContent=[newValue];
            botScTempContent.push('*');
            console.log(newValue);
            updateScreen();
        }

        else if(buttonOperator[i].textContent === '÷'){
            newValue = eval(botScTempContent.join(''));
            botScTempContent=[newValue];
            botScTempContent.push('/');
            console.log(newValue);
            updateScreen();
        }

        else if(buttonOperator[i].textContent === 'sqrt'){
            newValue = eval(botScTempContent.join('')**0.5);
            botScTempContent=[newValue];
            console.log(newValue);
            topScreen.textContent = botScreen.textContent+'√';
            botScreen.textContent=newValue;
        }

        else if(buttonOperator[i].textContent === '='){
            newValue = eval(botScTempContent.join(''));
            botScTempContent=[newValue];
            console.log(newValue);
            updateScreen();
        }

        
    })
}









    
