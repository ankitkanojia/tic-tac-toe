## Tic-tac-toe 

Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner.

<img src="https://github.com/ankitkanojia/tic-tac-toe/blob/master/Tic-Tac-Toe.gif" width="400" height="400" />

- Players: 2
- Skill(s) required: Strategy, tactics, observation
- Genres: Paper-and-pencil game, Board game, Strategy game

##### For the Design Board

The design is based on 3 X 3 Grid design for the game. We need to first create the board design with a 3 X 3 block. The footer counting section is designed to determine how many times the player or the computer wins the game, as well as the count of tie games between the computer and player.

##### Default Configurations
 
Consider the player step as 'X' and the computer step as 'O' in the game. As everything is developed in React JS, we need to maintain the state of each required thing via the state in React Js. We need to take care of the state of the following things for built-up game logic.

- Winner Status
- Total Player Clicks
- Total Computer Clicks
- Block is Clickable or not(This status is for automatically perform by computer, We need to hold player interaction to be performing for next move until computer move occurs)
- Counting of tied games, the computer wins and the player wins

##### Developed Logic For Game 
 
When the user starts the game or the page is loaded, the player's turn will be the next step up. Each block, we have to perform the following conditions or operations while clicked by the player or automatically clicked by a computer player.


