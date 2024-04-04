import {
    ErrorRepository
  } from "../error";
  
  const errorRepo = new ErrorRepository();
  
  errorRepo.addError(404, 'Not Found');
  errorRepo.addError(500, 'Internal Server Error');
  
  test('return unknown error', () => {
    const recieved = errorRepo.translate(403);
    const expected = 'Unknown error';
    expect(recieved).toBe(expected);
  });
  
  test('translate known error correctly', () => {
    const recieved = errorRepo.translate(404);
    const expected = 'Not Found';
    expect(recieved).toBe(expected);
  })