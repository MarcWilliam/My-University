import { NgModule } from '@angular/core';

import {MdButtonModule, MdCheckboxModule, MdSidenavModule, MdGridListModule, MdToolbarModule, MdListModule, MdIconModule, MdInputModule, MdCardModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdSidenavModule, MdGridListModule, MdToolbarModule, MdListModule, MdIconModule, MdInputModule, MdCardModule],
  exports: [MdButtonModule, MdCheckboxModule, MdSidenavModule, MdGridListModule, MdToolbarModule, MdListModule, MdIconModule, MdInputModule, MdCardModule],
})
export class MaterialDesignModule { }