import { config } from './config';

export class URLBuilder {
  private readonly environment: string;
  private readonly project?: string;

  constructor(environment: string, project?: string) {
    this.environment = environment;
    this.project = project;
  }

  buildURL(path: string): string {
    const baseURL = config[this.environment][this.project];
    if (!baseURL) {
      throw new Error(`Invalid configuration for environment: ${this.environment}, project: ${this.project}`);
    }
    return `${baseURL}${path}`;
  }
}