
let div = document.getElementById('body');
// console.log(div);
let yscore = 0;
let oscore = 0;
//initially the first turn will be even number    
let turn = 0;//main condition
document.getElementById('turn-dec').innerHTML = 'O turn'
div.addEventListener('click', (e) => {
    // console.log(e.path);
    // console.log(p2score);
    let O = '<img src="img/O.png" id="O">';
    let X = '<img src="img/x.png" id="X">';

    //When click event is fired then turn value will increase by 1
    turn = turn + 1//main condition
    if (turn % 2 == 0) {
        //e.path[0] is used to select the id of the div on which the mouse is clicked
        e.target.innerHTML = X;
        document.getElementById('turn-dec').innerHTML = 'O turn'
    }
    else {
        e.target.innerHTML = O;
        document.getElementById('turn-dec').innerHTML = 'X turn'
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
        turn = turn + 1;
        document.getElementById('turn-dec').innerHTML = `<img src="img/x.png" width="30px"
        height="30px"> WON`;

    }

    else if (input[3].innerHTML == X && input[4].innerHTML == X && input[5].innerHTML == X) {
        input[3].className = 'won';
        input[4].className = 'won';
        input[5].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        //CODE FOR SCORE ADDITION
        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/x.png" width="30px"
        height="30px"> WON`;
    }

    else if (input[6].innerHTML == X && input[7].innerHTML == X && input[8].innerHTML == X) {
        input[6].className = 'won';
        input[7].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/x.png" width="30px"
        height="30px"> WON`;
    }

    else if (input[0].innerHTML == X && input[3].innerHTML == X && input[6].innerHTML == X) {
        input[0].className = 'won';
        input[3].className = 'won';
        input[6].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;
        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/x.png" width="30px"
        height="30px"> WON`;
    }

    else if (input[1].innerHTML == X && input[4].innerHTML == X && input[7].innerHTML == X) {
        input[1].className = 'won';
        input[4].className = 'won';
        input[7].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;
        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/x.png" width="30px"
        height="30px"> WON`;
    }


    else if (input[2].innerHTML == X && input[5].innerHTML == X && input[8].innerHTML == X) {
        input[2].className = 'won';
        input[5].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/x.png" width="30px"
        height="30px"> WON`;
    }

    else if (input[0].innerHTML == X && input[4].innerHTML == X && input[8].innerHTML == X) {
        input[0].className = 'won';
        input[4].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/x.png" width="30px"
        height="30px"> WON`;
    }

    else if (input[2].innerHTML == X && input[4].innerHTML == X && input[6].innerHTML == X) {
        input[2].className = 'won';
        input[4].className = 'won';
        input[6].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        yscore = yscore + 1;
        p2score.innerHTML = yscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/x.png" width="30px"
        height="30px"> WON`;
    }
    //Condition for O
    else if (input[0].innerHTML == O && input[1].innerHTML == O && input[2].innerHTML == O) {
        input[0].className = 'won';
        input[1].className = 'won';
        input[2].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/O.png" width="30px"
        height="30px"> WON`;
    }

    else if (input[3].innerHTML == O && input[4].innerHTML == O && input[5].innerHTML == O) {
        input[3].className = 'won';
        input[4].className = 'won';
        input[5].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/O.png" width="30px"
        height="30px"> WON`;
    }

    else if (input[6].innerHTML == O && input[7].innerHTML == O && input[8].innerHTML == O) {
        input[6].className = 'won';
        input[7].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/O.png" width="30px"
        height="30px"> WON`;

    }

    else if (input[0].innerHTML == O && input[3].innerHTML == O && input[6].innerHTML == O) {
        input[0].className = 'won';
        input[3].className = 'won';
        input[6].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/O.png" width="30px"
        height="30px"> WON`;
    }

    else if (input[1].innerHTML == O && input[4].innerHTML == O && input[7].innerHTML == O) {
        input[1].className = 'won';
        input[4].className = 'won';
        input[7].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;
        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/O.png" width="30px"
        height="30px"> WON`;
    }


    else if (input[2].innerHTML == O && input[5].innerHTML == O && input[8].innerHTML == O) {
        input[2].className = 'won';
        input[5].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/O.png" width="30px"
        height="30px"> WON`;

    }

    else if (input[0].innerHTML == O && input[4].innerHTML == O && input[8].innerHTML == O) {
        input[0].className = 'won';
        input[4].className = 'won';
        input[8].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/O.png" width="30px"
        height="30px"> WON`;
    }

    else if (input[2].innerHTML == O && input[4].innerHTML == O && input[6].innerHTML == O) {
        input[2].className = 'won';
        input[4].className = 'won';
        input[6].className = 'won';
        audio.play();
        //Below code will add the turn by one means if the X user wins the next turn will be of the X and not O
        turn = turn + 1;

        //CONDITION FOR SCORE
        oscore = oscore + 1;
        p1score.innerHTML = oscore;
        document.getElementById('turn-dec').innerHTML = `<img src="img/O.png" width="30px"
        height="30px"> WON`;

    }

    //Condition for Match Draw
    else if ((input[0].innerHTML == X && input[1].innerHTML == O && input[2].innerHTML == O
        && input[3].innerHTML == O && input[4].innerHTML == X && input[5].innerHTML == X
        && input[6].innerHTML == X && input[7].innerHTML == O && input[8].innerHTML == O
    )
        ||

        (input[0].innerHTML == O && input[1].innerHTML == X && input[2].innerHTML == X
            && input[3].innerHTML == X && input[4].innerHTML == O && input[5].innerHTML == O
            && input[6].innerHTML == O && input[7].innerHTML == X && input[8].innerHTML == X
        )
        ||

        (input[0].innerHTML == X && input[1].innerHTML == X && input[2].innerHTML == O
            && input[3].innerHTML == O && input[4].innerHTML == O && input[5].innerHTML == X
            && input[6].innerHTML == X && input[7].innerHTML == X && input[8].innerHTML == O
        )
        ||

        (input[0].innerHTML == O && input[1].innerHTML == O && input[2].innerHTML == X
            && input[3].innerHTML == X && input[4].innerHTML == X && input[5].innerHTML == O
            && input[6].innerHTML == O && input[7].innerHTML == O && input[8].innerHTML == X
        )

        ||

        (input[0].innerHTML == X && input[1].innerHTML == O && input[2].innerHTML == O
            && input[3].innerHTML == O && input[4].innerHTML == O && input[5].innerHTML == X
            && input[6].innerHTML == X && input[7].innerHTML == X && input[8].innerHTML == X
        )

        ||

        (input[0].innerHTML == O && input[1].innerHTML == X && input[2].innerHTML == X
            && input[3].innerHTML == X && input[4].innerHTML == X && input[5].innerHTML == X
            && input[6].innerHTML == O && input[7].innerHTML == O && input[8].innerHTML == O
        )

        ||

        (input[0].innerHTML == O && input[1].innerHTML == X && input[2].innerHTML == O
            && input[3].innerHTML == O && input[4].innerHTML == X && input[5].innerHTML == O
            && input[6].innerHTML == X && input[7].innerHTML == O && input[8].innerHTML == X
        )

        ||

        (input[0].innerHTML == X && input[1].innerHTML == O && input[2].innerHTML == X
            && input[3].innerHTML == X && input[4].innerHTML == O && input[5].innerHTML == X
            && input[6].innerHTML == O && input[7].innerHTML == X && input[8].innerHTML == O
        )

        ||

        (input[0].innerHTML == O && input[1].innerHTML == O && input[2].innerHTML == X
            && input[3].innerHTML == X && input[4].innerHTML == X && input[5].innerHTML == O
            && input[6].innerHTML == O && input[7].innerHTML == X && input[8].innerHTML == O
        )
        ||

        (input[0].innerHTML == X && input[1].innerHTML == X && input[2].innerHTML == O
            && input[3].innerHTML == O && input[4].innerHTML == O && input[5].innerHTML == X
            && input[6].innerHTML == X && input[7].innerHTML == O && input[8].innerHTML == X
        )
        ||

        (input[0].innerHTML == X && input[1].innerHTML == O && input[2].innerHTML == O
            && input[3].innerHTML == O && input[4].innerHTML == O && input[5].innerHTML == X
            && input[6].innerHTML == X && input[7].innerHTML == X && input[8].innerHTML == O
        )

        ||

        (input[0].innerHTML == O && input[1].innerHTML == X && input[2].innerHTML == X
            && input[3].innerHTML == X && input[4].innerHTML == X && input[5].innerHTML == O
            && input[6].innerHTML == O && input[7].innerHTML == O && input[8].innerHTML == X
        )

        ||

        (input[0].innerHTML == X && input[1].innerHTML == X && input[2].innerHTML == O
            && input[3].innerHTML == O && input[4].innerHTML == X && input[5].innerHTML == X
            && input[6].innerHTML == X && input[7].innerHTML == O && input[8].innerHTML == O
        )
        ||

        (input[0].innerHTML == O && input[1].innerHTML == O && input[2].innerHTML == X
            && input[3].innerHTML == X && input[4].innerHTML == O && input[5].innerHTML == O
            && input[6].innerHTML == O && input[7].innerHTML == X && input[8].innerHTML == X
        )
    ) {
        oscore = oscore + 1;
        yscore = yscore + 1;
        p1score.innerHTML = oscore;
        p2score.innerHTML = yscore;
        console.log("Match Tie");
        document.getElementById('turn-dec').innerHTML = 'Match Drawn'

    }
});

let reset = document.getElementById('reset');
reset.addEventListener('click', e => {
    // let inpvalues = document.getElementsByClassName('input');
    // let won = document.getElementsByClassName('won');
    // console.log(inpvalues[0]);
    // for(let i =0;i<9;i++){
    //     inpvalues[i].innerHTML = '';
    //     won[i].innerHTML = '';
    // }
    document.getElementById('inp1').innerHTML = '';
    document.getElementById('inp2').innerHTML = '';
    document.getElementById('inp3').innerHTML = '';
    document.getElementById('inp4').innerHTML = '';
    document.getElementById('inp5').innerHTML = '';
    document.getElementById('inp6').innerHTML = '';
    document.getElementById('inp7').innerHTML = '';
    document.getElementById('inp8').innerHTML = '';
    document.getElementById('inp9').innerHTML = '';
    // if()
    let win = document.getElementsByClassName('won');
    if (win.length > 0) {
        // win[0].className = 'input' ;
        // win[1].className = 'input' ;
        // console.log(win[0]);
        // console.log(win[1]);
        // console.log(win[2]);
        // win[2].className = 'input' ;
        document.getElementsByClassName('won')[0].className = 'input';
        document.getElementsByClassName('won')[1].className = 'input';
        // document.getElementsByClassName('won')[2].className = 'input';
    }
    if (document.getElementsByClassName('won').length > 0) {
        document.getElementsByClassName('won')[0].className = 'input';
    }

})


//Function to reset the whole page
function clr() {
    location.reload();
}









