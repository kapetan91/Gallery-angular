import { Image } from './image.model';
import { User } from './user.model';

export class Gallery {
	constructor(
		public id?: number,
	    public name?: string,
	    public description?: string,
	    public images = [new Image()],
	    public user = [new User()]
  	) {}
}