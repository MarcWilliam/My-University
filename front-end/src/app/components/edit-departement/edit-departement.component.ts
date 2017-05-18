import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department  } from '../../models';
import { DepartmentService } from '../../services';

@Component({
  selector: 'app-edit-departement',
  templateUrl: './edit-departement.component.html',
  styleUrls: ['./edit-departement.component.scss']
})
export class EditDepartementComponent implements OnInit {

  private department : Department;
  private isNew: boolean;


  constructor(private route: ActivatedRoute, private departmentService: DepartmentService) {
  	this.department = new Department();
   }


  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const departmentId = params['departmentId'];
      this.isNew = departmentId == '0';
      const isOther: boolean = departmentId != null && departmentId != '0';
      if (isOther) {
        this.departmentService.read('id', [departmentId]).subscribe(response => {
          this.department = <Department>response['data'][0];
        });
      }
    });
  }
  onSave(){
    if(this.isNew){
    this.departmentService.create([this.department]).subscribe(result => {
    });
  }else{
    this.departmentService.update([this.department]).subscribe(result => {
    });
  }
  }
}
 