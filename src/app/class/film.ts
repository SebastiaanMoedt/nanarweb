import { Cycle } from "./cycle"
import { FilmState } from "./enum/film-state"

export class Film {
    title!: String
    year!: number
    length!: number
    filmPath!: String
    subsPath!: String
    specialInfo!: String
    filmState!: FilmState
    cycles!: Cycle[]
}

