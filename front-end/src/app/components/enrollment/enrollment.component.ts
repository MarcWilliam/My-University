import { Component, OnInit } from '@angular/core';
import { GroupService, CourseOfferingService } from '../../services';
import { Group, Course } from '../../models';

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
  courses: Course[];
  private daysOfWeek: any = [
    { name: 'Sunday', value: 1 },
    { name: 'Monday', value: 2 },
    { name: 'Tuesday', value: 3 },
    { name: 'Wednesday', value: 4 },
    { name: 'Thursday', value: 5 },
    { name: 'Friday', value: 6 },
    { name: 'Saturday', value: 6 }
  ];

  constructor(private groupService: GroupService, private courseOfferingService: CourseOfferingService) {
  }

  getCourseByGroup() {
    
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
          }
        });
      }
    });
  }
}

interface DayOfWeekMap {
  [day: number]: string;
}

