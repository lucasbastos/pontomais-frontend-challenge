import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5';
@Injectable({
  providedIn: 'root',
})
export class MarvelService {
  private readonly baseUrl = 'http://gateway.marvel.com/v1/public/characters?';

  private readonly PUBLIC_KEY = '2831b8ca76ecea71473b1a712589b8eb';
  private readonly PRIVATE_KEY = '26057e0d29c4a6b6848b74438e8a6cf4a3cec21a';

  constructor(private http: HttpClient) {}

  getCharacters() {
    const md5 = new Md5();
    const ts = Date.now();

    return this.http
      .get(
        this.baseUrl +
          'ts=' +
          ts +
          '&apikey=' +
          this.PUBLIC_KEY +
          '&hash=' +
          md5.appendStr(ts + this.PRIVATE_KEY + this.PUBLIC_KEY).end()
      )
      .pipe(
        map((res: any) => {
          return res.data.results.map((character: any) => {
            return {
              id: character.id,
              image: character.thumbnail.path + '.' + character.thumbnail.extension,
              name: character.name,
              series: character.series.items.map((item: any) => item.name),
              events: character.events.items.map((item: any) => item.name)
            }
          });
        })
      );
  }
}
