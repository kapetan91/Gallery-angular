import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { skip } from 'rxjs/operator/skip';
import { take } from 'rxjs/operator/take';
import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  public title = 'galeries';
  public galleries: any[]=[];
  public counter = 0;
  public numberOfGalleries;
  private term = '';

  private skip = 0;
  private take = 10;

  constructor(
    private galleryService: GalleryService, 
    private auth: AuthService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() 
  {
    this.getGalleries();
  }

  clearView()
  {
    this.counter = 0;
    this.galleries = [];
  }

  public getGalleries(term = '')
  {
    if (term) {
      this.term = term;
    }

    let currentRoute = this.router.url;
    let id:number;

    if (currentRoute.includes('my-galleries')) {
      let user = this.authService.getUser();
      id = user.id;
    }

    if (currentRoute.includes('authors')) {
      id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    }

    this.galleryService.getGalleries(this.term, id)
      .subscribe(data => {
        this.galleries.push(...(data.galleries));
        this.numberOfGalleries = data.count;
        this.skip += this.take;
    });
  }

}