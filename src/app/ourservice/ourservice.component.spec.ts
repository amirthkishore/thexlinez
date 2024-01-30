import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurserviceComponent } from './ourservice.component';

describe('OurserviceComponent', () => {
  let component: OurserviceComponent;
  let fixture: ComponentFixture<OurserviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurserviceComponent]
    });
    fixture = TestBed.createComponent(OurserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
