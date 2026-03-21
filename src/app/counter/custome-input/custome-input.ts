import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../../states/counter.state';
import { customIncrement, customToggle } from '../../states/conter.action';
import { getToggle } from '../../states/counter.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { AppState } from '../../states/app.state';

@Component({
  selector: 'app-custome-input',
  imports: [FormsModule,AsyncPipe],
  templateUrl: './custome-input.html',
  styleUrl: './custome-input.css',
})
export class CustomeInput implements OnInit{

  constructor(private store: Store<AppState>){}

  cusstomeValue:number = 0;
  custometoggle$: Observable<boolean> | null = null;

  ngOnInit(): void {
    this.custometoggle$ = this.store.select(getToggle)
  }

  onButtonClickIncrement(){
    this.store.dispatch(customIncrement({value:this.cusstomeValue}));
  }

  showdiv(){
    this.store.dispatch(customToggle())
  }
}
