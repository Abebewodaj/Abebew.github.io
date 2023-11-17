//You can write and run the timer code here via npm run app 
/*2. Write code to illustrate the use of the rest operator
a. In a destructuring assignment
b. In a function call  */
let names = ["James", "Smith", "Kal", "Lemma", "Kebede", "Abebe"];
let [Name1, Name2, ...theRest] = names;
console.log(Name1);
console.log(Name2);
console.log(theRest);
// Function that uses the rest parameter in TypeScript
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
// Calling the function with different numbers of arguments
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7, 8)); // Output: 30
console.log(sum(10)); // Output: 10
console.log(sum()); // Output: 0
// type JerseyPoints = {
//     jersey: number;
//     total: number;
// }
//The following objects record the season statistics for players on a basketball team.
const player1 = { jersey: 8, stats: [{ game: 1, points: 6 }, { game: 2, points: 7 }] };
const player2 = { jersey: 12, stats: [{ game: 1, points: 16 }, { game: 2, points: 14 }] };
export const player3 = { jersey: 6, stats: [{ game: 1, points: 10 }, { game: 2, points: 6 }] };
export const teamStats = [player1, player2, player3];
export function findTotalPlayerPoints(player) {
    let totalPlayersPoint = 0;
    for (let gameStat of player.stats) {
        totalPlayersPoint += gameStat.points;
    }
    return totalPlayersPoint;
}
console.log(findTotalPlayerPoints(player1));
console.log(findTotalPlayerPoints(player2));
function findTotalScores(players) {
    const result = [];
    for (const player of players) {
        const totalPoints = findTotalPlayerPoints(player);
        result.push({ jersey: player.jersey, total: totalPoints });
    }
    return result;
}
console.log(findTotalScores([player2]));
