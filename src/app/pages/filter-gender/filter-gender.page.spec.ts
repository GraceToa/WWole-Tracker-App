import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FilterGenderPage } from './filter-gender.page';

describe('FilterGenderPage', () => {
  let component: FilterGenderPage;
  let fixture: ComponentFixture<FilterGenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterGenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FilterGenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
