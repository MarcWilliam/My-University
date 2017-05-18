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

	private course: Course;
	private isNew: boolean;
	constructor(private route: ActivatedRoute,
		private courseService: CourseService) {
		this.course = new Course();
	}

	ngOnInit() {

		this.route.queryParams.subscribe(params => {
			const courseId = params['courseId'];
			this.isNew = courseId == '0';
			if (!this.isNew) {
				this.courseService.read('id', [courseId]).subscribe(response => {
					this.course = <Course>response['data'][0];
				});
			}
		});

	}
	onSave() {
		if (this.isNew) {
			this.courseService.create([this.course]).subscribe(result => {
			});
		}
		else {
			this.courseService.update([this.course]).subscribe(result => {
			});
		}
	}
}
