import { personage } from "../sorting";

  test('sort personage', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };

    const result = [{
        key: 'name',
        value: 'мечник'
      },
      {
        key: 'level',
        value: 2
      },
      {
        key: 'attack',
        value: 80
      },
      {
        key: 'defence',
        value: 40
      },
      {
        key: 'health',
        value: 10
      },
    ];

    expect(personage(obj, ['name', 'level'])).toEqual(result);
  });

  test('sorting personage', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };

    const result = [{
        key: 'level',
        value: 2
      },
      {
        key: 'defence',
        value: 40
      },
      {
        key: 'name',
        value: 'мечник'
      },
      {
        key: 'attack',
        value: 80
      },
      {
        key: 'health',
        value: 10
      },
    ];

    expect(personage(obj, ['level', 'defence', 'name'])).toEqual(result);
  });

  test('sort w/o personage', () => {
    const obj = {
      name: 'мечник',
      health: 10,
      level: 2,
      attack: 80,
      defence: 40,
    };

    const result = [{
        key: 'attack',
        value: 80
      },
      {
        key: 'defence',
        value: 40
      },
      {
        key: 'health',
        value: 10
      },
      {
        key: 'level',
        value: 2
      },
      {
        key: 'name',
        value: 'мечник'
      },
    ];

    expect(personage(obj, )).toEqual(result);
  });