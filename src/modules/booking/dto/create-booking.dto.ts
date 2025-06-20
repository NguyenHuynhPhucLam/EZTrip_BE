/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsUUID, IsOptional, IsIn } from 'class-validator';

export class CreateBookingDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  tourId: string;

  @IsOptional()
  @IsIn(['pending', 'confirmed', 'cancelled']) // để rõ hơn
  status?: string;
}
