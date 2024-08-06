import { Component, OnInit } from '@angular/core';
import DataJson from './../../../../assets/data.json';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styles: [
  ]
})
export class FaqsComponent implements OnInit {

  lista:any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.lista = DataJson.faqs;

  }

}
