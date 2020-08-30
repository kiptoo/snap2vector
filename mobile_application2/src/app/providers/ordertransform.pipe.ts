import { Pipe, PipeTransform } from '@angular/core';


@Pipe({ name: 'OrderTransform' })
export class OrderTransform implements PipeTransform {
  // transform(allHeroes: Flyer[]) {
  //   return allHeroes.filter(hero => hero.canFly);
  // }
    transform(order: string): string {
   // write your custom logic here
     if (order.length > 10) {
            var trucatedText = order.substr(0, 10) + '...';
      console.log(trucatedText);
      //this.imageName=trucatedText;
    //  return trucatedText;
      return `${trucatedText}`;
       }
       else{
        
        //return order;
        return `${order}`;
       }

    //let newValue = value.replace(/\?/g, 'N');
    //return `${newValue}`;
  }
}