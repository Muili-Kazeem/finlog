import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SendInvoiceDialogComponent } from '../send-invoice-dialog/send-invoice-dialog.component';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.scss'],
  providers: [ DialogService ]
})
export class AddInvoiceComponent implements OnInit, OnDestroy {

  title: string = "New Invoice";
  Invoicecustomers: String[] = ["Shalewa", "Balqees", "Abike", "Rasaqi"]
  filteredCustomers!: String[];
  ref!: DynamicDialogRef;

  // get invoiceItems(): FormArray {
  //   return <FormArray>this.invoiceForm.get("invoiceItems")
  // }

  actionOptions = [
    { label: "Save", icon: '', command: () => { this.popInvoiceDialog() }},
    { label: "Print or Preview", icon: '', command: () => { this.popInvoiceDialog() }},
    { label: "Clear All", icon: '', command: () => { this.resetAll() }},
    { label: "Cancel", icon: '', command: () => { this.saveForm() }}
  ]

  invoiceForm!: FormGroup;

  constructor( private fb: FormBuilder, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.invoiceForm = this.fb.group({
      firstinvoiceId: 'Inv',
      secondinvoiceId: '#0001',
      customer: '',
      billingAddress: '',
      invoiceDate: '',
      expiryDate: '',
      currency: '',
      invoiceNumber: '',
      reference: '',
      invoiceItems: this.fb.array([ this.buildInvoiceItemsGroup() ]),
      subtotal: '',
      tax: '',
      discount: '',
      invoiceTotal: '',
      notes: ''
    })
  }

  // addInvoiceItem(): void {
  //   this.invoiceItems.push(this.buildInvoiceItemsGroup());
  // }

  // removeInvoiceItem(index: Number): void {
  //   this.invoiceItems.removeAt(Number(index));
  // }

  buildInvoiceItemsGroup(): FormGroup {
    return this.fb.group({
      product: '',
      description: '',
      quantity: '',
      rate: '',
      discount: '',
      amount: ''
    })
  }

  saveForm() {
    console.log("I'm submitting");
    console.log(this.invoiceForm);
  }

  // filterCustomer(event: { query: any; }) {
  //   let filtered: any[] = [];
  //   let query = event.query;

  //   for(let i=0; i < this.Invoicecustomers.length; i++) {
  //     let customer = this.Invoicecustomers[i];
  //     if (customer.toLowerCase().indexOf(query.toLowerCase()) == 0) {
  //       filtered.push(customer);
  //     }
  //   }
  //   this.filteredCustomers = filtered;
  // }

  resetAll() {
    this.invoiceForm.reset();
  }

  // resetInvoiceItems() {
  //   this.invoiceItems.reset();
  //   this.invoiceItems.clear();
  //   this.addInvoiceItem();
  // }

  popInvoiceDialog() {
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
