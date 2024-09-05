import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import trainingPlan from '../data/mockData';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { add, pencil } from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    CommonModule,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,
    IonIcon
  
  ],
})
export class Tab2Page {
  plan = trainingPlan;

  editPlan() {
    console.log('Edytuj plan');
  }

  constructor() {
    addIcons({ add });
  }
}
