import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  randomQuote!: string
// https://dev.to/brianmtreese/i-built-the-smoothest-countdown-timer-in-angular-2noh
ngOnInit(): void {
    this.randomQuote = this.getRandomQuote()
}


  getRandomQuote(): string{
    const quotes: string[] =[
      "FLESHHH",
      "GIANT EXPLOSIOOON",
      "MOUSTACHE!",
      "CABRIOLES!",
      "Maine",
      "BOOOOBS",
      "Jeffrey, is that you?",
      "Flashback du film dans le film!",
      "Mannequin en mousse!",
      "We rate papier peint",
      "Il a dit le titre du film!",
      "Ça va bien se passer",
      "[personnage vomit] > Petite pensée pour Emmanuelle",
      "(OMINOUS MUSIC)",
      "J'avais pas besoin de dormir cette nuit.",
      "Chaque jour est une aventure.",
      "Le refrigerateur de la semaine est attribué à ...",
      "MARTHAAA",
      "Je sais pas ou on va, mais on y va."
    ]

    return quotes[Math.floor(Math.random() * quotes.length)];

  }

}
