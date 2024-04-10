import reverseString from './reverseString.js'

test('it reverses the string', () => {
    const testCases = [
        ['hello', 'olleh'],
        ['HELLO', 'OLLEH'],
        ['hello world', 'dlrow olleh'],
        ['hello world!', '!dlrow olleh'],
        ['nice to meet you', 'uoy teem ot ecin'],
        ['oh, hi mark', 'kram ih ,ho'],
      ];
      testCases.forEach((test) => {
        expect(reverseString(test[0])).toBe(test[1])
      })
})