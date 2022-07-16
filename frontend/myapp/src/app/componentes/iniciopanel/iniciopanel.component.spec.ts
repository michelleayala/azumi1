import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciopanelComponent } from './iniciopanel.component';

describe('IniciopanelComponent', () => {
  let component: IniciopanelComponent;
  let fixture: ComponentFixture<IniciopanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciopanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IniciopanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
