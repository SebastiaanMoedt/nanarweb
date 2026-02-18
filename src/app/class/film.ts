import { Cycle } from "./cycle"
import { FilmState } from "./enum/film-state"

export class Film {
    id!: number
    title!: string
    year!: number
    length: number = 1000
    filmPath!: string
    subsPath!: string
    specialInfo!: string
    filmState: FilmState = FilmState.TO_WATCH
    cycles!: Cycle[]
}

