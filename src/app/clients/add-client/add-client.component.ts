import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  title: string = "Add a Client";
  customers: String[] = ["Shalewa", "Adenike", "Abike"]
  filteredCustomers!: String[];

  constructor( private fb: FormBuilder) { }

  clientForm!: FormGroup;

  ngOnInit(): void {
    this.clientForm = this.fb.group({
    })
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

}
