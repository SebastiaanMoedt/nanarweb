import { CycleState } from "./enum/cycle-state";
import { Film } from "./film";

export class Cycle {
    cycleName!: string
    status!: CycleState
    description!: string
    films!: Film[]
}
