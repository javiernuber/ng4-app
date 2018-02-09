import { Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: 'li[contar-clicks]'
})
export class ContarClicksDirective {
  clickN = 0;
  constructor() { }
  @HostBinding('style.opacity') opacity: number = .1;
  @HostListener('click', ['$event.target']) onClick(btn){
    console.log('a', btn, 'Número:' + this.clickN++);
    this.opacity += .1;
  }
}
