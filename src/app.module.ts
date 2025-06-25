import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { TourModule } from './modules/tour/tour.module';
import { BookingModule } from './modules/booking/booking.module';
import { UserModule } from './modules/user/user.module';
import { ReviewModule } from './modules/review/review.module';

@Module({
  imports: [PrismaModule, TourModule, BookingModule, UserModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
