import { getBuffer } from "../converter";
import { ArrayBufferConverter } from "../converter";

const arrayBufferConverter = new ArrayBufferConverter();

test('load method should load buffer', () => {
const buffer = getBuffer();
arrayBufferConverter.load(buffer);
expect(arrayBufferConverter.buffer).toEqual(buffer);
});

test('toString method should convert buffer to string', () => {
const buffer = getBuffer();
arrayBufferConverter.load(buffer);
const expectedResult = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
expect(arrayBufferConverter.toString()).toBe(expectedResult);
});