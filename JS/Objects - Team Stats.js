const team = {
	_players: [
    {firstName: "Jose", lastName: "Sanchez", age: 11},
    {firstName: "Amparo", lastName: "Gomez", age: 12},
    {firstName: "Raul", lastName: "Martos", age: 13}
  ], //close _players array
  
  _games: [
    {opponent: "Madrid", teamPoints: 46, opponentpoints: 57},
    {opponent: "Valencia", teamPoints: 35, opponentPoints: 67},
    {opponent: "Castellon", teamPoints: 67, opponentPoints: 67}
  ], //close _games array
  
  
  get players() {
      return this._players; 
  }, //close get players
 
  get games() {
    return this._games;
    
  
},//close get games
  
addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }; //close let player
  return this.players.push(player);
    }, //close addPlayer
    
 addGame(opponent, teamPoints, opponentPoints) {
   let game = {
     opponent: opponent,
     teamPoints: teamPoints,
     opponentPoints: opponentPoints
     
   };//close let game
  return this.games.push(game);
 } //close addGame
  
}; //close let team

team.addPlayer("Steph", "Curry", 28); //add player
team.addPlayer("Lisa", "Leslie", 44); //add player
team.addPlayer("Bugs", "Bunny", 76); //add player

console.log(team.players);

team.addGame("Barcelona", 58, 48);
team.addGame("Teruel", 25, 64);
team.addGame("Malaga", 25, 16);

console.log(team.games);
