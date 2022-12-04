import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss'],
  providers: [ DialogService ]
})
export class TransactionFormComponent implements OnInit {

  @Input() customers!: String[]
  filteredCustomers!: String[];

  get transactionItems(): FormArray {
    return <FormArray>this.transactionForm.get("transactionItems")
  }

  @Input() transactionForm!: FormGroup;

  constructor( private fb: FormBuilder) { }

  ngOnInit(): void {
    this.transactionForm = this.fb.group({
      customer: '',
      billingAddress: '',
      transactionDate: '',
      expiryDate: '',
      currency: '',
      recipientMail: '',
      transactionSubject: '',
      transactionItems: this.fb.array([ this.buildTransactionItemsGroup() ]),
      subtotal: '',
      tax: '',
      discount: '',
      transactionTotal: '',
      transactionNumber: '',
      reference: '',
      notes: ''
    })
  }

  addtransactionItem(): void {
    this.transactionItems.push(this.buildTransactionItemsGroup());
  }

  removeTransactionItem(index: Number): void {
    this.transactionItems.removeAt(Number(index));
  }

  buildTransactionItemsGroup(): FormGroup {
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
    console.log(this.transactionForm);
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

  resetTransactionItems() {
    this.transactionItems.reset();
    this.transactionItems.clear();
    this.addtransactionItem();
  }

}
