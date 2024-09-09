import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardListComponent } from './card-list/card-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ListComponent } from "./list/list.component";
import { CommonModule, NgFor } from '@angular/common';
import { ClientCardComponent } from "./client-card/client-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardListComponent, NavBarComponent, ListComponent, NgFor, ClientCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'list-of-client';
clients: any;

onClientsReceived(listClient: any[]) {
  this.clients = listClient
  console.log("Lista recebida",this.clients)
  }
}
