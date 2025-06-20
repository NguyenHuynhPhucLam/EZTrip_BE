import { IsNotEmpty, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateTourDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsString()
  location: string;

  @IsNumber()
  duration: number;

  @IsNumber()
  maxTourist: number;
}
