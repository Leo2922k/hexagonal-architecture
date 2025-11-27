import { Alarm } from '../../../../domain/alarm';
import { AlarmSeverity } from '../../../../domain/value-objects/alarm-severity';
import { AlarmEntity } from '../entities/alarm.entity';

export class AlarmMapper {
    // coverts AlarmEntity to Alarm domain model
  static toDomain(alarmEntity: AlarmEntity): Alarm {
    const alarmSeverity = new AlarmSeverity(
      alarmEntity.severity as 'critical' | 'low' | 'medium' | 'high',
    );
    const alarmModel = new Alarm(
      alarmEntity.id,
      alarmEntity.name,
      alarmSeverity,
    );
    return alarmModel;
  }

  // converts Alarm domain model to AlarmEntity
  static toPersistence(alarm: Alarm) {
    const entity = new AlarmEntity();
    entity.id = alarm.id;
    entity.name = alarm.name;
    entity.severity = alarm.severity.value;
    return entity;
  }
}
