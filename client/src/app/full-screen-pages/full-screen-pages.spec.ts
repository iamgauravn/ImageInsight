import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenPages } from './full-screen-pages';

describe('FullScreenPages', () => {
  let component: FullScreenPages;
  let fixture: ComponentFixture<FullScreenPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullScreenPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullScreenPages);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
