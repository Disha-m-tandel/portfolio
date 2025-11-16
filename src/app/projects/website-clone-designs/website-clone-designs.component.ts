import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-website-clone-designs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './website-clone-designs.component.html',
  styleUrl: './website-clone-designs.component.scss'
})
export class WebsiteCloneDesignsComponent {
isVisible: boolean = false;
  isVisibleDrrived: boolean = false;
  isVisibleAdflex: any;
constructor(){
}

onOpenMyCloudCam(){
  this.isVisible = !this.isVisible;
  console.log(this.isVisible);
}
 
onCloseMyCloudCam(){
  this.isVisible = false;
  console.log(this.isVisible);
}

onOpenDrrived(){
  this.isVisibleDrrived = !this.isVisibleDrrived;
  console.log(this.isVisible);
}
 
onCloseDrrived(){
  this.isVisibleDrrived = false;
  console.log(this.isVisible);
}


}
