import {
    Validator
  } from '../login';
  
  const validator = new Validator();
  
  test('validate 0-9 a-z _ -', () => {
    const username = 'user-1_name';
    expect(validator.validateUsername(username)).toBeTruthy();
  });
  
  test('contains more than 3 consecutive numbers', () => {
    const username = 'user1234s';
    expect(validator.validateUsername(username)).toBeFalsy;
  });
  
  test('starts and ends with non-alphanumeric character', () => {
    const username = '-user12_';
    expect(validator.validateUsername(username)).toBeFalsy;
  });
  
  test('starts and ends with a number', () => {
    const username = '123user4';
    expect(validator.validateUsername(username)).toBeFalsy;
  });