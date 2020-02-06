import fs from 'fs';
import util from 'util';
import path from 'path';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
    <div>
      <h1>Analysis output</h1>
      <div>${report}</div>
    </div>
    `;
    const writeFile = util.promisify(fs.writeFile);
    const reportPath = path.join(
      path.dirname((<any>process).mainModule.filename),
      'reports',
      'report.html'
    );
    writeFile(reportPath, html);
  }
}
