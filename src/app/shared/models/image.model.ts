export class Image 
{
  public imageUrl = ''; 

  constructor( data ?:{
    imageUrl ?: string,
  }) {
    Object.assign(this, data || {});
  }  
}