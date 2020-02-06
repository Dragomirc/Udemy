import path from 'path';
import { MatchReader } from './MatchReader';

import { Summary } from './Summary';

const pathToCsv = path.join(__dirname, '..', 'football.csv');

const matchReader = MatchReader.fromCsv(pathToCsv);

const winsSummary = Summary.winsAnalysisWithConsoleReport('Man United');

const averageGoalsSummary = Summary.averageGoalsWithHtmlReport('Everton');

matchReader
  .load()
  .then(() => matchReader.matches)
  .then(matches => {
    winsSummary.buildAndPrintReport(matches);
    averageGoalsSummary.buildAndPrintReport(matches);
  });
