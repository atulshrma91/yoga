import { Process } from '@connectfinancial/process';
import type { Logger } from '@connectfinancial/logger';
import express from 'express';
import { yogaGraphQLServer } from './utils';
import { PrismaClient } from '@prisma/client';

/**
 * Yoga
 */
export class Yoga extends Process<unknown, unknown, unknown> {
  declare logger: Logger;
  app: express.Application;
  prismaClient: PrismaClient;

  /**
   * Constructor
   */
  constructor() {
    super('yoga', {
      cache: true,
      subscriber: true,
      publisher: true,
      database: true,
      configManager: true,
      secretManager: true,
    });
    this.app = express();
    this.prismaClient = new PrismaClient();
  }

  /**
   * Init
   */
  async init() {
    await super.init();
  }

  /**
   * Runner
   */
  async runner() {
    const port = Number(process.env.PORT) || 7001;
    this.app.use('/graphql', await yogaGraphQLServer(this));
    this.app.listen(port, '0.0.0.0', () => {
      this.logger.info(`Yoga server listening on port ${port}`);
    });
  }
}
