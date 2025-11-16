import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, ContactComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

showContact = false;

onContactClick() {
  this.showContact = true;
}

}
