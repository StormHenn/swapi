import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BasePeople, ListPeople } from '../models';

@Injectable({
  providedIn: 'root'
})

export class SwapiService {

  constructor(
    private http: HttpClient
  ) { }

  public getPeople() {
    return this.http.get<BasePeople<ListPeople>>("https://swapi.dev/api/people")
  }

}
