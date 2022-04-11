import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFormCreateComponent } from './template-form-create.component';

describe('TemplateFormCreateComponent', () => {
  let component: TemplateFormCreateComponent;
  let fixture: ComponentFixture<TemplateFormCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFormCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFormCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
