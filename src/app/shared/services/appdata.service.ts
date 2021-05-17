import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppdataService {

  public productAdded: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }
}
