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


  constructor(private route: ActivatedRoute, private departmentService: DepartmentService) {
  	this.department = new Department();
   }


  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const departmentId = params['departmentId'];
        this.departmentService.read('id', [departmentId]).subscribe(response => {
          this.department = <Department>response['data'][0];
          console.log(this.department);
        });
    });
    
  }
  onSave() {
    this.departmentService.update([this.department]).subscribe(result => {
    });
  }
}
 