// const triangle = require('./triangle')
// const circle = require('./circle')
// const square = require('./square')

const newShape = require('./shapes')


describe('triangle', () => {
    describe('Initalize triangle', () => {
        it('should set triangle', () => {
            const triangleObj = new newShape('text', 'textcolor', 'triangle', 'shapecolor')
            expect(triangleObj.text).toBe('text')
            expect(triangleObj.textcolor).toBe('textcolor')
            expect(triangleObj.shapes).toBe('triangle')
            expect(triangleObj.shapecolor).toBe('shapecolor');
        });
    });
});

describe('circle', () => {
    describe('Initalize circle', () => {
        it('should set circle', () => {
            const circleObj = new newShape('text', 'textcolor', 'circle', 'shapecolor')
            expect(circleObj.text).toBe('text')
            expect(circleObj.textcolor).toBe('textcolor')
            expect(circleObj.shapes).toBe('circle')
            expect(circleObj.shapecolor).toBe('shapecolor');
        });
    });
});

describe('square', () => {
    describe('Initalize square', () => {
        it('should set square', () => {
            const squareObj = new newShape('text', 'textcolor', 'square', 'shapecolor')
            expect(squareObj.text).toBe('text')
            expect(squareObj.textcolor).toBe('textcolor')
            expect(squareObj.shapes).toBe('square')
            expect(squareObj.shapecolor).toBe('shapecolor');
        });
    });
});