import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { EstimateServiceService } from 'src/app/estimate-service.service';

import { IClientEstimate } from 'src/app/model';

@Component({
  selector: 'app-estimates',
  templateUrl: './estimates.component.html',
  styleUrls: ['./estimates.component.scss']
})
export class EstimatesComponent implements OnInit {
  title: string = "Estimates";
  faAdd = faPlus;

  estimates!: IClientEstimate[];

  constructor( private estimateService: EstimateServiceService) { }

  ngOnInit(): void {
    this.estimates = this.estimateService.getEstimates()
    console.log(this.estimates);
  }

}
