import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonenInfoComponent } from './pokemonen-info.component';

describe('PokemonenInfoComponent', () => {
  let component: PokemonenInfoComponent;
  let fixture: ComponentFixture<PokemonenInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonenInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonenInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
