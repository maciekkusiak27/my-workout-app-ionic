import { Component, } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { clipboard, home, settings } from 'ionicons/icons';
import trainingPlan from '../data/mockData';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  currentDayIndex: number = 0;

  get todayExercises() {
    return trainingPlan.plan[this.currentDayIndex];
  }

  nextDay() {
    this.currentDayIndex = (this.currentDayIndex + 1) % trainingPlan.plan.length;
  }


  constructor() {
    addIcons({ home, clipboard, settings });
  }
}
