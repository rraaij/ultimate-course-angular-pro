import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.scss']
})
export class StockProductsComponent {
  @Input() parent: FormGroup;
  @Output() removed = new EventEmitter<any>();

  get stocks() {
  return (this.parent.get('stock') as FormArray).controls;
  }

  constructor() { }

  onRemove(group, index) {
    this.removed.emit({ group, index });
  }
}
