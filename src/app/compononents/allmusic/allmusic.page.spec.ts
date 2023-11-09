import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllmusicPage } from './allmusic.page';

describe('AllmusicPage', () => {
  let component: AllmusicPage;
  let fixture: ComponentFixture<AllmusicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AllmusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
