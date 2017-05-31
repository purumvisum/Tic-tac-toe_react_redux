import detectWinner from '../logic/detectWinner';

describe('winDiagonal', () => {
    it('should win diagonal X', () => {
        const board = [
                ['X', '0', ''],
                ['0', 'X', ''],
                ['', '', 'X']
        ];
        expect(detectWinner(board, 'X')).toEqual(true);
    });
});

describe('winRow', () => {
    it('should win row', () => {
        const board = [
                ['X', 'X', 'X'],
                ['0', 'X', ''],
                ['', '', 'X']
        ];
        expect(detectWinner(board, 'X')).toEqual(true);
    });
});

describe('winCell', () => {
    it('should win cell', () => {
        const board = [
                ['', 'X', '0'],
                ['0', 'X', ''],
                ['', 'X', 'X']
        ];
        expect(detectWinner(board, 'X')).toEqual(true);
    });
});

describe('winRevertDiagonal', () => {
    it('should win revert diagonal', () => {
        const board = [
                ['', 'X', '0'],
                ['0', '0', ''],
                ['0', '0', 'X']
        ];
        expect(detectWinner(board, '0')).toEqual(true);
    });
});

describe('nobodyWin', () => {
    it('should return false (nobody win)', () => {
        const board = [
                ['0', 'X', '0'],
                ['0', '0', 'X'],
                ['X', '0', 'X']
        ];
        expect(detectWinner(board, '0')).toEqual(false);
    });
});
