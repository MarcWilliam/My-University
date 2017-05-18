import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Semester } from '../../models';
import { SemesterService } from '../../services';
@Component({
  selector: 'app-edit-semester',
  templateUrl: './edit-semester.component.html',
  styleUrls: ['./edit-semester.component.scss']
})
export class EditSemesterComponent implements OnInit {

 	private semester : Semester;
  private isNew: boolean;

  constructor(private route: ActivatedRoute, private semesterService: SemesterService) { 
  	this.semester = new Semester();
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const semesterId = params['semesterId'];
      this.isNew = semesterId == '0';
      if(!this.isNew){
        this.semesterService.read('id', [semesterId]).subscribe(response => {
          this.semester = <Semester>response['data'][0];
        });
      }
    });
  }
  onSave() {
    if (this.isNew) {
    this.semesterService.create([this.semester]).subscribe(result => {
    });
  }else {
      this.semesterService.update([this.semester]).subscribe(result => {
      });
    }
  }
}
 