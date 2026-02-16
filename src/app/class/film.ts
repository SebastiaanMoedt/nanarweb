import { FilmState } from "./enum/film-state"

export class Film {
    id!: number
    title!: string
    year!: number
    length!: number
    filmPath!: string
    subsPath!: string
    specialInfo!: string
    filmState: FilmState = FilmState.TO_WATCH
}

