import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 👈 QUAN TRỌNG: Export PrismaService
})
export class PrismaModule {}
