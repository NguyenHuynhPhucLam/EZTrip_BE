import { Module } from '@nestjs/common';
import { ReviewService } from './review.service';
import { ReviewController } from './review.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; // 👈 Thêm dòng này

@Module({
  imports: [PrismaModule], // 👈 Thêm PrismaModule vào đây
  controllers: [ReviewController],
  providers: [ReviewService],
})
export class ReviewModule {}
