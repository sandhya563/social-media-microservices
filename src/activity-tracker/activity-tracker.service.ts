import { Injectable } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ActivityService {
  constructor(private readonly prisma: PrismaService) {}

//   @EventPattern('user.postActivity')
//   async handlePostActivity(data: { userId: string; action: string }) {
//     console.log('✅ Received event in Activity Service:', data);

//   if (!data) {
//     console.error('❌ Received null or undefined data!');
//     return;
//   }
//     return this.prisma.activityLog.create({ data });
//   }

@EventPattern('user.postActivity')
  async handlePostActivity(data: { userId: string; action: string }) {
    console.log('✅ Received event in Activity Service:', data);

    if (!data) {
      console.error('❌ Received null or undefined data!');
      return;
    }

    try {
      const savedLog = await this.prisma.activityLog.create({ data });
      console.log('✅ Event saved to DB:', savedLog);
    } catch (error) {
      console.error('❌ Error saving event to DB:', error);
    }
  }
  async getAllActivities() {
    return this.prisma.activityLog.findMany();
  }
}
