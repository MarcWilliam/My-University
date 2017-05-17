import { Injectable } from '@angular/core';
import { CRUDService, UserService, UserRoleService, CourseService } from '../services';

@Injectable()
export class ServiceFactory {
  private routesMap: RoutesMap = {};

  constructor(private userService: UserService, private userRoleService: UserRoleService, private courseService: CourseService) {
    this.routesMap[this.userService.apiRoute] = this.userService;
    this.routesMap[this.userRoleService.apiRoute] = this.userRoleService;
    this.routesMap[this.courseService.apiRoute] = this.courseService;
  }

  getService(route: string) {
    return this.routesMap[route];
  }

}

interface RoutesMap {
    [route: string]: CRUDService;
}
