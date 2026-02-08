import { CycleState } from "./enum/cycle-state";
import { Film } from "./film";

export class Cycle {
    cycleName!: string
    status: CycleState = CycleState.TO_FILL
    description!: string
    currentIndex!: number
    films!: Film[]
}
