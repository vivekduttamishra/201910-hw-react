

const findWinner = function (cells: string[]): string | null {

    let winningCombos = [
        //row wins
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        //col wins
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        //diagnoal wins
        [0, 4, 8],
        [2, 4, 6]


    ]



    for (let combo of winningCombos) {
        let [one, two, three] = combo;
        if (cells[one] != '_' && cells[one] == cells[two] && cells[one] == cells[three])
            return cells[one]; //this guy won
    }


    return null; //no winner yet
}

const moveLeft = (cells: string[]): number=>{

    return cells.filter(c => c == '_').length;
}

const isGameOver = (cells: string[]): boolean=>{
    return moveLeft(cells) == 0 || findWinner(cells) !== null;
}

const isStalemate = (cells: string[]): boolean =>{
    return moveLeft(cells) == 0 && findWinner(cells) === null;
}

export interface GameStatus {
    winner: null | string;
    gameOver: boolean;
}

export const checkGameSatus = (cells: string[]): GameStatus => ({
    winner: findWinner(cells),
    gameOver: isGameOver(cells)
});
