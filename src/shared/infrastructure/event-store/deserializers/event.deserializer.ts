import { Injectable, Type } from '@nestjs/common';
import { SerializableEvent } from '../../../domain/interfaces/serializable-event';
import { Event } from '../schemas/event.schema';
import { AlarmCreatedEvent } from '../../../../alarms/domain/events/alarm-created.event';
import { EventClsRegistry } from '../event-cli.registry';

@Injectable()
export class EventDeserializer {
  deserialize<T>(event: Event): SerializableEvent<T> {
    const eventCls = this.getEventClassByType(event.type);

    if (!eventCls) {
  throw new Error(`No event class found for type: ${event.type}`);
}

    return {
      ...event,
      data: this.instantiateSerializedEvent(eventCls, event.data),
    };
  }

  getEventClassByType(type: string) {
    return EventClsRegistry.get(type);
  }

  instantiateSerializedEvent<T extends Type>(
    eventCls: T,
    data: Record<string, any>,
  ) {
    return Object.assign(Object.create(eventCls.prototype), data);
  }
}