import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesLoadingAsyncComponent } from './categories-loading-async.component';

describe('CategoriesLoadingAsyncComponent', () => {
  let component: CategoriesLoadingAsyncComponent;
  let fixture: ComponentFixture<CategoriesLoadingAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesLoadingAsyncComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesLoadingAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
