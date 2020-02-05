import fs from 'fs';
import util from 'util';
import { DataReader } from './DataReader';

export class CsvFileReader implements DataReader {
  public data: string[][] = [];
  constructor(public filename: string) {}

  async read(): Promise<void> {
    const readFile = util.promisify(fs.readFile);
    const content = await readFile(this.filename, 'utf8');
    this.data = content
      .split('\n')
      .map((row: string): string[] => row.split(','));
  }
}
