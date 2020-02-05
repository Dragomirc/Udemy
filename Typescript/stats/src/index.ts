import path from 'path';
import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';
import { CsvFileReader } from './CsvFileReader';

const pathToCsv = path.join(__dirname, '..', 'football.csv');
const csvFileReader = new CsvFileReader(pathToCsv);
const matchReader = new MatchReader(csvFileReader);
matchReader
  .load()
  .then(() => matchReader.matches)
  .then(matches => {
    let manUnitedWins = 0;
    matches.forEach(game => {
      if (
        (game[1] === 'Man United' && game[5] === MatchResult.HomeWin) ||
        (game[2] === 'Man United' && game[5] === MatchResult.AwayWin)
      ) {
        manUnitedWins++;
      }
    });
    console.log(manUnitedWins);
  });
