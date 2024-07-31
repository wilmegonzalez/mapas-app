import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterAloneComponent } from "../counter-alone/counter-alone.component";

@Component({
  selector: 'app-test-alone',
  standalone: true,
  imports: [CommonModule, CounterAloneComponent],

  templateUrl: './test-alone.component.html',
  styleUrls: ['./test-alone.component.css']
})
export class TestAloneComponent {

}
