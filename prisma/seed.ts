import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const tours = [
    {
      name: 'Khám phá Đà Lạt 3N2Đ',
      description:
        'Hành trình khám phá thành phố sương mù Đà Lạt với nhiều điểm đến hấp dẫn.',
      price: 2500000,
      startDate: new Date('2025-07-01T08:00:00.000Z'),
      endDate: new Date('2025-07-03T18:00:00.000Z'),
      location: 'Đà Lạt',
      duration: 3,
      maxTourist: 30,
    },
    {
      name: 'Du lịch biển Nha Trang 4N3Đ',
      description:
        'Tham quan vịnh Nha Trang, VinWonders, đảo Hòn Mun và nhiều hoạt động thú vị.',
      price: 3200000,
      startDate: new Date('2025-07-10T09:00:00.000Z'),
      endDate: new Date('2025-07-13T18:00:00.000Z'),
      location: 'Nha Trang',
      duration: 4,
      maxTourist: 25,
    },
    {
      name: 'Tour miền Tây sông nước 2N1Đ',
      description:
        'Khám phá Cần Thơ, chợ nổi Cái Răng, vườn trái cây và đặc sản miền Tây.',
      price: 1500000,
      startDate: new Date('2025-07-05T06:00:00.000Z'),
      endDate: new Date('2025-07-06T18:00:00.000Z'),
      location: 'Cần Thơ',
      duration: 2,
      maxTourist: 40,
    },
    {
      name: 'Tour Hà Nội - Hạ Long 5N4Đ',
      description:
        'Trải nghiệm Vịnh Hạ Long, phố cổ Hà Nội và các di tích nổi tiếng.',
      price: 4500000,
      startDate: new Date('2025-07-15T07:00:00.000Z'),
      endDate: new Date('2025-07-19T18:00:00.000Z'),
      location: 'Hà Nội - Hạ Long',
      duration: 5,
      maxTourist: 35,
    },
    {
      name: 'Khám phá Phú Quốc 3N2Đ',
      description:
        'Tận hưởng biển xanh, suối Tranh, Vinpearl Safari và ẩm thực biển đảo.',
      price: 3700000,
      startDate: new Date('2025-07-20T08:00:00.000Z'),
      endDate: new Date('2025-07-22T18:00:00.000Z'),
      location: 'Phú Quốc',
      duration: 3,
      maxTourist: 20,
    },
  ];

  for (const tour of tours) {
    await prisma.tour.create({ data: tour });
  }

  console.log('✅ Đã seed dữ liệu tour thành công!');
}

void main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
