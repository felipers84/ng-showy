import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaslideComponent } from './paginaslide.component';

describe('PaginaslideComponent', () => {
  let component: PaginaslideComponent;
  let fixture: ComponentFixture<PaginaslideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaslideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaslideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
