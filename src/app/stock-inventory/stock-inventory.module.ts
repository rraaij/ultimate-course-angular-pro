import {NgModule} from '@angular/core';
import {StockInventoryComponent} from './containers/stock-inventory.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    StockInventoryComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StockInventoryComponent
  ],
  providers: []
})
export class StockInventoryModule { }
