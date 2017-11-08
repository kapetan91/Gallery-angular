import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

	public searchT: string = '';

	@Output()
	searchEvent: EventEmitter<string>
	= new EventEmitter<string>();

	public search(){
		this.searchEvent.emit(this.searchT);
	}
  constructor() { }

  ngOnInit() {
  }

}
