import { Component, OnInit } from '@angular/core';
import { faEllipsisVertical, faPlus } from '@fortawesome/free-solid-svg-icons';
import { EstimateServiceService } from 'src/app/estimate-service.service';
import { IClientEstimate } from 'src/app/model';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  title: string = "Invoices";
  faAdd = faPlus;
  faDots = faEllipsisVertical;

  estimates!: IClientEstimate[];

  constructor( private estimateService: EstimateServiceService) { }

  ngOnInit(): void {
    this.estimates = this.estimateService.getEstimates()
    console.log(this.estimates);
  }

  deleteClient(id: number): void {
    console.log(id)
  }

}
