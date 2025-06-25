import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateReviewDto) {
    return this.prisma.review.create({ data: dto });
  }

  findAll() {
    return this.prisma.review.findMany({
      include: {
        user: true,
        tour: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.review.findUnique({
      where: { id },
      include: {
        user: true,
        tour: true,
      },
    });
  }

  update(id: string, dto: UpdateReviewDto) {
    if (!dto || typeof dto !== 'object') {
      throw new BadRequestException('Không có dữ liệu hợp lệ để cập nhật.');
    }

    const data = Object.fromEntries(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(dto).filter(([_, value]) => value !== undefined),
    );

    if (Object.keys(data).length === 0) {
      throw new BadRequestException('Không có dữ liệu nào để cập nhật.');
    }

    return this.prisma.review.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.review.delete({ where: { id } });
  }
}
