import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-show-calculation',
  standalone: true,
  imports: [],
  templateUrl: './show-calculation.component.html',
  styleUrl: './show-calculation.component.css'
})
export class ShowCalculationComponent {
@Input() maxAmount: number | undefined;
  @Input()
  minAmount!: number;

}
