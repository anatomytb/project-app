import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab2DetailPage } from './tab2-detail.page';

describe('Tab2DetailPage', () => {
  let component: Tab2DetailPage;
  let fixture: ComponentFixture<Tab2DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
