import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models';
import { CourseService } from '../../services';
@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {

 	private course :Course ;

  constructor(private route: ActivatedRoute, private courseService: CourseService) { 
  	this.course= new Course();
  }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      const courseId = params['courseId'];
        this.courseService.read('id', [courseId]).subscribe(response => {
          this.course = <Course>response['data'][0];
        });
    });
    
  }
  onSave() {
    this.courseService.update([this.course]).subscribe(result => {
    });
  }
}
 