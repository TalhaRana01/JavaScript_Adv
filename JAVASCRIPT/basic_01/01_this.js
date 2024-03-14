
const user = {
    username: "Talha Rana",
    age: 30,
    welcomeMessage: function(){
        console.log(`${this.username}, "Welcome to website`)

    }
}

user.welcomeMessage();
user.username = "Nabeel Rana";
user.welcomeMessage();

console.log(this);
// function fnc (){
//     let username = "Talha Rana";
//     console.log(this.username);

// }

// fnc();

// const fnc = ()=>{
//     let username = "Talha Rana";
//     console.log(this.username);
// }

// fnc();