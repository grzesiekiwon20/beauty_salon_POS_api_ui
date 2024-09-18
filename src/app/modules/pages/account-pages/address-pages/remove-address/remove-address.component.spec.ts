import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveAddressComponent } from './remove-address.component';

describe('RemoveAddressComponent', () => {
  let component: RemoveAddressComponent;
  let fixture: ComponentFixture<RemoveAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RemoveAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
