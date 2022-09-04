let winnerb = document.getElementById('winner')
let resetbtn = document.getElementById('resetbtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winner_i = getComputedStyle(document.body).getPropertyValue('--winning_blocks')
const o = "O"
const x = "X"
let current_player = x

let spaces = Array(9).fill(null)

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click',bc))
}

function bc(e){
    const id = e.target.id

    if(!spaces[id]){
        spaces[id] = current_player
        e.target.innerText = current_player
        
        if(playerhaswon() !== false){
            
            let winnig_blocks = playerhaswon()
            winnig_blocks.map(box => boxes[box].style.backgroundColor=winner_i)
            if(current_player==x){
                winnerb.innerHTML="X has won"
            }
            else{
                winnerb.innerHTML="O has won"
            }
            reset()
            return 
        }
        current_player= current_player == x ? o:x
    }
}

const winning_combos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
function playerhaswon(){
    for (const condition of winning_combos) {
        let [a,b,c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a]==spaces[c])){
            return [a,b,c]
        }
    }
    return false
}
resetbtn.addEventListener('click',reset)

function reset(){
    spaces.fill(null)

    boxes.forEach(box => {
        box.innerText=''
        box.style.backgroundColor=''
    })

    current_player = x
}


startGame()
