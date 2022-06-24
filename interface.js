//Reagindo ao evento Usuario
document.addEventListener("DOMContentLoaded", ()=>{
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
        square.addEventListener("click", handleClick);
    })
})
function handleClick(event){
        let square = event.target;
        let position = square.id;

        if (handleMove(position)){
            setTimeout(()=>{
            alert("O jogo acabou!!! " + "O VENCEDOR FOI O " + winIs(playerTime) )
        
        }, 20);
    };
        updateSquares(position);

}
function updateSquares(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML =`<div class='${symbol}'></div>`
}

function winIs(playerTime){
    if (playerTime == 0 ){return String.fromCodePoint(0x2B55)
    } 
    else {return String.fromCodePoint(0x274C)}
}

    var btn = document.querySelector("#restart");
    btn.addEventListener("click", function(){
    document.location.reload();
    }
    )
