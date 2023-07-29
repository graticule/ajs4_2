import sortByHealth from '../sortByHealth';

test.each([
  [
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ],
    [
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ],
  ],
  [
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 20 },
      { name: 'лучник', health: 30 },
    ],
    [
      { name: 'лучник', health: 30 },
      { name: 'маг', health: 20 },
      { name: 'мечник', health: 10 },
    ],
  ],
  [
    [
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 10 },
      { name: 'лучник', health: 20 },
    ],
    [
      { name: 'лучник', health: 20 },
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 10 },
    ],
  ],
])('Test list', (list, sortedList) => {
  expect(sortByHealth(list)).toEqual(sortedList);
});
