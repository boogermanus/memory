export class Card {

    private readonly DEFAULT_FRONT: string = 'Front';
    private readonly DEFAULT_BACK: string = ''
    public Id: number = 0 ;

    private isFlipped: boolean = false;
    public get IsFlipped(): boolean {
        return this.isFlipped;
    }

    private canBeFlipped: boolean = true;
    public get CanBeFlipped(): boolean {
        return this.canBeFlipped;
    }

    private hasMatch: boolean = false;
    public get HasMatch(): boolean {
        return this.hasMatch;
    }
    constructor(id?: number, face?: string, back?:string) {
        this.Id = id ?? 0;
        this.faceValue = face ?? this.DEFAULT_FRONT;
        this.backValue = back ?? this.DEFAULT_BACK;
    }

    public state: string = 'inactive'
    public faceValue: string = 'Front';
    public backValue: string = 'Back';
    public style: string = '';

    public flip(): void {

        if(!this.canBeFlipped || this.hasMatch) {
            return;
        }
        
        this.isFlipped = !this.isFlipped;
        this.state = this.isFlipped ? 'active' : 'inactive';
    }

    public toggleCanBeFlipped(): void {
        this.canBeFlipped = !this.canBeFlipped;
    }

    public cannotBeFlipped(): void {
        this.canBeFlipped = false;
        this.hasMatch = true;
        this.style = 'white';
    }
}
