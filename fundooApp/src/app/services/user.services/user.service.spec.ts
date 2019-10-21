import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserService],
      imports:[HttpClientTestingModule],

    });
    userService = TestBed.get(UserService); 

  });

  it('should be created', ()=> {
    expect(userService).toBeTruthy();
  });
});
