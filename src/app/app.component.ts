import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Color Change Task';
  inputcolor = "";
  inputcolor2 = "";
  btncolor = "cyan";
  btncolor2 = "cyan";

  colorchange(){
  if(this.inputcolor && CSS.supports('color',this.inputcolor)){
      this.btncolor=this.inputcolor;
    }else{
      this.btncolor="cyan";
    }  }

   autochange(){
    if(this.inputcolor2 && CSS.supports('color',this.inputcolor2)){
      this.btncolor2=this.inputcolor2;
    }else{
      this.btncolor2="cyan";
    }
  }
}
