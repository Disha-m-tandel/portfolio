import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteCloneDesignsComponent } from './website-clone-designs.component';

describe('WebsiteCloneDesignsComponent', () => {
  let component: WebsiteCloneDesignsComponent;
  let fixture: ComponentFixture<WebsiteCloneDesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebsiteCloneDesignsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WebsiteCloneDesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
