import chunkString from "./chunk-string";

describe('chunkString', () => {
    it('should throw for numbers of chunks <= 0', () => {
        expect(()=>chunkString('', 0)).toThrow();
    })

    it('should split a string into the correct amounts of chunks', () => {
        expect(chunkString('abc', 20)).toHaveLength(20);
    });

    it('should split the string such that .join("") reassembles it to its original state', () => {
        let string = '';

        for (let i = 0; i<100; i++) {
            expect(chunkString(string, 10).join('')).toBe(string);

            string += String.fromCharCode(i);
        }
    })

    it('should split the string into similarly sized chunks', () => {
        let string = '';

        for (let i = 0; i<100; i++) {
            const chunks = chunkString(string,10);

            for (let chunk of chunks) {
                expect(chunk.length - chunks[0].length).toBeLessThanOrEqual(1);
            }

            string += String.fromCharCode(i);
        }
    })
})
