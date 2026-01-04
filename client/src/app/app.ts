import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from './nav-bar/nav-bar';
import { DashboardPage } from './dashboard-page/dashboard-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardPage],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
}
