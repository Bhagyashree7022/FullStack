import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for [(ngModel)]

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import these here
  templateUrl: './app.html',             // Matches your file name in the image
  styleUrls: ['./app.css']               // Matches your file name in the image
})
export class AppComponent {
  // Step 2: Define url variable [cite: 64]
  url: string = 'https://angular.io/assets/images/logos/angular/angular.png';

  // For two-way data binding demonstration [cite: 50, 58]
  name: string = 'Bhagya Deshmukhe';

  // Step 5: Method for console message [cite: 67]
  onButtonClick() {
    console.log('hello world');
  }
}