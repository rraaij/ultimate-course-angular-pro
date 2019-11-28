import {Component, forwardRef, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
  multi: true
};

@Component({
  selector: 'app-stock-counter',
  templateUrl: './stock-counter.component.html',
  styleUrls: ['./stock-counter.component.scss'],
  providers: [COUNTER_CONTROL_ACCESSOR]
})
export class StockCounterComponent implements ControlValueAccessor {
  @Input() step = 10;
  @Input() min = 10;
  @Input() max = 1000;

  value = 0;
  focus: boolean;

  constructor() { }

  onChange = (val: number) => {};
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  onTouch = () => {};
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  writeValue(value: any): void {
    this.value = value || 0;
  }

  onKeyDown(event: KeyboardEvent) {
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment()
    };
    if (handlers[event.code]) {
      handlers[event.code]();
      event.preventDefault();
      event.stopPropagation();
    }
    this.onTouch();
  }

  onBlur(event: FocusEvent) {
    this.focus = false;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  onFocus(event: FocusEvent) {
    this.focus = true;
    event.preventDefault();
    event.stopPropagation();
    this.onTouch();
  }

  increment() {
    if (this.value < this.max) {
      this.value += this.step;
      this.onChange(this.value);
    }
    this.onTouch();
  }
  decrement() {
    if (this.value > this.min) {
      this.value -= this.step;
      this.onChange(this.value);
    }
    this.onTouch();
  }
}
