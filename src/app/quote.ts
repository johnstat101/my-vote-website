export class Quote {
    public showDescription: boolean;
    
    constructor(public id: number,public author: string,public quote: string, public upVote: number, public downVote: number, public createDate: Date){
    this.showDescription=false;
  }
}
