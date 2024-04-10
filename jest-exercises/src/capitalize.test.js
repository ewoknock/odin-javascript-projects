import capitalize from './capitalize'

test('capitalizes the first letter', () => {
    const testCases = [
        ['hello', 'Hello'],
        ['Hello', 'Hello'],
        ['hELLO', 'HELLO'],
    ]
    testCases.forEach((test) => {
        expect(capitalize(test[0])).toBe(test[1])
    })
})