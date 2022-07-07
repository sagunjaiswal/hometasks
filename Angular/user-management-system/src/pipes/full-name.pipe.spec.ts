import { FullNamePipe } from './full-name.pipe';

describe('FullNamePipe', () => {
  let pipe: FullNamePipe;
  beforeEach(() => {
    pipe = new FullNamePipe();
  });
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });
  it('should return concatenated string', () => {
    let fullName = pipe.transform('Sagun', 'Jaiswal');
    expect(fullName).toBe('Sagun Jaiswal');
    fullName = pipe.transform('Sagun', 'Jaiswal');
    expect(fullName).toBe('Sagun Jaiswal');
  });
});
