import {
  Injectable,
  type OnModuleInit
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  constructor() {
    super({
      datasourceUrl: 'postgres://admin:S3cret@localhost:5432/db',
    });
  }

  async onModuleInit() {
    await this.$connect();
  }
}
