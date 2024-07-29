import { RandomPointsPipe } from './random-points.pipe';

describe('RandomPointsPipe', () => {
  it('create an instance', () => {
    const pipe = new RandomPointsPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return a random number', () => {
    const pipe = new RandomPointsPipe();
    const result = pipe.transform(1);
    expect(result).toBeGreaterThanOrEqual(0);
    expect(result).toBeLessThanOrEqual(1000);
  });
});
