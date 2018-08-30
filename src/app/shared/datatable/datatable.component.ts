import { Component, OnInit, AfterViewChecked } from '@angular/core';

import 'datatables.net';
import 'datatables.net-dt';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, AfterViewChecked {

  dataTable: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    const table = $('table');
    this.dataTable = table.dataTable();
  }

}
