import { Component, OnInit } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EstimateServiceService } from 'src/app/estimate-service.service';
import { IClientEstimate } from 'src/app/model';
import { SendEstimateDialogComponent } from '../send-estimate-dialog/send-estimate-dialog.component';

@Component({
  selector: 'app-estimate',
  templateUrl: './estimate.component.html',
  styleUrls: ['./estimate.component.scss'],
  providers: [ DialogService ]
})
export class EstimateComponent implements OnInit {

  estimates!: IClientEstimate[];
  ref!: DynamicDialogRef;

  constructor( private estimateService: EstimateServiceService, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.estimates = this.estimateService.getEstimates()
    console.log(this.estimates);
  }

  popEstimateDialog() {
    this.ref = this.dialogService.open(SendEstimateDialogComponent, {
      header: "Send Estimate",
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
