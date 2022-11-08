import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

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
import { OverlayPanel, OverlayPanelModule } from 'primeng/overlaypanel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
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
    OverlayPanelModule
  ],
  exports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
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
    OverlayPanelModule
  ]
})
export class SharedModule { }
