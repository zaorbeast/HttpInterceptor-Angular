import { TestBed } from '@angular/core/testing';

import { ExerciceInterceptor } from './exercice.interceptor';

describe('ExerciceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ExerciceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ExerciceInterceptor = TestBed.inject(ExerciceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
