import { Component, OnInit } from '@angular/core';

import {
  MdDataTableComponent,
  MdDataTablePaginationComponent,
  IDatatableSelectionEvent,
  IDatatableSortEvent,
  IDatatablePaginationEvent,
  DatatableSortType,
} from 'ng2-md-datatable';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.scss']
})

export class EnrollmentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
