import { NgModule } from '@angular/core';

import {MdButtonModule, MdCheckboxModule, MdSidenavModule, MdGridListModule, MdToolbarModule, MdListModule, MdIconModule, MdInputModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdSidenavModule, MdGridListModule, MdToolbarModule, MdListModule, MdIconModule, MdInputModule],
  exports: [MdButtonModule, MdCheckboxModule, MdSidenavModule, MdGridListModule, MdToolbarModule, MdListModule, MdIconModule, MdInputModule],
})
export class MaterialDesignModule { }