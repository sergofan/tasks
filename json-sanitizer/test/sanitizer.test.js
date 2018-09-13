import Sanitizer from '../src/Sanitizer';
import * as data from '../data/json-data.json';
import * as schema from '../data/schema/json-schema.json'

const sanitizer = new Sanitizer(data.records, schema, 'users');

describe('data', () => {
  test('does data is object?', () => {
    expect(typeof data).toBe('object')
  });
  test('does data.users length is greater than 0?', () => {
    expect(data.users.length).toBeGreaterThan(0)
  });
});

describe('validatechema', () => {
  test('does function be called?', () => {
    let validateSchema = sanitizer.validateSchema();
    // let validateSchema =jest.fn( () => true );
    validateSchema();
    expect(validateSchema).toHaveBeenCalled();
  });
});