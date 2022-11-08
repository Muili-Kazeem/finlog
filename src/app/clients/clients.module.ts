import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';

import { SharedModule } from '../shared/shared.module';

import { ClientsComponent } from './clients/clients.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ClientComponent } from './client/client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

@NgModule({
  declarations: [
    ClientsComponent,
    AddClientComponent,
    ClientComponent,
    EditClientComponent
  ],
  imports: [
    ClientsRoutingModule,
    SharedModule
  ],
})
export class ClientsModule { }
