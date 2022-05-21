import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { ExtractComponent } from './extract/extract.component';
import { MaterialSharedModule } from 'src/app/shared/material-shared/material-shared.module';


@NgModule({
  declarations: [
    ExtractComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialSharedModule
  ]
})
export class AccountModule { }
