import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlarmRepository } from '../../../application/ports/alarm.repository';
import { AlarmEntity } from './entities/alarm.entity';
import { InMemoryAlarmRepository } from './repositories/alarm.repository';

@Module({
  imports: [],
  providers: [
    {
      provide: AlarmRepository,
      useClass: InMemoryAlarmRepository,
    },
  ],
  exports: [AlarmRepository],
})
export class InMemoryAlarmPersistenceModule {}