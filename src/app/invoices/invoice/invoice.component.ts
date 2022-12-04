import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EstimateServiceService } from 'src/app/estimate-service.service';
import { IClientEstimate } from 'src/app/model';
import { SendInvoiceDialogComponent } from '../send-invoice-dialog/send-invoice-dialog.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss'],
  providers: [ DialogService ]
})
export class InvoiceComponent implements OnInit {

  estimates!: IClientEstimate[];
  ref!: DynamicDialogRef;

  constructor( private estimateService: EstimateServiceService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.estimates = this.estimateService.getEstimates()
    console.log(this.estimates);
  }

  openInvoiceDialog() {
    this.ref = this.dialogService.open(SendInvoiceDialogComponent, {
      header: "Send Invoice",
      width: "80%",
      contentStyle: {'overflow': 'auto'},
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe((response) => {
      if (response) {
        console.log(response)
      }
    });

    this.ref.onMaximize.subscribe((maxim) => {
      if (maxim) {
        console.log(maxim)
      }
    });
  }





  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }

}
