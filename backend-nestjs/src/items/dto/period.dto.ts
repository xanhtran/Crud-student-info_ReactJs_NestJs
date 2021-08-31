import { Period } from "../interfaces/period.interface"
export class PeriodDto implements Period {
    from: Date
    to: Date
}