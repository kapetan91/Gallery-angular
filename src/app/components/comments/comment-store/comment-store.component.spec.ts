import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentStoreComponent } from './comment-store.component';

describe('CommentStoreComponent', () => {
  let component: CommentStoreComponent;
  let fixture: ComponentFixture<CommentStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
