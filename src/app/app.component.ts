import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Daijo-Calculator';
  yourCaste: string = '';
  brideCaste: string = '';
  yourProfession: string = '';
  brideProfession: string = '';
  yourAge: number = 0;
  brideAge: number = 0;
  yourSalary: number = 0;
  maxAmount: number = 0;
  minAmount: number = 0;

  private CASTE_VALUES: { [key: string]: number } = {
    Brahmin: 1.3,
    Chhetri: 1.2,
    Newar: 1.1,
    Gurung: 1.0,
    Magar: 0.9,
    Rai: 0.9,
    Limbu: 0.9,
    Tamang: 0.9,
    Sherpa: 0.9,
    Thakuri: 0.9,
    Dalit: 0.8,
    Jaisi: 0.8,
    Kami: 0.8,
    Damai: 0.8,
    Sarki: 0.8,
    Sanyasi: 0.8,
    Kumal: 0.8,
    Badi: 0.8,
    Tharu: 0.8,
    Yadav: 0.8,
    Muslim: 0.8,
    Christian: 0.8,
    Others: 0.8,
  };

  private PROFESSION_VALUES: { [key: string]: number } = {
    Engineer: 1.3,
    Doctor: 1.3,
    Nurse: 1.0,
    Teacher: 1.0,
    Pilot: 1.2,
    Businessman: 1.2,
    Banker: 1.2,
    Lawyer: 1.2,
    Journalist: 1.0,
    Politician: 1.2,
    Actor: 1.2,
    Singer: 1.2,
    bideshirojgar: 1.2,
    Others: 1.0,
  };
  
  


  Calculate(): void{
    this.calculateGiftAmount();
  }

  private calculateGiftAmount(): void {
    let casteFactor = 1;
    let professionFactor = 1;
    let ageFactor = 0;

    // Determine caste factor
    if (this.yourCaste && this.brideCaste) {
      const groomCasteValue = this.CASTE_VALUES[this.yourCaste] || 1;
      const brideCasteValue = this.CASTE_VALUES[this.brideCaste] || 1;

      if (groomCasteValue === brideCasteValue) {
        // Same caste, no adjustment
        casteFactor = groomCasteValue;
      } else if (groomCasteValue < brideCasteValue) {
        // Groom's caste is lower, decrease the factor
        casteFactor = groomCasteValue * 0.8;
      } else {
        // Bride's caste is lower, increase the factor
        casteFactor = groomCasteValue * 1.2;
      }
    }

    // Determine profession factor
    if (this.yourProfession && this.brideProfession) {
      const groomProfessionValue = this.PROFESSION_VALUES[this.yourProfession] || 1;
      const brideProfessionValue = this.PROFESSION_VALUES[this.brideProfession] || 1;
    
      if (groomProfessionValue === brideProfessionValue) {
        // Same profession, no adjustment
        professionFactor = groomProfessionValue;
      } else if (groomProfessionValue < brideProfessionValue) {
        // Groom's profession is lower, decrease the factor
        professionFactor = groomProfessionValue * 0.8;
      } else {
        // Bride's profession is lower, increase the factor
        professionFactor = groomProfessionValue * 1.2;
      }
    }

    // age factor 
    // Determine age factor
if (this.yourAge && this.brideAge) {
  const ageDifference = Math.abs(this.yourAge - this.brideAge);

  if (ageDifference === 0) {
    // Same age, no adjustment
    ageFactor = 1.3;
  } else if (this.brideAge < 25) {
    // Bride is younger, decrease the factor
    ageFactor = 1.2;
  } else if (this.brideAge >= 25 ) {
    // Bride is in the ideal age range, increase the factor
    ageFactor = 1.6;
  } 
  else if ( this.brideAge <= 30) {
    // Bride is in the ideal age range, increase the factor
    ageFactor = 3;
  }
}





    // Calculate gift amount
    this.maxAmount = this.yourSalary * 12 * casteFactor * professionFactor * ageFactor;
    this.minAmount = this.maxAmount * 0.5;
  }
}
