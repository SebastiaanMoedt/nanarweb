import { FilmState } from "./enum/film-state"

export class Film {
    filmId!: number
    title!: string
    year!: number
    length!: number
    filmPath!: string
    subsPath!: string
    specialInfo!: string
    filmState!: FilmState
    cycles!: string[]
}

