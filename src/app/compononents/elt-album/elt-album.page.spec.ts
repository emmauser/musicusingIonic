import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EltAlbumPage } from './elt-album.page';

describe('EltAlbumPage', () => {
  let component: EltAlbumPage;
  let fixture: ComponentFixture<EltAlbumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EltAlbumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
