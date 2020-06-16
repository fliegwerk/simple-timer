/**
 * Splits a string into a fixed amount of chunks.
 * @param input the input string that gets split
 * @param numChunks the number of chunks into which the string gets split
 * @throws if an invalid amount of chunks (i.e., less than 1) is supplied
 * @example `chunkString('abc', 3)` results in `['a', 'b', 'c']
 * @example `chunkString('abcdef', 3)` results in `['ab', 'cd', 'ef']
 */
export default function chunkString(input: string, numChunks: number): string[] {
    if (numChunks <= 0)
        throw new Error("numChunks must be greater than 0");

    const chunks = [];

    for (let chunk = 1; chunk <= numChunks; chunk++) {
        chunks.push(
            input.substring((chunk - 1) * input.length / numChunks, (chunk) * input.length / numChunks)
        )

    }

    return chunks;
}
