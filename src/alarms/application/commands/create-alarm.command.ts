// This is a command DTO
// Represents the intention to create an alarm.
export class CreateAlarmCommand {
  constructor(
    public readonly name: string,
    public readonly severity: string,
    public readonly triggeredAt: Date,
    public readonly items: Array<{
      name: string;
      type: string;
    }>,
  ) {}
}
