

const { add } = require('./calc')


describe("calc suite", () => {
    it("1+2=3", () => {
        const actual = add(1, 2)
        expect(actual).toBe(3)
    })
})