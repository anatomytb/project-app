import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab3DetailPage } from './tab3-detail.page';

describe('Tab3DetailPage', () => {
  let component: Tab3DetailPage;
  let fixture: ComponentFixture<Tab3DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
