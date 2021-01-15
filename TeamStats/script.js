// The Team object

const team = {
    // an array with the team's players
    _players: [
        {
            firstName: 'Niki',
            lastName: 'Sánchez',
            age: 27
        },
        {
            firstName: 'Marina',
            lastName: 'Urraca',
            age: 27
        },
        {
            firstName: 'Laia',
            lastName: 'Camprodon',
            age: 27
        },
        {
            firstName: 'Toni',
            lastName: 'Paternina',
            age: 28
        }
    ],
    // an array of the games played by the team
    _games: [
        {
            opponent: 'Wildcats',
            teamPoints: 40,
            opponentPoints: 10
        },
        {
            opponent: 'Castilla cactuses',
            teamPoints: 32,
            opponentPoints: 45
        },
        {
            opponent: 'Lobos de la Sierra',
            teamPoints: 50,
            opponentPoints: 14
        }
    ],

    get games() {
        return this._games;
    },
    get players() {
        return this._players;
    },
    get numGames() {
        return this._games.length;
    },
    get numPlayers() {
        return this._players.length;
    },

    // add new players to the team
    addPlayer (firstName, lastName, age) {
        this._players.push({
            firstName, 
            lastName, 
            age
        })
    }, 
    // add new games to the team's history
    addGame (opponent, teamPoints, opponentPoints) {
        this._games.push({
            opponent,
            teamPoints,
            opponentPoints
        })
    }
}

// Add new players
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log('Team players:')
for (const i in team.players) {
    const player = team.players[i];
    console.log(`\t${player.firstName} ${player.lastName}, ${player.age}.`);
}

console.log(`Total number of players: ${team.numPlayers}`)
console.log(`\n`);


// Add new games
team.addGame('Alicante Eagles', 34, 25);
team.addGame('Madrid Bears', 28, 36);
team.addGame('Alicante eagles', 40, 40);

console.log('Games played:')
for (const i in team.games) {
    const game = team.games[i];
    console.log(`\tAgainst ${game.opponent}: scored ${game.teamPoints}, opponent score ${game.opponentPoints}.`);
}


console.log(`Total games played: ${team.numGames}`);
// compute the average score
let sumScore = 0;
for (let i in team.games) {
    sumScore += team.games[i].teamPoints;
}

const avgScore = (sumScore / team.numGames).toFixed(2);
console.log(`Average score: ${avgScore}`);

// Compute won, lost and draw games
let wonGames = 0;
let lostGames = 0;
let drawGames = 0;
for (let i in team.games) {
    const game = team.games[i];
    if (game.teamPoints > game.opponentPoints){
        wonGames++;
    } else if (game.teamPoints < game.opponentPoints) {
        lostGames++;
    } else {
        drawGames++;
    }
}
console.log(`Number of won games: ${wonGames}`);
console.log(`Number of lost games: ${lostGames}`);
console.log(`Number of draws: ${drawGames}`);