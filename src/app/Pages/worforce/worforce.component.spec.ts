import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorforceComponent } from './worforce.component';

describe('WorforceComponent', () => {
  let component: WorforceComponent;
  let fixture: ComponentFixture<WorforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorforceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
