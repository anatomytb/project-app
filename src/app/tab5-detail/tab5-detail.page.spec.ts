import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab5DetailPage } from './tab5-detail.page';

describe('Tab5DetailPage', () => {
  let component: Tab5DetailPage;
  let fixture: ComponentFixture<Tab5DetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab5DetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab5DetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
