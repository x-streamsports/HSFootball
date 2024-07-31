fetch('scores.json')
    .then(response => response.json())
    .then(data => {
        const scoresDiv = document.getElementById('scores');
        data.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.innerHTML = `${game.team1} vs ${game.team2}: ${game.score}`;
            scoresDiv.appendChild(gameDiv);
        });
    });
