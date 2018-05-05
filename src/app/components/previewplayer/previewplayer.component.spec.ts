import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewplayerComponent } from './previewplayer.component';

describe('PreviewplayerComponent', () => {
  let component: PreviewplayerComponent;
  let fixture: ComponentFixture<PreviewplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
