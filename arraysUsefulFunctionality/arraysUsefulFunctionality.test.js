require('./arraysUsefulFunctionality');

describe("Fixed Tests", () => {
    describe("Array.prototype.range", () => {
        test("Array's first value should begin with start", () => {
            expect(Array.range(1,3)).toEqual([1,2,3])
        })
        test("Should work for negative starts", () => {
            expect(Array.range(-1,1)).toEqual([-1])
            expect(Array.range(-3,5)).toEqual([-3,-2,-1,0,1])
        })
        test("Should return empty array for zero counts", () => {
            expect(Array.range(0,0)).toEqual([])
            expect(Array.range(1,0)).toEqual([])
        })
    })
    describe("Array.prototype.sum", () => {
        test("Empty array should sum to 0", () => {
            expect([].sum()).toEqual(0)
        })
        test("Should be able to add negative numbers", () => {
            expect([-2,-1,-5].sum()).toEqual(-8)
        })
        test("Should be able to add all numbers in the array", () => {
            expect([-3,-2,-1,0,1,2,3].sum()).toEqual(0)
        })
    })
})
