import { Component } from '@angular/core';
import { CounterValue } from "./counter-value/counter-value";
import { CounterButton } from "./counter-button/counter-button";
import { CustomeInput } from './custome-input/custome-input';

@Component({
  selector: 'app-counter',
  imports: [CounterValue, CounterButton, CustomeInput],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {

}
