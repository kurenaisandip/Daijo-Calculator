import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CalculationServiceService} from "../calculation-service.service";
import {ShowCalculationComponent} from "../show-calculation/show-calculation.component";
import {HasRoleDirective} from "../has-role.directive";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ShowCalculationComponent,
    HasRoleDirective
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
  providers: [CalculationServiceService]
})
export class FormComponent {

  yourCaste: string = '';
  brideCaste: string = '';
  yourProfession: string = '';
  brideProfession: string = '';
  yourAge: number = 0;
  brideAge: number = 0;
  yourSalary: number = 0;
  maxAmount: number = 0;
  minAmount: number = 0;
  userRole: string = '';

  constructor(private service: CalculationServiceService) {
  }

  Calculate() {
    let values = this.service.calculateGiftAmount(this.yourCaste, this.brideCaste, this.yourProfession, this.brideProfession, this.yourAge, this.brideAge, this.yourSalary);
  this.maxAmount = values.maxAmount;
  this.minAmount = values.minAmount;
  }
}
