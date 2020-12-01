import 'colorts/lib/string';
import { Command } from 'commander';
import * as path from 'path';

const program = new Command();

program.option('-d, --day <day>', 'the day to run');

program.parse(process.argv);

if (program.day) {
  const day = program.day as string;

  const pathName = path.join(__dirname, `day-${day}/task.ts`);

  try {
    require(pathName);
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.error(`Could not load ${pathName}`.red);
    } else {
      console.error(e);
    }
  }
}
