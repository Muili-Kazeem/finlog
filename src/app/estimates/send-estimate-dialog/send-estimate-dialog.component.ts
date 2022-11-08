import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-send-estimate-dialog',
  templateUrl: './send-estimate-dialog.component.html',
  styleUrls: ['./send-estimate-dialog.component.scss']
})
export class SendEstimateDialogComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  estimateMailForm!: FormGroup;

  ngOnInit(): void {
    this.estimateMailForm = this.fb.group({
      mailSubject: '',
      mailBody: '',
    })
  }

}
