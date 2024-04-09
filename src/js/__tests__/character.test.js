import { Character } from "../character";
import { Daemon } from "../character";
import { Magician } from "../character";


test('Test Magician', () => {
    const magician = new Magician(2);
    expect(magician.attack).toBe(85);
  });
  
  test('Test Daemon', () => {
    const daemon = new Daemon(5);
    daemon.stoned = 20;
    expect(daemon.attack).toBe(39);
  });