import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  options!: MenuItem[]

  constructor() { }

  ngOnInit(): void {
    this.options = [
      {label: 'Delete', icon: 'pi pi-times', command: () => { console.log("Delete CLient")}}
    ]
  }

}
