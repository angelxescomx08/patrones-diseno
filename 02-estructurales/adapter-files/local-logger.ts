import { COLORS } from '../../helpers/colors.ts';

// TODO: Implementar el LocalLogger Class
export class LocalLogger {
  constructor(private file: string) {}

  writeLog(message: string) {
    console.log(`[${this.file} Log] ${message}`);
  }

  writeError(message: string) {
    console.log(`%c[${this.file} Error] ${message}`, COLORS.red);
  }

  writeWarning(message: string) {
    console.log(`%c[${this.file} Warning] ${message}`, COLORS.yellow);
  }
}