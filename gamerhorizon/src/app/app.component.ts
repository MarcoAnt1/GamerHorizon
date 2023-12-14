import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../shared/nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gamer Horizon';
  games = [
    {
      name: "God Of War Ragnarok",
      cover: "god-of-war-ragnarok-cover.jpg",
      description: "This centers on Kratos, the God of War, and his now teenage son, Atreus, who are facing the conflict of the upcoming Ragnarök, due to the result of Kratos killing Norse God, Baldur, while setting on their to end tyranny reign of Odin, King of Asgard and while focusing off Atreus, who tries to uncover his origins"
    },
    {
      name: "God Of War Ragnarok",
      cover: "god-of-war-ragnarok-cover.jpg",
      description: "This centers on Kratos, the God of War, and his now teenage son, Atreus, who are facing the conflict of the upcoming Ragnarök, due to the result of Kratos killing Norse God, Baldur, while setting on their to end tyranny reign of Odin, King of Asgard and while focusing off Atreus, who tries to uncover his origins"
    },
    {
      name: "God Of War Ragnarok",
      cover: "god-of-war-ragnarok-cover.jpg",
      description: "This centers on Kratos, the God of War, and his now teenage son, Atreus, who are facing the conflict of the upcoming Ragnarök, due to the result of Kratos killing Norse God, Baldur, while setting on their to end tyranny reign of Odin, King of Asgard and while focusing off Atreus, who tries to uncover his origins"
    },

  ];

}
