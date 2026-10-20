import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForum } from './user-forum';

describe('UserForum', () => {
  let component: UserForum;
  let fixture: ComponentFixture<UserForum>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserForum],
    }).compileComponents();

    fixture = TestBed.createComponent(UserForum);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
