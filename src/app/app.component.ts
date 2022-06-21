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

  constructor(private marvelService: MarvelService) {

  }

  ngOnInit() {
    this.marvelService.getCharacters().subscribe((characters: any) => this.characters = characters);
}
}
