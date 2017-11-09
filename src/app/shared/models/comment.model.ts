export class Comment 
{

public body = ''; 

constructor( data ?:{
	body ?: string,
	}) {
	Object.assign(this, data || {});
	}
}  