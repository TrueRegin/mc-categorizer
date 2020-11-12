/**
 * @jest-environment node
 */

import axios from 'axios';
import { SITE_URL } from '../config';
describe('localhost/blocks', () => {
     test('returns an array of data', (done) => {
          axios.get(SITE_URL('/blocks')).then((res) => {
               expect(typeof res.data).toBe(typeof []);
               done();
          });
     });
});

describe('localhost/items', () => {
     test('returns an array of data', (done) => {
          axios.get(SITE_URL('/items')).then((res) => {
               expect(typeof res.data).toBe(typeof []);
               done();
          });
     });
});
