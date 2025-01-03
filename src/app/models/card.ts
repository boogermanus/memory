export class Card {

    public Id: number = 0 ;

    private isFlipped: boolean = false;
    public get IsFlipped(): boolean {
        return this.isFlipped;
    }

    private canBeFlipped: boolean = true;
    public get CanBeFlipped(): boolean {
        return this.canBeFlipped;
    }
    constructor(id?: number, face?: string, back?:string) {
        this.Id = id ?? 0;
        this.faceValue = face ?? '';
        this.backValue = back ?? '';
    }

    public state: string = 'inactive'
    public faceValue: string = 'Front';
    public backValue: string = 'Back';

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
