// thin façade between controllers (presenters) and the CQRS command/query handlers.
// just forwards requests to the command/query bus — it doesn’t contain business logic.

import { Injectable } from '@nestjs/common';
import { CreateAlarmCommand } from './commands/create-alarm.command';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetAlarmsQuery } from './queries/get-alarms.query';
import { AcknowledgeAlarmCommand } from './commands/acknowledge-alarm.command';

@Injectable()
export class AlarmsService {
  constructor(
    private readonly commandBus: CommandBus, // 👈
    private readonly queryBus: QueryBus, // 👈
  ) {}

  acknowledge(id: string) { // 👈
    return this.commandBus.execute(new AcknowledgeAlarmCommand(id));
  }

  create(createAlarmCommand: CreateAlarmCommand) {
    return this.commandBus.execute(createAlarmCommand); // 👈
  }

  findAll() {
    return this.queryBus.execute(new GetAlarmsQuery()); // 👈
  }
}