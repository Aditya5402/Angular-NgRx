import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decreament, increament, reset } from '../../states/conter.action';
import { CounterState } from '../../states/counter.state';

@Component({
  selector: 'app-counter-button',
  imports: [],
  templateUrl: './counter-button.html',
  styleUrl: './counter-button.css',
})
export class CounterButton {
  
  constructor(private store:Store<{counter:CounterState}>){}
  
  onIncreament(){
    this.store.dispatch(increament())
  }

  onDecreament(){
    this.store.dispatch(decreament())
  }

  onReset(){
    this.store.dispatch(reset())
  }
}
