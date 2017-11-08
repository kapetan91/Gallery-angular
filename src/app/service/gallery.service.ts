import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gallery } from '../shared/models/gallery.model';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class GalleryService {


	private galleries: Gallery[] = [];	
	
	constructor(private http: HttpClient, private authService: AuthService) { }

	public getGallery()
	{
		return new Observable((o: Observer<any>) => {
			this.http.get('http://localhost:8000/galleries', {
        		headers: this.authService.getRequestHeaders(),
        	})
        	.subscribe(
				(galleries: any[]) => {
					galleries.forEach(g => {
						this.galleries.push(new Gallery(g.id, g.name, g.description));
					});
					o.next(this.galleries);
					return o.complete();
					}
			);
		});
	}

	public addGallerie(gallerie: Gallery)
	{
		return new Observable((o: Observer<any>) => {
			this.http.post('http://localhost:8000/api/galleries', {
				'name': gallerie.name,
				'description': gallerie.description				
			},
			{
				headers: this.authService.getRequestHeaders(),
			})
			.subscribe(
				(g: any) => {
					let newG = new Gallery(g.id, g.name, g.description);
					this.galleries.push(newG);
					o.next(newG);
					return o.complete();
				}
			);
		});
	}

	public removeGallerie(gallerie: Gallery)
	{
		return new Observable ((o: Observer<any>) => {
			this.http.delete('http://localhost:8000/api/galleries/' + gallerie.id,
			{
				headers: this.authService.getRequestHeaders(),
			})
			.subscribe(
				() => {
					const index = this.galleries.indexOf(gallerie);
					this.galleries.splice(index, 1);

					o.next(index);
					return o.complete();
				}
			);
		});
	}

	public getGallerieById(id: number)
	{
		return new Observable((o: Observer<any>) => {
			this.http.get('http://localhost:8000/api/galleries/' + id,
			{
				headers: this.authService.getRequestHeaders(),
			})
			.subscribe(
				(gallerie: any) => {
					o.next(new Gallery(gallerie.id, gallerie.name, gallerie.description));
					return o.complete();
				})
		})
	}
}