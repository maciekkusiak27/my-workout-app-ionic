import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { StorageService } from '../services/storage.service';  // Import StorageService
import { TrainingPlan } from '../data/types';  // Import typów

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
    CommonModule,
  ],
})
export class Tab1Page implements OnInit {
  currentDayIndex: number = 0;
  trainingPlan: TrainingPlan | null = null; 
  skippedDays: number = 0;

  constructor(private storageService: StorageService) {}

  async ngOnInit() {
    this.trainingPlan = await this.storageService.get('trainingPlan');

    if (!this.trainingPlan) {
      console.log('Brak planu w StorageService, ustawianie domyślnego planu.');
      this.trainingPlan = {
        name: 'Domyślny Plan',
        description: 'Domyślny opis planu',
        plan: []
      };
    }
  }

  get todayExercises() {
    if (this.trainingPlan && this.trainingPlan.plan.length > 0) {
      return this.trainingPlan.plan[this.currentDayIndex];
    }
    return { day: '', description: '', exercises: [] };  
  }

  nextDay() {
    if (this.trainingPlan && this.trainingPlan.plan.length > 0) {
      this.currentDayIndex = (this.currentDayIndex + 1) % this.trainingPlan.plan.length;
      this.skippedDays = 0; 
    }
  }

  skipTraining() {
    this.skippedDays++;  
  }
}
