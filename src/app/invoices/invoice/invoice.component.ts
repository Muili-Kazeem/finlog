import { Component, OnInit } from '@angular/core';
import { EstimateServiceService } from 'src/app/estimate-service.service';
import { IClientEstimate } from 'src/app/model';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  estimates!: IClientEstimate[];

  constructor( private estimateService: EstimateServiceService) { }

  ngOnInit(): void {
    this.estimates = this.estimateService.getEstimates()
    console.log(this.estimates);
  }

}
