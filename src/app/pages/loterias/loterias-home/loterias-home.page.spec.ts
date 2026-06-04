import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoteriasHomePage } from './loterias-home.page';

describe('LoteriasHomePage', () => {
  let component: LoteriasHomePage;
  let fixture: ComponentFixture<LoteriasHomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoteriasHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
