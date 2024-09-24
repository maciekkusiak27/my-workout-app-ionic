import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  private async init() {
    await this.storage.create();
  }

  async get(key: string) {
    return await this.storage.get(key);
  }

  async set(key: string, value: any) {
    await this.storage.set(key, value);
  }

  async remove(key: string) {
    await this.storage.remove(key);
  }

  async clear() {
    await this.storage.clear();
  }
}
