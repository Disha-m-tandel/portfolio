import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mini-projects.component.html',
  styleUrl: './mini-projects.component.scss'
})
export class MiniProjectsComponent {

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

onOpenAdflex(){
  this.isVisibleAdflex = !this.isVisibleAdflex;
  console.log(this.isVisible);
}
 
onCloseAdflex(){
  this.isVisibleAdflex = false;
  console.log(this.isVisible);
}


}
