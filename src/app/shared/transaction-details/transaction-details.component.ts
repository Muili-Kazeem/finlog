import { Component, Input, OnInit } from '@angular/core';
import { IClientEstimate } from 'src/app/model';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss']
})
export class TransactionDetailsComponent implements OnInit {

  @Input("transaction") estimates!: IClientEstimate[];

  constructor() { }

  ngOnInit(): void {
  }

}
