export class Card {

    private isFlipped: boolean = false;
    public get IsFlipped(): boolean {
        return this.isFlipped;
    }

    private canBeFlipped: boolean = true;
    public get CanBeFlipped(): boolean {
        return this.canBeFlipped;
    }

    public state: string = 'inactive'
    public faceValue: string = '';
    public backValue: string = '';

    public flip(): void {

        if(!this.canBeFlipped) {
            return;
        }
        
        this.isFlipped = !this.isFlipped;
        this.state = this.isFlipped ? 'active' : 'inactive';
    }

    public cannotBeFlipped(): void {
        this.canBeFlipped = false;
    }
}
