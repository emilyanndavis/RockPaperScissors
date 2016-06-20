// beginnings of a potential approach to refactoring

function play(playerChoice) {
    var options = ['rock', 'paper', 'scissors'];
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];
  
    document.getElementById('result').innerHTML = 'Computer chose ' + computerChoice + '</br>';



    // first, define relationship between playerChoice and computerChoice using JSON
    var choices = {
        paper: {
            rock: true,
            scissors: false
        },
        rock: {
            scissors: true,
            paper: false
        },
        scissors: {
            paper: true,
            rock: false
        }
    }



    // next, determine game outcome by comparing playerChoice to computerChoice
    if(computerChoice ==  playerChoice){
        return 'tie'
    }
    // if not an obvious tie, refer to properties of the choices object defined above
    var computerWins = choices[computerChoice][playerChoice];
    if(computerWins){
        //computer wins
    }else{
        // player wins
    }

    // finally, refer to the outcome as determined above when determining what to output to the UI









    document.getElementById('resetButton').style.display = 'block';
}


function reset() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementsByClassName('btn-highlight')[0].className = 'btn';
}




