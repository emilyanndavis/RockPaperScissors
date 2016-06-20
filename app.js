function play(playerChoice) {
    var options = ['rock', 'paper', 'scissors'];
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options[index];
  
    document.getElementById('result').innerHTML = 'Computer chose ' + computerChoice + '</br>';

    if (playerChoice == 'rock') {
        document.getElementById('rockButton').className = 'btn-highlight';
        if (computerChoice == 'rock') {
            document.getElementById('result').innerHTML += 'It\'s a tie!' + '</br>';
            document.getElementById('reaction-icon').className += ' fa fa-meh-o fa-4x';
        } else if (computerChoice == 'paper') {
            document.getElementById('result').innerHTML += 'Paper covers rock' + '</br>' + 'You lose!' + '</br>';
            document.getElementById('reaction-icon').className += ' fa fa-frown-o fa-4x';
        } else if (computerChoice == 'scissors') {
            document.getElementById('result').innerHTML += 'Rock smashes scissors' + '</br>' + 'You win!' + '</br>';
            document.getElementById('reaction-icon').className += ' fa fa-smile-o fa-4x';
        }
    } else if (playerChoice == 'paper') {
        document.getElementById('paperButton').className = 'btn-highlight';
        if (computerChoice == 'rock') {
            document.getElementById('result').innerHTML += 'Paper covers rock' + '</br>' + 'You win!' + '</br>';
            document.getElementById('reaction-icon').className += ' fa fa-smile-o fa-4x';
        } else if (computerChoice == 'paper') {
            document.getElementById('result').innerHTML += 'It\'s a tie!' + '</br>';
            document.getElementById('reaction-icon').className += ' fa fa-meh-o fa-4x';
        } else if (computerChoice == 'scissors') {
            document.getElementById('result').innerHTML += 'Scissors cut paper' + '</br>' + 'You lose!' + '</br>';
            document.getElementById('reaction-icon').className += ' fa fa-frown-o fa-4x';
        }
    } else if (playerChoice == 'scissors') {
        document.getElementById('scissorsButton').className = 'btn-highlight';
        if (computerChoice == 'rock') {
            document.getElementById('result').innerHTML += 'Rock smashes scissors' + '</br>' + 'You lose!' + '</br>';
            document.getElementById('reaction-icon').className += ' fa fa-frown-o fa-4x';
        } else if (computerChoice == 'paper') {
            document.getElementById('result').innerHTML += 'Scissors cut paper' + '</br>' + 'You win!' + '</br>';
            document.getElementById('reaction-icon').className += ' fa fa-smile-o fa-4x';
        } else if (computerChoice == 'scissors') {
            document.getElementById('result').innerHTML += 'It\'s a tie!' + '</br>';
            document.getElementById('reaction-icon').className += ' fa fa-meh-o fa-4x';
        }
    }
    document.getElementById('resetButton').style.display = 'block';
}


function reset() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('resetButton').style.display = 'none';
    document.getElementsByClassName('btn-highlight')[0].className = 'btn';
    document.getElementsByClassName('fa')[0].className = 'reaction';
}




