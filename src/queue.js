const divScreen = document.querySelector("#screen")
const createNumber = document.querySelector("#createNumber")
const callNumber = document.querySelector("#callNumber")
const currentNumber = document.querySelector("#currentNumber")
const currentQueue = document.querySelector("#currentQueue")

let n = 0;
let queue = []
createNumber.onclick=()=>{
    n += 1
    queue.push(n)
    currentQueue.innerText=JSON.stringify(queue)
}

callNumber.onclick=()=>{
    if(queue.length===0){divScreen.innerText="祝您用餐愉快"; return }
    const number = queue.shift()
    currentQueue.innerText=JSON.stringify(queue)
    currentNumber.innerText=number
    divScreen.innerText=`请${number}号就餐`
}



