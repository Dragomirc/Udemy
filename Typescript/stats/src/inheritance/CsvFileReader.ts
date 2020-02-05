import fs from 'fs';
import util from 'util';

export abstract class CsvFileReader<T> {
  public data: T[] = [];
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  async read(): Promise<void> {
    const readFile = util.promisify(fs.readFile);
    const content = await readFile(this.filename, 'utf8');
    this.data = content
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow);
  }
}
