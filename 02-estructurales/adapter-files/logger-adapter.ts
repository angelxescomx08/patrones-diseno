import { Logger } from 'jsr:@deno-library/logger';

// TODO: Implementar el LoggerAdapter
interface LoggerAdapter {
  file: string;
  writeLog: (message: string)=> void;
  writeError: (message: string)=> void;
  writeWarning: (message: string)=> void;
}

export class DenoLoggerAdapter implements LoggerAdapter {

  public file: string;
  private logger: Logger = new Logger();

  constructor(file: string) {
    this.file = file;
  }

  writeLog(message: string) {
    this.logger.info(message);
  }

  writeError(message: string) {
    this.logger.error(message);
  }

  writeWarning(message: string) {
    this.logger.warn(message);
  }
}