import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { SendEstimateDialogComponent } from '../send-estimate-dialog/send-estimate-dialog.component';

@Component({
  selector: 'app-add-estimate',
  templateUrl: './add-estimate.component.html',
  styleUrls: ['./add-estimate.component.scss'],
  providers: [ DialogService ]
})
export class AddEstimateComponent implements OnInit, OnDestroy {

  title: string = "Add an Estimate";
  customers: String[] = ["Shalewa", "Adenike", "Abike"]
  filteredCustomers!: String[];
  ref!: DynamicDialogRef;

  get estimateItems(): FormArray {
    return <FormArray>this.estimateForm.get("estimateItems")
  }

  actionOptions = [
    { label: "Save", icon: '', command: () => { this.popEstimateDialog() }},
    { label: "Print or Preview", icon: '', command: () => { this.addEstimateItem() }},
    { label: "Clear All", icon: '', command: () => { this.resetAll() }},
    { label: "Cancel", icon: '', command: () => { this.saveForm() }}
  ]

  estimateForm!: FormGroup;

  constructor( private fb: FormBuilder, public dialogService: DialogService) { }

  ngOnInit(): void {
    this.estimateForm = this.fb.group({
      firstEstimateId: 'Est',
      secondEstimateId: '#0001',
      customer: '',
      billingAddress: '',
      estimateDate: '',
      expiryDate: '',
      currency: '',
      recipientMail: '',
      estimateSubject: '',
      estimateItems: this.fb.array([ this.buildEstimateItemsGroup() ]),
      subtotal: '',
      tax: '',
      discount: '',
      estimateTotal: '',
      notes: '',
    })
  }

  addEstimateItem(): void {
    this.estimateItems.push(this.buildEstimateItemsGroup());
  }

  removeEstimateItem(index: Number): void {
    this.estimateItems.removeAt(Number(index));
  }

  buildEstimateItemsGroup(): FormGroup {
    return this.fb.group({
      item: '',
      description: '',
      quantity: '',
      rate: '',
      discount: '',
      amount: ''
    })
  }

  saveForm() {
    console.log("I'm submitting");
    console.log(this.estimateForm);
  }

  filterCustomer(event: { query: any; }) {
    let filtered: any[] = [];
    let query = event.query;

    for(let i=0; i < this.customers.length; i++) {
      let customer = this.customers[i];
      if (customer.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(customer);
      }
    }
    this.filteredCustomers = filtered;
  }

  resetAll() {
    this.estimateForm.reset();
  }

  resetEstimateItems() {
    this.estimateItems.reset();
    this.estimateItems.clear();
    this.addEstimateItem();
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
