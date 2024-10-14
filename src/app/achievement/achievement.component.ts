import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ns-achievement',
  templateUrl: './achievement.component.html',
  styleUrls: ['./achievement.component.css']
})
export class AchievementComponent implements OnInit {
  achievementId: number;
  achievement: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.achievementId = +this.route.snapshot.params['id'];
    // In a real app, you would fetch the achievement details from a service
    this.achievement = {
      id: this.achievementId,
      name: 'Achievement ' + this.achievementId,
      date: '2023-05-15',
      description: 'This is a detailed description of the achievement.',
    };
  }
}