import { Module } from '@nestjs/common';
import { PickService } from './pick.service';
import { PickController } from './pick.controller';

@Module({
  providers: [PickService],
  controllers: [PickController]
})
export class PickModule {}
