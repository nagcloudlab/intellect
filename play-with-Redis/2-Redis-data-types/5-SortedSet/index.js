



import { createClient } from 'redis';
import { LeaderBoard } from './leader-board.js'


(async () => {
    const client = createClient();
    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();


    var leaderBoard = new LeaderBoard("game-score", client);



    // leaderBoard.addUser("Arthur", 70);
    // leaderBoard.addUser("KC", 20);
    // leaderBoard.addUser("Maxwell", 10);
    // leaderBoard.addUser("Patrik", 30);
    // leaderBoard.addUser("Ana", 60);
    // leaderBoard.addUser("Felipe", 40);
    // leaderBoard.addUser("Renata", 50);
    // leaderBoard.addUser("Hugo", 80);
    // leaderBoard.removeUser("Arthur");


    // leaderBoard.getUserScoreAndRank("Maxwell");



    leaderBoard.showTopUsers(3);


})();
