import { Module } from '@nestjs/common';
import { ActivityService } from './activity-tracker.service';
import { ActivityController } from './activity-tracker.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ActivityService],
  controllers: [ActivityController]
})
export class ActivityTrackerModule {}
