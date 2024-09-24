import { Component, Input } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { trashOutline, backspace } from 'ionicons/icons';  
import { TrainingPlan } from '../data/types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-edit-modal',
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './plan-edit-modal.component.html',
  styleUrls: ['./plan-edit-modal.component.scss'],
})
export class PlanEditModalComponent {
  @Input() plan: TrainingPlan = {
    name: '',
    description: '',
    plan: []
  };

  constructor(private modalController: ModalController) {
    addIcons({
      'trash-outline': trashOutline,
      'backspace': backspace
    });
  }

  dismiss() {
    this.modalController.dismiss();
  }

  save() {
    if (this.plan) {
      this.modalController.dismiss(this.plan); 
    }
  }

  addDay() {
    this.plan.plan.push({
      day: '',
      description: '',
      exercises: []
    });
  }

  removeDay(index: number) {
    this.plan.plan.splice(index, 1); 
  }

  addExercise(day: any) {
    day.exercises.push({
      instruction: '',
      weight: '',
      replies: 0,
      series: 0
    });
  }

  removeExercise(day: any, index: number) {
    day.exercises.splice(index, 1); 
  }
}
