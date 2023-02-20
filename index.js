let O = '<img src="img/O.png" id="O">';
let X = '<img src="img/x.png" id="X">';
let audio = new Audio('Won.mp3');
let input = document.querySelectorAll('.input');
let p1score = document.getElementById('p1score');
let p2score = document.getElementById('p2score');
let won = false;
let yscore = 0;
let oscore = 0;
//initially the first turn will be even number    
let turn = 0;//main condition
document.getElementById('turn-dec').innerHTML = 'O turn'
let target = document.getElementsByClassName('input');
Array.from(target).forEach((input) => {
    input.addEventListener('click', e => {
        //below condition avoids changing turn when double tap on the existing value div
        if (input.innerHTML == '') {

            //When click event is fired then turn value will increase by 1
            turn += 1;
            if (turn % 2 == 0) {
                //e.path[0] is used to select the id of the div on which the mouse is clicked
                e.target.innerHTML = X;
                document.getElementById('turn-dec').innerHTML = 'O turn'
            }
            else {
                e.target.innerHTML = O;
                document.getElementById('turn-dec').innerHTML = 'X turn'
            }
        }
        win();

    });
});
win = () => {
    let target = document.querySelectorAll('.input');
    const arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    arr.forEach(e => {
        if ((target[e[0]].innerHTML === target[e[1]].innerHTML) && (target[e[1]].innerHTML === target[e[2]].innerHTML) && target[e[0]].innerHTML != '') {
            target[e[0]].className = 'won'
            target[e[1]].className = 'won'
            target[e[2]].className = 'won'
            if (target[e[0]].innerHTML === O) {
                oscore = oscore + 1;
                p1score.innerHTML = oscore;
                document.getElementById('div').innerHTML = `<div id="won-div">
                <div id="won-dec">
                <img src="img/O.png" width="30px"
                height="30px"> WON
                </div> 
                </div>`;
            }
            else {
                yscore = yscore + 1;
                p2score.innerHTML = yscore;
                document.getElementById('div').innerHTML = `<div id="won-div">
                <div id="won-dec">
                <img src="img/x.png" width="30px"
                height="30px"> WON
                </div> 
                </div>`;
            }
            won = true;
        }
        else {
            if (turn === 9) {
                oscore = oscore + 1;
                yscore = yscore + 1;
                p1score.innerHTML = oscore;
                p2score.innerHTML = yscore;
                document.getElementById('div').innerHTML = `<div id="won-div">
            <div id="won-dec">
            MATCH TIED
            </div> 
            </div>`;
            }
            won = true;
        }
    })
}

//To continue game by clearing existing inputs
let reset = document.getElementById('reset');
reset.addEventListener('click', e => {
    let allinp = document.querySelectorAll('.input');
    let woninp = document.querySelectorAll('.won');
    for (let i = 0; i < allinp.length; i++) {
        if (woninp[i]) {
            woninp[i].innerHTML = '';
            woninp[i].className = 'input'
        }
        if (allinp[i]) {
            allinp[i].innerHTML = '';
        }
    }
    turn = 0;

});
//Function to reset the whole page
function clr() {
    location.reload();
}
