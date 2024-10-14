import { Component } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.css']
})
export class PassportComponent {
  user = {
    name: 'John Doe',
    email: 'john.doe@example.com'
  };
  
  achievements = [
    { id: 1, name: 'First Hackathon', date: '2023-05-15', icon: '🏆' },
    { id: 2, name: 'Best UI/UX Award', date: '2023-07-22', icon: '🎨' },
    { id: 3, name: 'Open Source Contributor', date: '2023-09-10', icon: '🌟' },
    { id: 4, name: 'AI Challenge Winner', date: '2023-11-05', icon: '🤖' },
    { id: 5, name: 'Blockchain Innovator', date: '2024-01-20', icon: '🔗' },
    { id: 6, name: 'Cloud Certification', date: '2024-03-15', icon: '☁️' },
  ];

  constructor(private routerExtensions: RouterExtensions) {}

  onStampTap(achievement: any) {
    this.routerExtensions.navigate(['/achievement', achievement.id]);
  }

  getRowIndex(index: number): number {
    return Math.floor(index / 2);
  }

  getColIndex(index: number): number {
    return index % 2;
  }
}