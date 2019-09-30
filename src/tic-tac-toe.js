class TicTacToe {
    constructor() {
        this.moveCounter = 0;
        this.field = [[, , ], [, , ], [, , ]];
    }

    getCurrentPlayerSymbol() {        
        if (this.moveCounter % 2 === 0) {
            return 'x';
        } else {
            return 'o';
        }
    }

    nextTurn(rowIndex, columnIndex) { 
        if (!this.field[rowIndex][columnIndex]) {
            this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.moveCounter++;
        }
    }

    isFinished() {
        if (this.getWinner() || this.isDraw()) {
            return true;
        }
        return false;
    }

    getWinner() {
        if (this.field[0][0] && (this.field[0][0] === this.field[0][1]) && (this.field[0][0] === this.field[0][2])) {
            return this.field[0][0];
        }
        if (this.field[1][0] && (this.field[1][0] === this.field[1][1]) && (this.field[1][0] === this.field[1][2])) {
            return this.field[1][0];
        }
        if (this.field[2][0] && (this.field[2][0] === this.field[2][1]) && (this.field[2][0] === this.field[2][2])) {
            return this.field[2][0];
        }
        if (this.field[0][0] && (this.field[0][0] === this.field[1][0]) && (this.field[0][0] === this.field[2][0])) {
            return this.field[0][0];
        }      
        if (this.field[0][1] && (this.field[0][1] === this.field[1][1]) && (this.field[0][1] === this.field[2][1])) {
            return this.field[0][1];
        }    
        if (this.field[0][2] && (this.field[0][2] === this.field[1][2]) && (this.field[0][2] === this.field[2][2])) {
            return this.field[0][2];
        }      
        if (this.field[0][0] && (this.field[0][0] === this.field[1][1]) && (this.field[0][0] === this.field[2][2])) {
            return this.field[0][0];
        }        
        if (this.field[2][0] && (this.field[2][0] === this.field[1][1]) && (this.field[2][0] === this.field[0][2])) {
            return this.field[2][0];
        }         
        return null;                  
    }

    noMoreTurns() {
        if (this.moveCounter === 9) {
            return true;
        }
        return false;
    }

    isDraw() {
        if (this.noMoreTurns() && (!this.getWinner())) {
            return true;
        }
        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex]) {
            return this.field[rowIndex][colIndex];
        }
        return null;
    }
}

module.exports = TicTacToe;
// console.log(undefined==undefined);
// game = new TicTacToe();
// game.nextTurn(2, 1)

// console.log(game.isFinished());
// console.log(game.getWinner());
// console.log(game.noMoreTurns());
// console.log(game.isDraw());
// console.log(game.getFieldValue(2, 1));
// console.log(game.getCurrentPlayerSymbol());
