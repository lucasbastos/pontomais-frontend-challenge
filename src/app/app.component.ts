import { Component } from '@angular/core';
import { MarvelService } from './marvel.service';
import { Character } from './models/character.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pontomais-frontend-challenge';
  characters: Character[] = [];
  page = 0;

  constructor(private marvelService: MarvelService) {

  }

  ngOnInit() {
    this.marvelService.getCharacters(this.page).subscribe((characters: any) => this.characters = characters);
  }
  previousPage() {
    if (this.page > 0) {
      this.page--;
      this.marvelService.getCharacters(this.page).subscribe((characters: any) => this.characters = characters);
    }
  }

  nextPage() {
    this.page++;
    console.log('next page', this.page);
    this.marvelService.getCharacters(this.page).subscribe((characters: any) => this.characters = characters);
  }

  pagination(page: number) {
    this.page = page;
    this.marvelService.getCharacters(this.page).subscribe((characters: any) => this.characters = characters);
  }
}
