import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindAlarmsRepository } from '../../../../application/ports/find-alarms.repository';
import { AlarmReadModel } from '../../../../domain/read-models/alarm.read-model';
import { MaterializedAlarmView } from '../schemas/Materialized-alarm-view.schema';

@Injectable()
export class OrmFindAlarmsRepository implements FindAlarmsRepository {
  constructor(
    @InjectModel(MaterializedAlarmView.name)
    private readonly alarmModel: Model<MaterializedAlarmView>,
  ) {}

  async findAll(): Promise<AlarmReadModel[]> {
    return await this.alarmModel.find(); //.map(this.mapToReadModel);
  }

}
