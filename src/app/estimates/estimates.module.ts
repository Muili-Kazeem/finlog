import { NgModule } from '@angular/core';

import { EstimatesRoutingModule } from './estimates-routing.module';
import { AddEstimateComponent } from './add-estimate/add-estimate.component';
import { EstimatesComponent } from './estimates/estimates.component';
import { SendEstimateDialogComponent } from './send-estimate-dialog/send-estimate-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { EditEstimateComponent } from './edit-estimate/edit-estimate.component';
import { EstimateComponent } from './estimate/estimate.component';


@NgModule({
  declarations: [
    AddEstimateComponent,
    EstimatesComponent,
    SendEstimateDialogComponent,
    EditEstimateComponent,
    EstimateComponent,
  ],
  imports: [
    EstimatesRoutingModule,
    SharedModule
  ],
  entryComponents: [
    SendEstimateDialogComponent
  ]
})
export class EstimatesModule { }
