import { MatchData } from './MatchData';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { AverageGoalsAnalysis } from './analyzers/AverageGoalsAnalysis';
import { HtmlReport } from './reportTargets/HtmlReport';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  static winsAnalysisWithConsoleReport(teamName: string): Summary {
    const winsAnalysis = new WinsAnalysis(teamName);
    const consoleReport = new ConsoleReport();
    return new Summary(winsAnalysis, consoleReport);
  }

  static averageGoalsWithHtmlReport(teamName: string): Summary {
    const averageGoalsAnalysis = new AverageGoalsAnalysis(teamName);
    const htmlReport = new HtmlReport();
    return new Summary(averageGoalsAnalysis, htmlReport);
  }
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
