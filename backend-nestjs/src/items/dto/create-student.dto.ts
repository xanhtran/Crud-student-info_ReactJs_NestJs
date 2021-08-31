import { ReviewTimelineDto } from "./perf-review.dto";
import {  PeriodDto } from "./period.dto";

export class CreateStudentDto {
  readonly name: string;
  readonly description: string;

  readonly email: string;
  readonly phone: string;
}
