import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  password = '';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeUseLetters(){
   this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers(){
   this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    console.log("includeLetters",this.includeLetters)
    console.log("includeNumbers: ",this.includeNumbers)
    console.log("includeSymbols: ",this.includeSymbols)
    this.password = 'My PASSWORD';
  }

}
