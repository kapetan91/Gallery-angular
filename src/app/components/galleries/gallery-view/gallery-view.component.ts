import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { GalleryService } from '../../../service/gallery.service';
import { Gallery } from '../../../shared/models/gallery.model';


@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {
	
	public gallery = new Gallery(); 
  public user = {};

  constructor(
  	private galleryService: GalleryService, 
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {

  // let id = parseInt(this.route.snapshot.paramMap.get('id'));
  //   this.galleryService.getGallery(id)
  //     .subscribe(g => {
  //       this.gallery = g;
  //       let arr = g.images;
  //       arr.forEach(it => console.log(it.image_url));

  //   });

  //   this.user = this.authService.getUser();

  }

}
