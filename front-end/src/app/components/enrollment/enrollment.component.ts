import { Component, OnInit } from '@angular/core';
import { GroupService, CourseOfferingService, CourseOfferingEnrollmentService, CourseService } from '../../services';
import { Group, CourseOffering, Course, CourseOfferingEnrollment } from '../../models';
import { AuthenticationService } from '../../services';

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

  groups: Group[];
  courses: CourseOffering[];
  groupOfCourseMap: groupOfCourseMap = {};
  courseMap: CourseMap = {};

  selectedCourses: number[] = new Array(18);

  private daysOfWeek: any = [
    { name: 'Sunday', value: 1 },
    { name: 'Monday', value: 2 },
    { name: 'Tuesday', value: 3 },
    { name: 'Wednesday', value: 4 },
    { name: 'Thursday', value: 5 },
    { name: 'Friday', value: 6 },
    { name: 'Saturday', value: 6 }
  ];

  constructor(private groupService: GroupService, private courseOfferingService: CourseOfferingService,
    private courseService: CourseService, private authenticationService: AuthenticationService, private courseOfferingEnrollmentService: CourseOfferingEnrollmentService) { }

  getCourse(courseOfferingID) {
    for (let course of this.courses) {
      if (course.id == courseOfferingID) {
        return course;
      }
    }
  }

  filterGroupSlot1(group: Group) {
    return group.slot == 1;
  }
  filterGroupSlot2(group: Group) {
    return group.slot == 2;
  }
  filterGroupSlot3(group: Group) {
    return group.slot == 3;
  }

  onEnroll() {
    const coursesEnrollmentArray: any[] = [];

    for (const courseId of this.selectedCourses) {

      const courseOfferingEnrollment: CourseOfferingEnrollment = new CourseOfferingEnrollment();
      if (courseId) {
        
        courseOfferingEnrollment.courseOfferingID = courseId;
        courseOfferingEnrollment.groupID = this.courseMap[courseId].groupId;
        courseOfferingEnrollment.semesterID = this.groupOfCourseMap[courseId].semesterID;
        courseOfferingEnrollment.userID = this.authenticationService.getCurrentUser().id;

        coursesEnrollmentArray.push(courseOfferingEnrollment);
      }
    }
    this.courseOfferingEnrollmentService.create(coursesEnrollmentArray).subscribe(respose => {
    });
  }

  onReset() {
    this.selectedCourses = new Array(18);
  }

  ngOnInit() {
    this.courseOfferingService.read().subscribe(response => {
      if (response) {
        this.courses = response['data'];
        const ids: any[] = [];

        for (let i = 0; i < this.courses.length; i++) {
          ids[i] = this.courses[i]['id'];
        }

        this.groupService.read('course_offering_id', ids).subscribe(response => {
          if (response) {
            this.groups = response['data'];

            const ids: any[] = [];

            for (let i = 0; i < this.courses.length; i++) {
              ids[i] = this.courses[i]['id'];
            }

            for (let group of this.groups) {
              for (let course of this.courses) {
                if (group.courseOfferingID == course.id) {
                  this.groupOfCourseMap[group.courseOfferingID] = course;
                  this.courseService.read('id', [group.courseOfferingID]).subscribe(response => {
                    this.courseMap[group.courseOfferingID] = { 'groupId': group.id, 'courseOfferingId': group.courseOfferingID, data: response['data'][0] };
                  });
                }
              }
            }
          }
        });
      }
    });
  }
}

interface DayOfWeekMap {
  [day: number]: string;
}

interface groupOfCourseMap {
  [id: number]: CourseOffering;
}
interface CourseMap {
  [id: number]: any;
}
