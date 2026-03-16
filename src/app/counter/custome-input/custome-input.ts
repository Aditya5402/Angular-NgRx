import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CounterState } from '../../states/counter.state';
import { customIncrement, customToggle } from '../../states/conter.action';

@Component({
  selector: 'app-custome-input',
  imports: [FormsModule],
  templateUrl: './custome-input.html',
  styleUrl: './custome-input.css',
})
export class CustomeInput implements OnInit{

  constructor(private store: Store<{counter: CounterState}>){}

  cusstomeValue:number = 0;
  custometoggle:boolean = false;

  ngOnInit(): void {
    this.store.select('counter').subscribe((data)=>{
      console.log(data);
      this.custometoggle = data.toggle;
    })
  }
  onButtonClickIncrement(){
    this.store.dispatch(customIncrement({value:this.cusstomeValue}));
  }

  showdiv(){
    this.store.dispatch(customToggle())
  }
}
