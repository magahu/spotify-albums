import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {

  searchField: string = '';
  @Output() sendWords = new EventEmitter<string>();

  constructor() {}

   sendSearchField(){
    this.sendWords.emit(this.searchField)
  }

  ngOnInit(): void {
  }



}
