import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public tap:number=0;
  public pressed:number=0;
  public results:string;

  constructor(public navCtrl: NavController) {
    
    this.results="Tap Twice, press four times"
  
  }

  tapEvent(e){
      this.tap++;
  }

  pressEvent(e){
    this.pressed++;
    
  }

  reset(){
    this.tap=0;
    this.pressed=0;
  
  }

  didWin(){
    return this.tap==2&&this.pressed==4;
    }

    resetPressed(){
      this.pressed=0;
    }

    resetTap(){
      this.tap=0;
    }
    
  }



