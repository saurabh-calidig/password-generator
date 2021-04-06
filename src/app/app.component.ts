import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length = 0;
  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;

  handleLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  handleLetters() {
    this.useLetters = !this.useLetters;
  }

  handleNumbers() {
    this.useNumbers = !this.useNumbers;
  }

  handleSymbols() {
    this.useSymbols = !this.useSymbols;
  }

  generatePassword() {
    
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*-+_~';
    let validChars = '';
    
    if (this.useLetters) {
      validChars += letters;
    }
    if (this.useNumbers) {
      validChars += numbers;
    }
    if (this.useSymbols) {
      validChars += symbols;
    }
    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

}
