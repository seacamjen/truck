import { Injectable } from '@angular/core';
import { PreRegistry } from './preRegistry.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PreRegistryService {
  preregistry: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.preregistry = database.list('preregistry');
  }

  getPreRegistry(){
    return this.preregistry;
  }

  addPreRegistry(newPreRegistry: PreRegistry) {
    this.preregistry.push(newPreRegistry);
  }

  getPreRegistryById(preRegistryId: number){

  }
}
