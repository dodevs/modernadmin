import { Component, OnInit, AfterViewChecked } from '@angular/core';

import 'selectize';

@Component({
  selector: 'app-seletize',
  templateUrl: './seletize.component.html',
  styleUrls: ['./seletize.component.css']
})
export class SeletizeComponent implements OnInit, AfterViewChecked {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    $('select').selectize();
  }

}
