import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pontomais-frontend-challenge';
  personagens = [
    {
      nome: 'Luke Skywalker',
      imagem: 'https://starwars-visualguide.com/assets/img/characters/luke-skywalker-wallpaper-10.jpg'
    },
    {
      nome: 'C-3PO',
      imagem: 'https://starwars-visualguide.com/assets/img/characters/c-3po-wallpaper-10.jpg'
    },
    {
      nome: 'R2-D2',
      imagem: 'https://starwars-visualguide.com/assets/img/characters/r2-d2-wallpaper-10.jpg'
    }
  ];
}
