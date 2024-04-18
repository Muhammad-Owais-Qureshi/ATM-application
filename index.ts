#! /usr/bin/env node
import inquirer from "inquirer"
let myBlanace = 10000;
let pin = 12345;

let answer = await inquirer.prompt([{
    name:"pin",
    type:"number",
    message:"Enter your pin"
}])

if(pin === answer.pin){
    let opption = await inquirer.prompt([{
        name:"info",
        message:"Select your opption",
        type:"list",
        choices:['Withdraw',"Check blance","Fast cash"]
    }])

    if(opption.info === "Withdraw"){
        let amountAns = await inquirer.prompt([
          {
              name:"amount",
              type:"number",
              message:"Enter your amount"
          }
       ])
       if(myBlanace < amountAns.amount){
        console.log("insefficent balance")
       }

     else if(myBlanace -= amountAns.amount) {
        console.log(`your remaining balance is ${myBlanace}`)
       }
       
   }
   
   else if(opption.info === "Check blance"){
    console.log(`Your balance is ${myBlanace}`)
    }

   if(opption.info === "Fast cash"){
    let fastCash = await inquirer.prompt([{
        name:"cash",
        message:"Select your withdraw amount",
        type:"list",
        choices:['1000','2000','5000','10000']
    }])
    if (fastCash.cash === '1000' || '2000' || '5000' || '10000' ){
     console.log(`your remaining balance is :${myBlanace -= fastCash.cash}`)
    }
   }
    
   

}

else{
    console.log("Incorrect pin")
}
    