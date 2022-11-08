import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { InvoicesRoutingModule } from './invoices-routing.module';
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { SendInvoiceDialogComponent } from './send-invoice-dialog/send-invoice-dialog.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { EditInvoiceComponent } from './edit-invoice/edit-invoice.component';


@NgModule({
  declarations: [
    AddInvoiceComponent,
    InvoicesComponent,
    SendInvoiceDialogComponent,
    InvoiceComponent,
    EditInvoiceComponent
  ],
  imports: [
    InvoicesRoutingModule,
    SharedModule
  ],
  entryComponents: [
    SendInvoiceDialogComponent
  ]
})
export class InvoicesModule { }
