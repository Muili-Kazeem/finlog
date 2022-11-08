import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-send-invoice-dialog',
  templateUrl: './send-invoice-dialog.component.html',
  styleUrls: ['./send-invoice-dialog.component.scss']
})
export class SendInvoiceDialogComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  invoiceMailForm!: FormGroup;

  ngOnInit(): void {
    this.invoiceMailForm = this.fb.group({
      mailSubject: '',
      mailBody: '',
    })
  }

}
