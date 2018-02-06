import { TestBed, inject } from '@angular/core/testing';

import { ManagerstockService } from './managerstock.service';

describe('ManagerstockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManagerstockService]
    });
  });

  it('should be created', inject([ManagerstockService], (service: ManagerstockService) => {
    expect(service).toBeTruthy();
  }));
});
