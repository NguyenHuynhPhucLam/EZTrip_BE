import { IsUUID, IsOptional, IsIn, IsNumber, IsInt } from 'class-validator';

export class CreateBookingDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  tourId: string;

  @IsOptional()
  @IsIn(['pending', 'confirmed', 'cancelled'])
  status?: string;

  @IsNumber()
  totalPrice: number;

  @IsInt()
  memNum: number;
}
