import { AvatarUrlPipe } from './avatar-url.pipe';

describe('AvatarUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new AvatarUrlPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform name to avatar URL', () => {
    const pipe = new AvatarUrlPipe();
    expect(pipe.transform('John Doe')).toBe(
      'https://api.dicebear.com/9.x/micah/svg?seed=John Doe'
    );
  });
});
