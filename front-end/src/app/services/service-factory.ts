import { Injectable } from '@angular/core';
import { CRUDService } from '../services';
import { UserService } from '../services';

@Injectable()
export class ServiceFactory {
  private routesMap: RoutesMap = {};

  constructor(private userService: UserService) {
    this.routesMap[this.userService.apiRoute] = this.userService;
  }

  getService(route: string) {
    return this.routesMap[route];
  }

}

interface RoutesMap {
    [route: string]: CRUDService;
}
