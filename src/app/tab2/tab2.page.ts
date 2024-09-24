import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service'; 
import { ModalController, IonicModule } from '@ionic/angular';
import { TrainingPlan } from '../data/types';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';
import { PlanEditModalComponent } from '../plan-edit-modal/plan-edit-modal.component';
import trainingPlan from '../data/mockData';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule, 
  ],
})
export class Tab2Page implements OnInit {
  plan: TrainingPlan | null = null;

  constructor(
    private storageService: StorageService,
    private modalController: ModalController 
  ) {
    addIcons({ add });
  }

  async ngOnInit() {
    this.plan = await this.storageService.get('trainingPlan');
    
    if (!this.plan) {
      console.log('Nie ma planu, ustawiam domyślny plan');
      this.plan = trainingPlan; 
      await this.storageService.set('trainingPlan', this.plan);  
    }
  }

  async editPlan() {
    const modal = await this.modalController.create({
      component: PlanEditModalComponent,
      componentProps: { plan: this.plan }
    });

    modal.onDidDismiss().then(async (result) => {
      if (result.data) {
        this.plan = result.data;
        await this.storageService.set('trainingPlan', this.plan);
      }
    });

    return await modal.present();
  }
}