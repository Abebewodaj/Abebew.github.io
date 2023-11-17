/*Be sure to use meaningful variable names.
Try to use map and reduce in your functions as appropriate. */
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
/* export function findTotalPlayerPoints(player:Player): number {
  return player.reduce((totalPoints, gameStats) => totalPoints + gameStats.points, 0);
}  */
export function findTotalScores(players) {
    const result = [];
    for (const player of players) {
        const totalPoints = findTotalPlayerPoints(player);
        result.push({ jersey: player.jersey, total: totalPoints });
    }
    return result;
}
/*export function findTotalScores(players: Player[]): { jersey: number; total: number }[] {
    return players.map(player => ({
        jersey: player.jersey,
        total: findTotalPlayerPoints(player),
    }));
} */
export function findTotalPointsByJersey(targetJersey) {
    for (const player of teamStats) {
        if (player.jersey === targetJersey) {
            return findTotalPlayerPoints(player);
        }
    }
    // Return null if the jersey number is not found
    return null;
}
