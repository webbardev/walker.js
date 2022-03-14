import elbwalker from '../elbwalker';

const w = window;

describe('datalayer', () => {
  test('init', () => {
    expect(w.dataLayer).toBeUndefined();
    elbwalker.go();
    expect(w.dataLayer).toBeDefined();
    elbwalker.push('entity action', { a: 1 }, 'manual');
    expect(w.dataLayer).toBeDefined();
    expect(w.dataLayer).toStrictEqual([
      {
        event: 'page view',
        entity: 'page',
        action: 'view',
        data: { domain: 'localhost', id: '/', title: '' },
        trigger: 'load',
        nested: [],
        elbwalker: true,
      },
      {
        event: 'entity action',
        entity: 'entity',
        action: 'action',
        data: { a: 1 },
        trigger: 'manual',
        nested: [],
        elbwalker: true,
      },
    ]);
  });
});