import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlaymusicPage } from './playmusic.page';

describe('PlaymusicPage', () => {
  let component: PlaymusicPage;
  let fixture: ComponentFixture<PlaymusicPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlaymusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
