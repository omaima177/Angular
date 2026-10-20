import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, isActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private router = inject(Router);

  // Signal<boolean> : se met à jour automatiquement à chaque navigation
  isListActive = isActive('/list', this.router);

  // Exemple de lien dynamique avec [routerLink]
  route = '/list';
  routeName = 'Conférences';
}