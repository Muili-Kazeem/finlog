import { Component, OnInit } from '@angular/core';
import { faEllipsisVertical, faPlus, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  title: string = "Clients";
  faAdd = faPlus;
  faDots = faEllipsisVertical;
  faEdit = faPencil;
  faDel = faTrash;

  first!: number;

  moreMobile!: boolean;

  clients:any = [
    { id: 1, name: "Azeez Nimot", company: 'Hautessence', email: "azeeznimot@gmail.com", phone: "08190078965", balance: "765", overdue: "988"},
    { id: 2, name: "Muili Kazeem", company: 'Ilium Design', email: "muiliquazeem@gmail.com", phone: "08170038965", balance: "5", overdue: "767"},
    { id: 1, name: "Azeez Nimot", company: 'Hautessence', email: "azeeznimot@gmail.com", phone: "08190078965", balance: "765", overdue: "988"},
    { id: 2, name: "Muili Kazeem", company: 'Ilium Design', email: "muiliquazeem@gmail.com", phone: "08170038965", balance: "5", overdue: "767"},
    { id: 1, name: "Azeez Nimot", company: 'Hautessence', email: "azeeznimot@gmail.com", phone: "08190078965", balance: "765", overdue: "988"},
    { id: 2, name: "Muili Kazeem", company: 'Ilium Design', email: "muiliquazeem@gmail.com", phone: "08170038965", balance: "5", overdue: "767"},
    { id: 1, name: "Azeez Nimot", company: 'Hautessence', email: "azeeznimot@gmail.com", phone: "08190078965", balance: "765", overdue: "988"},
    { id: 2, name: "Muili Kazeem", company: 'Ilium Design', email: "muiliquazeem@gmail.com", phone: "08170038965", balance: "5", overdue: "767"},
    { id: 1, name: "Azeez Nimot", company: 'Hautessence', email: "azeeznimot@gmail.com", phone: "08190078965", balance: "765", overdue: "988"},
    { id: 2, name: "Muili Kazeem", company: 'Ilium Design', email: "muiliquazeem@gmail.com", phone: "08170038965", balance: "5", overdue: "767"},
    { id: 1, name: "Azeez Nimot", company: 'Hautessence', email: "azeeznimot@gmail.com", phone: "08190078965", balance: "765", overdue: "988"},
    { id: 2, name: "Muili Kazeem", company: 'Ilium Design', email: "muiliquazeem@gmail.com", phone: "08170038965", balance: "5", overdue: "767"},
    { id: 1, name: "Azeez Nimot", company: 'Hautessence', email: "azeeznimot@gmail.com", phone: "08190078965", balance: "765", overdue: "988"},
    { id: 2, name: "Muili Kazeem", company: 'Ilium Design', email: "muiliquazeem@gmail.com", phone: "08170038965", balance: "5", overdue: "767"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  deleteClient(id: number): void {
    console.log(id)
  }
}
