const result = document.getElementById("result");
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const chancesNums = document.getElementById("chancesNums");
const playAgain = document.getElementById("playAgain");

let average = 100
let chances = 5;
let randomNum = Math.floor(average * Math.random()) + 1

const checkUserInput = (value) => {
    if (!value) {
        chancesNums.innerText = "You have to write number"
        chancesNums.classList.add("error")
        return
    }
    if(value > 100 || value < 0) {
        chancesNums.innerText = "You're number should to less than 100 and more then 0" 
        chancesNums.classList.add("error")
        return
    }else{
        chancesNums.innerText=""
        chancesNums.classList.remove("error")
        userInput.value = ''
        compaier(value, randomNum)
    }
}

const compaier = (user, comp) => {
    if (user > comp || user < comp) {
        result.innerText = `Your Number (${user}) is ${user>comp ? "High" : "Low"}`
        chances--
        if(chances > 0) {
            chancesNums.innerText = `You have ${chances} chance`
        } else {
            result.innerHTML = `YOU ARE A LOSSER, The number is ${comp}` 
            end()
        }
        
    } else if (user === comp) {
        result.innerHTML = `You're a Winner`
        end()
    }
}
const end = ()=> {
    playAgain.classList.remove("displayNone")
    userInput.classList.add("displayNone")
    checkBtn.classList.add("displayNone")
}




checkBtn.addEventListener("click", ()=>{
    checkUserInput(Number(userInput.value))
})
userInput.addEventListener("keydown", ({key})=>{
    if (key === "Enter") {
        checkUserInput(Number(userInput.value))
    }
})

console.log(randomNum)
const restart = ()=> {
    playAgain.classList.add("displayNone")
    userInput.classList.remove("displayNone")
    checkBtn.classList.remove("displayNone")
    result.innerHTML=" "
    chances += 5;
    randomNum = Math.floor(average * Math.random()) + 1
    
}
playAgain.addEventListener("click", restart)