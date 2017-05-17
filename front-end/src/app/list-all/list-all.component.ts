import { Component, OnInit } from '@angular/core';
import { MdCheckboxModule } from '@angular/material';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CRUDService } from '../CRUD.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceFactory } from '../service-factory';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.scss']
})
export class ListAllComponent implements OnInit {
  public data: any;
  public headers: any;

  private crudService: CRUDService;

  constructor(private route: ActivatedRoute, private serviceFactory: ServiceFactory) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.crudService = this.serviceFactory.getService(params['apiRoute']);
      this.crudService.read().subscribe(data => {
        this.data = data
        this.headers = Object.keys(this.data[0]);
      });
    });
  }
}
