import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateTourDto } from './dto/create-tour.dto';
import { UpdateTourDto } from './dto/update-tour.dto';

@Injectable()
export class TourService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTourDto) {
    return this.prisma.tour.create({ data });
  }

  async findAll() {
    return this.prisma.tour.findMany();
  }

  async findOne(id: string) {
    const tour = await this.prisma.tour.findUnique({ where: { id } });
    if (!tour) throw new NotFoundException('Tour not found');
    return tour;
  }

  async update(id: string, data: UpdateTourDto) {
    await this.findOne(id); // kiểm tra tồn tại
    return this.prisma.tour.update({ where: { id }, data });
  }

  async remove(id: string) {
    await this.findOne(id); // kiểm tra tồn tại
    return this.prisma.tour.delete({ where: { id } });
  }
}
