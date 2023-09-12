import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToobarTitleComponent } from './toobar-title.component';

describe('ToobarTitleComponent', () => {
  let component: ToobarTitleComponent;
  let fixture: ComponentFixture<ToobarTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToobarTitleComponent]
    });
    fixture = TestBed.createComponent(ToobarTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
