import { Analyzer } from '../Summary';
import { MatchData } from '../MatchData';
import { MatchResult } from '../MatchResult';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(matchData: MatchData[]): string {
    let teamWins = 0;
    matchData.forEach(game => {
      if (
        (game[1] === this.teamName && game[5] === MatchResult.HomeWin) ||
        (game[2] === this.teamName && game[5] === MatchResult.AwayWin)
      ) {
        teamWins++;
      }
    });
    return `Team ${this.teamName} won ${teamWins} times.`;
  }
}
