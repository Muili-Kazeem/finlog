import { Injectable } from '@angular/core';
import { estimates } from './data'

import { IClientEstimate } from './model';

@Injectable({
  providedIn: 'root'
})
export class EstimateServiceService {

  clientEstimates!: IClientEstimate[];

  constructor() {
    this.clientEstimates = estimates
  }

  getEstimates() {
    return this.clientEstimates;
  }
}


