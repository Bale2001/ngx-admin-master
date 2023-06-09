import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderDetailIndexComponent } from './order-detail-index/order-detail-index.component';
import { NbCardModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



@NgModule({
  declarations: [
    OrderDetailIndexComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    ThemeModule,
    NgSelectModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class OrderDetailModule { }
