import { DataReader } from './DataReader';
import { MatchResult } from './MatchResult';
import { dateToString } from './utils';
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  async load(): Promise<void> {
    await this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateToString(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }
}
