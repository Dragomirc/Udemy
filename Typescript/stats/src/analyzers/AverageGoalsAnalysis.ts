import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
export class AverageGoalsAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  run(matchData: MatchData[]): string {
    let games = 0;
    let goals = 0;
    matchData.forEach((game: MatchData) => {
      if (game[1] === this.teamName) {
        games++;
        goals += game[3];
      } else if (game[1] === this.teamName) {
        games++;
        goals += game[4];
      }
    });
    const average = goals / games;
    return `${this.teamName} scored on average ${average} goals.`;
  }
}
