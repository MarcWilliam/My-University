import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { MdCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import {
  MdDataTableComponent,
  MdDataTablePaginationComponent,
  IDatatableSelectionEvent,
  IDatatableSortEvent,
  IDatatablePaginationEvent,
  DatatableSortType,
} from 'ng2-md-datatable';

import { CRUDService, ServiceFactory } from '../../services';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit, AfterViewInit, OnDestroy {
  public data: any;
  public headers: any;

  private crudService: CRUDService;
  private currentSelection$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  private unmount$: Subject<void> = new Subject<void>();

  @ViewChild(MdDataTableComponent) datatable: MdDataTableComponent;

  constructor(private route: ActivatedRoute, private serviceFactory: ServiceFactory) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.crudService = this.serviceFactory.getService(params['apiRoute']);
      this.crudService.read().subscribe(data => {
        this.data = data;
        this.headers = Object.keys(this.data[0]);
      });
    });
  }

  ngAfterViewInit() {
    if (this.datatable) {
      Observable.from(this.datatable.selectionChange)
        .takeUntil(this.unmount$)
        .subscribe((e: IDatatableSelectionEvent) => this.currentSelection$.next(e.selectedValues));
    }
  }

  ngOnDestroy() {
    this.unmount$.next();
    this.unmount$.complete();
  }


}
