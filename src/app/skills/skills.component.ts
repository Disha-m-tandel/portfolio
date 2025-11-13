import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
openIndex: number | null = null;

toggle(index: number) {
  this.openIndex = this.openIndex === index ? null : index;
}

}
