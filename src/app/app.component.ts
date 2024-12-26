import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {FormComponent} from "./form/form.component";


@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [RouterOutlet],
  imports: [FormsModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Daijo-Calculator';

}
