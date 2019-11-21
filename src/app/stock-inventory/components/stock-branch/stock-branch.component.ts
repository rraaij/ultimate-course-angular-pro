import {Component, Input} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-stock-branch',
  templateUrl: './stock-branch.component.html',
  styleUrls: ['./stock-branch.component.scss']
})
export class StockBranchComponent {
  @Input() parent: FormGroup;

  constructor() { }
}
