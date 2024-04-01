import { Validator } from "../login";
    
  test('validate 0-9 a-z _ -', () => {
    const username = 'user-1_name';
    expect(Validator.validateUsername(username)).toBeTruthy();
  });
  
  test('contains more than 3 consecutive numbers', () => {
    const username = 'user1234s';
    expect(Validator.validateUsername(username)).toBeFalsy;
  });
  
  test('starts and ends with non-alphanumeric character', () => {
    const username = '-user12_';
    expect(Validator.validateUsername(username)).toBeFalsy;
  });
  
  test('starts and ends with a number', () => {
    const username = '123user4';
    expect(Validator.validateUsername(username)).toBeFalsy;
  });
  
  test.each([
    'user1234s',
    '-user1s',
    'user1k-',
    '123user',
    'user199',
    '_user-one',
    'user-number-one_',
  ])('%s should be falsy', (str) => {
    expect(Validator.validateUsername(str)).toBeFalsy();
  });