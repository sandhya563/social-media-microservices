import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActivityTrackerModule } from './activity-tracker/activity-tracker.module';
import { ActivityService } from './activity-tracker/activity-tracker.service';
import { PrismaService } from './prisma/prisma.service';


@Module({
  imports: [ActivityTrackerModule],
  controllers: [AppController],
  providers: [AppService,ActivityService, PrismaService],
})
export class AppModule {}
