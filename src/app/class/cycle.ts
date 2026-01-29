import { CycleState } from "./enum/cycle-state";
import { Film } from "./film";

export class Cycle {
    cycleId!: number
    cycleName!: String
    status!: CycleState
    description!: String
    films!: Film[]
}
