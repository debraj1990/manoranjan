import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistlandingComponent } from './artistlanding.component';

describe('ArtistlandingComponent', () => {
  let component: ArtistlandingComponent;
  let fixture: ComponentFixture<ArtistlandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistlandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
