import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,"Jonte",'John Kimani','Never outshine your master',0,0,new Date(2022,0,1)),
    new Quote(2,"Joe",'Joe Kennedy','When the going gets tough, the tough get going',0,0,new Date(2021,9,1)),
    new Quote(3,"Jane",'Mahatma Gandhi','You must be the change you wish to see',0,0,new Date(2022,0,6)),
    new Quote(4,"Rob",'Robert H. Schuller','Tough times never last but tough people do',0,0,new Date(2021,10,1)),
    new Quote(5,"Steve",'Stephen King','Get busy living or get busy dying',0,0,new Date(2021,5,10)),
  ]
  
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.createdDate = new Date(quote.createdDate)
    this.quotes.push(quote)
  }

  toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  deleteQuote(isDelete:any, index:any){
    if (isDelete) {
      let toDelete = confirm(`Are you sure you want to delete this quote`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  upVoteFn(index:number){
    this.quotes[index].upVote += 1;

  }

  downVoteFn(index:number){
    this.quotes[index].downVote += 1;

  }

  constructor() { }

  ngOnInit(): void {
  }

}
