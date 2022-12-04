import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { InputTextModule } from 'primeng/inputtext';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { TabViewModule } from 'primeng/tabview';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import { PaginatorModule } from 'primeng/paginator';
import { SidebarModule } from 'primeng/sidebar';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { SpeedDialModule } from 'primeng/speeddial';
import { AvatarModule } from 'primeng/avatar';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';

import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionDetailsComponent } from './transaction-details/transaction-details.component';


@NgModule({
  declarations: [
    TransactionFormComponent,
    TransactionDetailsComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    AutoCompleteModule,
    InputTextareaModule,
    CalendarModule,
    TableModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    ScrollPanelModule,
    DynamicDialogModule,
    ToastModule,
    DividerModule,
    PaginatorModule,
    SidebarModule,
    OverlayPanelModule,
    SpeedDialModule,
    AvatarModule,
    PasswordModule,
    CheckboxModule
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    InputTextModule,
    AutoCompleteModule,
    InputTextareaModule,
    CalendarModule,
    TableModule,
    ButtonModule,
    SplitButtonModule,
    TabViewModule,
    ScrollPanelModule,
    DynamicDialogModule,
    ToastModule,
    DividerModule,
    PaginatorModule,
    SidebarModule,
    OverlayPanelModule,
    SpeedDialModule,
    AvatarModule,
    PasswordModule,
    CheckboxModule,
    TransactionFormComponent,
    TransactionDetailsComponent
  ]
})
export class SharedModule { }
