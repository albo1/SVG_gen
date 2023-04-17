const Newshape = require('./shapes')
const drawShape = require('./shapes')

describe('triangle', () => {
    describe('Initalize triangle', () => {
        it('should set triangle', () => {
            const triangleObj = new triangle('text', 'textcolor', 'triangle', 'shapecolor')
            expect(triangleObj.text).toBe('text')
            expect(triangleObj.textcolor).toBe('textcolor')
            expect(triangleObj.shapes).toBe('triangle')
            expect(triangleObj.shapecolor).toBe('shapecolor');
        });
    })
})