import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  menuOpen = false;
isMobile = window.innerWidth <= 768;

  ngOnInit() {
    // Start with menu hidden
    if (!this.isMobile) {
    this.menuOpen = true;
  }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  @HostListener('window:resize', ['$event'])
onResize(event: any) {
  this.isMobile = event.target.innerWidth <= 768;

  // If desktop, keep menu visible
  if (!this.isMobile) {
    this.menuOpen = true;
  }
}
}
