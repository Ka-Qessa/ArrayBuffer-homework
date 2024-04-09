import {
    Daemon
  } from "../character";
  import {
    Magician
  } from "../character";
  
  
  test('Testing the Magician', () => {
    const magician = new Magician(2);
    expect(magician.attack).toBe(85);
  });
  
  test('Testing the Daemon', () => {
    const daemon = new Daemon(5);
    daemon.stoned = 20;
    expect(daemon.attack).toBe(39);
  });