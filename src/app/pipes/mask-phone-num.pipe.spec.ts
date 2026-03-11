import { MaskPhoneNumPipe } from './mask-phone-num.pipe';

describe('MaskPhoneNumPipe', () => {
  it('create an instance', () => {
    const pipe = new MaskPhoneNumPipe();
    expect(pipe).toBeTruthy();
  });
});
