import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	
	public title = 'All galeries';
  public galleries: any[]=[];
  public counter = 0;
  public numberGalleries;
  private term = '';

  private skip = 0;
  private take = 10;


  constructor() { }

  ngOnInit() {
  }

}
