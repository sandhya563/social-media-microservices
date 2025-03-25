import { Controller, Get } from '@nestjs/common';
import { ActivityService } from './activity-tracker.service'
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('activities')
export class ActivityController {
  constructor(private readonly activityService: ActivityService) {}

  @Get()
  async getAllActivities() {
    return this.activityService.getAllActivities();
  }
  @EventPattern('user.postActivity') 
  async handlePostActivity(@Payload() data: { userId: string; action: string }) {
    console.log('✅ Received event in Activity Service:', data);

    if (!data) {
      console.error('❌ Received null or undefined data!');
      return;
    }

    try {
      const savedLog = await this.activityService.handlePostActivity(data);
      console.log('✅ Event saved to DB:', savedLog);
    } catch (error) {
      console.error('❌ Error saving event to DB:', error);
    }
  }
}
