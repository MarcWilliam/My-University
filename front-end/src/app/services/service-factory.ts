import { Injectable } from '@angular/core';
import { CRUDService, UserService, UserRoleService } from '../services';

@Injectable()
export class ServiceFactory {
  private routesMap: RoutesMap = {};

  constructor(private userService: UserService, private userRoleService: UserRoleService) {
    this.routesMap[this.userService.apiRoute] = this.userService;
    this.routesMap[this.userRoleService.apiRoute] = this.userRoleService;
  }

  getService(route: string) {
    return this.routesMap[route];
  }

}

interface RoutesMap {
    [route: string]: CRUDService;
}
