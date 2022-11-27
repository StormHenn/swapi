import { Component, Input, OnInit } from '@angular/core';
import { ListPeople } from 'src/app/shared/models';

@Component({
  selector: 'app-swcard',
  templateUrl: './swcard.component.html',
  styleUrls: ['./swcard.component.scss']
})
export class SwcardComponent implements OnInit {
  @Input() public people!: ListPeople;

  constructor() { }

  ngOnInit(): void {
  }

}
