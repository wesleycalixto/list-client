import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ClientCardComponent } from "../client-card/client-card.component";

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [ClientCardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent implements OnInit {
  ngOnInit(): void {}

  @Input() dataList: any[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dataList']) {
      console.log('Data received from parent:', this.dataList); // Log para verificação

    }
  }
}
