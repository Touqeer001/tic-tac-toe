
let div = document.getElementById('body');
console.log(div);
let yscore = 0;
let oscore = 0;
//initially the first turn will be even number    
let turn = 0;//main condition
div.addEventListener('click', (e) => {
    console.log(e.path);
    // console.log(p2score);
    let O = '<img src="O.png" id="O">';
    let X = '<img src="x.png" id="X">';

    //When click event is fired then turn value will increase by 1
    turn = turn + 1//main condition
    if (turn % 2 == 0) {
        //e.path[0] is used to select the id of the div on which the mouse is clicked
        e.target.innerHTML = X;
    }
    else {
        e.target.innerHTML = O;
    }
    // console.log(p1score);

    let audio = new Audio('Sms Tone.mp3');
    //Condition for winning
    let input = document.querySelectorAll('.input');
    let p1score = document.getElementById('p1score');
    let p2score = document.getElementById('p2score');

    // console.log(input[0].id)
    // console.log(input.id);
    //Condition for X
    if (input[0].innerHTML == X && input[1].innerHTML == X && input[2].innerHTML == X) {
        input[0].className = 'won';
        input[1].className = 'won';
        input[2].className = 'won';
        //Playing Audio after winning
        audio.play();
        //CODE FOR SCORE ADDITION
        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;
        //Code for clearing the input
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[0].className = 'input';
            input[1].className = 'input';
            input[2].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
            // console.log(turn);
        })

    }

    else if (input[3].innerHTML == X && input[4].innerHTML == X && input[5].innerHTML == X) {
        input[3].className = 'won';
        input[4].className = 'won';
        input[5].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        //CODE FOR SCORE ADDITION
        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[3].className = 'input';
            input[4].className = 'input';
            input[5].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }

    else if (input[6].innerHTML == X && input[7].innerHTML == X && input[8].innerHTML == X) {
        input[6].className = 'won';
        input[7].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[6].className = 'input';
            input[7].className = 'input';
            input[8].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }

    else if (input[0].innerHTML == X && input[3].innerHTML == X && input[6].innerHTML == X) {
        input[0].className = 'won';
        input[3].className = 'won';
        input[6].className = 'won';
        audio.play();
//Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
turn = turn+1;
        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[0].className = 'input';
            input[3].className = 'input';
            input[6].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }

    else if (input[1].innerHTML == X && input[4].innerHTML == X && input[7].innerHTML == X) {
        input[1].className = 'won';
        input[4].className = 'won';
        input[7].className = 'won';
        audio.play();
//Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
turn = turn+1;
        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[1].className = 'input';
            input[4].className = 'input';
            input[7].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }


    else if (input[2].innerHTML == X && input[5].innerHTML == X && input[8].innerHTML == X) {
        input[2].className = 'won';
        input[5].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[2].className = 'input';
            input[5].className = 'input';
            input[8].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }

    else if (input[0].innerHTML == X && input[4].innerHTML == X && input[8].innerHTML == X) {
        input[0].className = 'won';
        input[4].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[0].className = 'input';
            input[4].className = 'input';
            input[8].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }

    else if (input[2].innerHTML == X && input[4].innerHTML == X && input[6].innerHTML == X) {
        input[2].className = 'won';
        input[4].className = 'won';
        input[6].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[2].className = 'input';
            input[4].className = 'input';
            input[6].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }
    //Condition for O
    else if (input[0].innerHTML == O && input[1].innerHTML == O && input[2].innerHTML == O) {
        input[0].className = 'won';
        input[1].className = 'won';
        input[2].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[0].className = 'input';
            input[1].className = 'input';
            input[2].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }

    else if (input[3].innerHTML == O && input[4].innerHTML == O && input[5].innerHTML == O) {
        input[3].className = 'won';
        input[4].className = 'won';
        input[5].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[3].className = 'input';
            input[4].className = 'input';
            input[5].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }

    else if (input[6].innerHTML == O && input[7].innerHTML == O && input[8].innerHTML == O) {
        input[6].className = 'won';
        input[7].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[6].className = 'input';
            input[7].className = 'input';
            input[8].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });


    }

    else if (input[0].innerHTML == O && input[3].innerHTML == O && input[6].innerHTML == O) {
        input[0].className = 'won';
        input[3].className = 'won';
        input[6].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[0].className = 'input';
            input[3].className = 'input';
            input[6].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }

    else if (input[1].innerHTML == O && input[4].innerHTML == O && input[7].innerHTML == O) {
        input[1].className = 'won';
        input[4].className = 'won';
        input[7].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;
        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[1].className = 'input';
            input[4].className = 'input';
            input[7].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }


    else if (input[2].innerHTML == O && input[5].innerHTML == O && input[8].innerHTML == O) {
        input[2].className = 'won';
        input[5].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[2].className = 'input';
            input[5].className = 'input';
            input[8].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }

    else if (input[0].innerHTML == O && input[4].innerHTML == O && input[8].innerHTML == O) {
        input[0].className = 'won';
        input[4].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[0].className = 'input';
            input[4].className = 'input';
            input[8].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }

    else if (input[2].innerHTML == O && input[4].innerHTML == O && input[6].innerHTML == O) {
        input[2].className = 'won';
        input[4].className = 'won';
        input[6].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn+1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        let btn = document.getElementById('reset');
        btn.addEventListener('click', (e) => {
            input[2].className = 'input';
            input[4].className = 'input';
            input[6].className = 'input';
            let inpall = document.querySelectorAll('.input');
            for (let i = 0; i < 9; i++) {
                inpall[i].innerHTML = "";
            }
        });
    }
    else{
        // console.log("Match Tie");
    }
    // console.log(e.path)
});



//Function to reset the whole page
function clr() {
    location.reload();
}









