/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PostsServiceService } from './posts-service.service';

describe('Service: PostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsServiceService]
    });
  });

  it('should ...', inject([PostsServiceService], (service: PostsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
