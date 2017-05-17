import { Injectable } from '@angular/core';
import { CRUDService, UserService, UserRoleService, CourseService , DepartmentService ,SemesterService } from '../services';

@Injectable()
export class ServiceFactory {
  private routesMap: RoutesMap = {};

  constructor(private userService: UserService, private userRoleService: UserRoleService, private courseService: CourseService , private depatmentService: DepartmentService ,private semesterService:SemesterService) {
    this.routesMap[this.userService.apiRoute] = this.userService;
    this.routesMap[this.userRoleService.apiRoute] = this.userRoleService;
    this.routesMap[this.courseService.apiRoute] = this.courseService;
    this.routesMap[this.depatmentService.apiRoute]=this.depatmentService;
    this.routesMap[this.semesterService.apiRoute]=this.semesterService;
  }

  getService(route: string) {
    return this.routesMap[route];
  }

}

interface RoutesMap {
    [route: string]: CRUDService;
}
