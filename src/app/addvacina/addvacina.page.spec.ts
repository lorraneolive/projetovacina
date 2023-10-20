import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddvacinaPage } from './addvacina.page';

describe('AddvacinaPage', () => {
  let component: AddvacinaPage;
  let fixture: ComponentFixture<AddvacinaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddvacinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
