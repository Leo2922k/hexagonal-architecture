import { AlarmReadModel } from '../../domain/read-models/alarm.read-model';

// When a write happens in the write DB, the system
// publishes an event → the event handler listens → 
// and updates the read DB through this port.

// Take an object where id is required but all other fields are optional.
export abstract class UpsertMaterializedAlarmRepository {
  abstract upsert(
    alarm: Pick<AlarmReadModel, 'id'> & Partial<AlarmReadModel>,
  ): Promise<void>;
}