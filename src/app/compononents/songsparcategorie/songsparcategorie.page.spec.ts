import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongsparcategoriePage } from './songsparcategorie.page';

describe('SongsparcategoriePage', () => {
  let component: SongsparcategoriePage;
  let fixture: ComponentFixture<SongsparcategoriePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SongsparcategoriePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
