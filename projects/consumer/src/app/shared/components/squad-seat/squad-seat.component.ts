import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-squad-seat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squad-seat.component.html',
  styleUrl: './squad-seat.component.css',
})
export class SquadSeatComponent {
  seatCount = 80;

  users = [
    {
      name: 'Evans Elabo',
      avatarUrl: 'https://avatars.githubusercontent.com/u/74984305?v=4',
      gitHubUrl: 'https://github.com/ellaboevans',
    },
    {
      name: 'Jane Ahann',
      avatarUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      gitHubUrl: 'https://github.com/johndoe',
    },
    {
      name: 'Arif Riyanto',
      avatarUrl:
        'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gitHubUrl: 'https://github.com/arifriyanto',
    },
  ];

  protected get seats(): number[] {
    return Array.from({ length: this.seatCount }, (_, i) => i + 1);
  }
}
