import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import trainingPlan from '../data/mockData';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    CommonModule,
  ],
})
export class Tab1Page {
  currentDayIndex: number = 0;

  get todayExercises() {
    return trainingPlan.plan[this.currentDayIndex];
  }

  nextDay() {
    this.currentDayIndex =
      (this.currentDayIndex + 1) % Object.keys(trainingPlan.plan).length;
  }

  skipTraining() {
    console.log('to be handled');
  }
}
