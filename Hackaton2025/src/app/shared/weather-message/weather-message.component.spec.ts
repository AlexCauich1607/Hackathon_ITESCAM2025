import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherMessageComponent } from './weather-message.component';

describe('WeatherMessageComponent', () => {
  let component: WeatherMessageComponent;
  let fixture: ComponentFixture<WeatherMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
