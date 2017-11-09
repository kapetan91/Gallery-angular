import { Image } from './image.model';

export class Gallery {
	constructor(
		public id?: number,
	    public name?: string,
	    public description?: string,
	    public images = [new Image()]
  	) {}
}