
const user = {
    username: "Talha Rana",
    age: 30,
    welcomeMessage: function(){
        // console.log(`${this.username}, "Welcome to website`)
        // console.log(this);

    }
}

// user.welcomeMessage();
// user.username = "Nabeel Rana";
// user.welcomeMessage();

// console.log(this);  ===> output null <===


// function fnc (){
//     let username = "Talha Rana";
//     console.log(this.username);

// }

// fnc();  ===> Output undefined <===


// const fnc = ()=>{
//     let username = "Talha Rana";
//     console.log(this.username);
// }

// fnc();   ===> Output undefined <===

// function fnc(){
//     console.log(this)
// }
// fnc();

// const fnc = ()=>{
//     console.log(this);
// }
// fnc();


// ==============================================================

// ARROW FUCTION 


// Basic Arrow Functions --------------------
const arrowFunction = (num1,num2)=>{
    return num1 + num2
}

// console.log(arrowFunction(5,5))

//  () => num3 + num4   no need curly brackets // no need curly if you are using parentheses
// const arrowFunction2 = (num3,num4) =>  num3 + num4;

// console.log(arrowFunction2(10,15))


// we can't add objects in arrow fuction without parentheses
// Always Add Parentheses while writing ojects
const arrowFunction3 = (num4, num5) => ({ name: "Talha Rana"});

console.log(arrowFunction3(20,30));

