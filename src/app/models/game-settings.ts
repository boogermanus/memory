export class GameSettings {
    private boardSize: number = 0;
    public get BoardSize(): number {
        return this.boardSize;
    }

    constructor(boardSize: number) {
        this.boardSize = boardSize;
    }
}
