export class Card {
    public isFlipped: boolean = false;
    public canBeFlipped: boolean = true;
    public state: string = 'inactive'
    public faceValue: string = '';
    public backValue: string = '';
    
    public flip() {
        this.isFlipped = !this.isFlipped;
    }
}
