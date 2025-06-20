import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // 🔄 Xóa dữ liệu cũ (theo thứ tự khóa ngoại)
  await prisma.review.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.user.deleteMany();
  await prisma.tour.deleteMany();

  // 🌱 Tạo danh sách tour mẫu
  const tours = await Promise.all([
    prisma.tour.create({
      data: {
        name: 'Tour Đà Lạt 3N2Đ',
        description: 'Khám phá thành phố sương mù.',
        price: 2500000,
        startDate: new Date('2025-07-01T08:00:00.000Z'),
        endDate: new Date('2025-07-03T18:00:00.000Z'),
        location: 'Đà Lạt',
        duration: 3,
        maxTourist: 30,
      },
    }),
    prisma.tour.create({
      data: {
        name: 'Tour Nha Trang 4N3Đ',
        description: 'Du lịch biển đảo Nha Trang.',
        price: 3200000,
        startDate: new Date('2025-07-10T09:00:00.000Z'),
        endDate: new Date('2025-07-13T18:00:00.000Z'),
        location: 'Nha Trang',
        duration: 4,
        maxTourist: 25,
      },
    }),
  ]);

  // 🌱 Tạo user mẫu
  const users = await Promise.all([
    prisma.user.create({
      data: {
        email: 'alice@example.com',
        password: 'alice123',
        name: 'Alice',
        role: 'user',
        age: 25,
        phoneNum: '0987654321',
        gender: 'female',
      },
    }),
    prisma.user.create({
      data: {
        email: 'bob@example.com',
        password: 'bob123',
        name: 'Bob',
        role: 'user',
        age: 30,
        phoneNum: '0911222333',
        gender: 'male',
      },
    }),
    prisma.user.create({
      data: {
        email: 'admin@example.com',
        password: 'admin123',
        name: 'Admin',
        role: 'admin',
        age: 35,
        phoneNum: '0900111222',
        gender: 'other',
      },
    }),
  ]);

  // 🌱 Tạo booking mẫu
  await prisma.booking.create({
    data: {
      userId: users[0].id,
      tourId: tours[0].id,
      memNum: 2,
      totalPrice: tours[0].price * 2,
      status: 'confirmed',
    },
  });

  await prisma.booking.create({
    data: {
      userId: users[1].id,
      tourId: tours[1].id,
      memNum: 3,
      totalPrice: tours[1].price * 3,
      status: 'pending',
    },
  });

  console.log('✅ Đã seed dữ liệu thành công!');
}

void main()
  .catch((e) => {
    console.error('❌ Lỗi khi seed dữ liệu:', e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
