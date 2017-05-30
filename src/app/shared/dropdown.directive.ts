import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }



  constructor() { }

}


//problem, wenn ich mit der maus woanders klicke, dann klappt der dropdown nicht mehr ein.... idee: outsourcen nach Services!
