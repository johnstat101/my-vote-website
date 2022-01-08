import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,'john Kimani','Never outshine your master',0,0,new Date()),
  ]
  
  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.createdDate = Date();
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

  constructor() { }

  ngOnInit(): void {
  }

}
