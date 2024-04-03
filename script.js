const computer = document.querySelector('.computer img');
const player = document.querySelector('.player img');
const computerPoints = document.querySelector('.computerPoints');
const playerPoints = document.querySelector('.playerPoints');
const selectionZone = document.querySelectorAll('.selectionZone button');

selectionZone.forEach(button => {
    button.addEventListener('click', () => {
        computer.classList.add('shakeComputer');
        player.classList.add('shakePlayer');

        setTimeout(() => {
            computer.classList.remove('shakeComputer')
            player.classList.remove('shakePlayer')

            player.src = "./img/" + button.dataset.file + "Player.png";

            const choices = ['rock', 'paper', 'scissors']

            let computerRandom = Math.floor(Math.random() * choices.length);
            let computerChoice = choices[computerRandom]
            computer.src = './img/' + computerChoice + "Computer.png";

            let computerWon = parseInt(computerPoints.innerHTML);
            let playerWon = parseInt(playerPoints.innerHTML);

            switch (computerChoice) {
                case "rock":
                    if (button.dataset.file == "paper")
                        playerPoints.innerHTML = playerWon + 1
                    else if (button.dataset.file == 'scissors')
                        computerPoints.innerHTML = computerWon + 1
                    break

                case "paper":
                    if (button.dataset.file == "scissors")
                        playerPoints.innerHTML = playerWon + 1
                    else if (button.dataset.file == "rock")
                        computerPoints.innerHTML = computerWon + 1
                    break

                case "scissors":
                    if (button.dataset.file == "rock")
                        playerPoints.innerHTML = playerWon + 1
                    else if (button.dataset.file == "paper")
                        computerPoints.innerHTML = computerWon + 1
                    break
            }
        }, 900);
    })
});