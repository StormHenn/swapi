import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';
import { BasePeople, ListPeople } from 'src/app/shared/models';

import { SwapiService } from 'src/app/shared/services/swapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private people_sub?: Subscription;
  public people?: ListPeople;

  constructor(
    private swapiService: SwapiService
  ) { }

  public ngOnInit(): void {
    this.people_sub = this.swapiService.getPeople().subscribe({
      next: (people) => {
        people.results.forEach(element => {
          this.people = element
        });
      }
    })
  }

  public ngOnDestroy(): void {
    this.people_sub?.unsubscribe();
  }

}
