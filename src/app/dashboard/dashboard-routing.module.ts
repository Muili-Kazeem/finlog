import { InvoiceComponent } from './../invoices/invoice/invoice.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddClientComponent } from '../clients/add-client/add-client.component';
import { ClientComponent } from '../clients/client/client.component';
import { ClientsComponent } from '../clients/clients/clients.component';
import { AddEstimateComponent } from '../estimates/add-estimate/add-estimate.component';
import { EditEstimateComponent } from '../estimates/edit-estimate/edit-estimate.component';
import { EstimatesComponent } from '../estimates/estimates/estimates.component';
import { AddInvoiceComponent } from '../invoices/add-invoice/add-invoice.component';
import { InvoicesComponent } from '../invoices/invoices/invoices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { OverviewComponent } from './overview/overview.component';
import { EstimateComponent } from '../estimates/estimate/estimate.component';

const routes: Routes = [
  {
    path: 'app',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: GetStartedComponent },
      { path: 'overview', component: OverviewComponent },
      { path: 'estimates', component: EstimatesComponent },
      { path: 'estimates/add', component: AddEstimateComponent },
      { path: 'estimates/:id', component: EstimateComponent },
      { path: 'estimates/:id/edit', component: EditEstimateComponent },
      { path: 'invoices', component: InvoicesComponent },
      { path: 'invoices/add', component: AddInvoiceComponent },
      { path: 'invoices/:id', component: InvoiceComponent },
      { path: 'invoices/:id/edit', component: EditEstimateComponent },
      { path: 'clients', component: ClientsComponent },
      { path: 'clients/add', component: AddClientComponent },
      { path: 'profile', component: ClientComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
