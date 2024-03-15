
// If Statement  
// If condition is true if statement will execute the code

// if( 2 == "2"){
//     console.log("Executed");  //===> Output True 
// }

// if(2 === "2"){
//     console.log("Executed")  // ===> Output False
// }

// let temperature = 50;

// if(temperature < 50){
//     console.log("Less than 50:");

    
    
// }else{
//     console.log("Temperature OKAY")
// }

const userLoggedIn = true;
const debitCard = true;
const loggedFromGoogle = false;
const loggedfromEmail = true;

if (userLoggedIn && debitCard) {
    console.log("Allowed to Access the Website")
    
}

if (loggedFromGoogle || loggedfromEmail) {
    console.log("User LoggedIn Now ")
    
}



// Comparison Operators
// Greater than >
// Greater  then equal to >=
// Less than <
// Less than and equal to =<
// equal t ==
// equal to and data types ===
// Not equal to !==
