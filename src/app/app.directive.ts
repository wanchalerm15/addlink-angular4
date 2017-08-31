import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[myDirective]',
    inputs: ['myDirective']
})
export class AppDirective {

    constructor(private elem: ElementRef) { }

    myDirective: string;

    @HostBinding('style.color') color;

    @HostListener('mouseover')
    onmouseover() {
        this.color = this.myDirective;
    }

    @HostListener('mouseout')
    onmouseout() {
        this.color = 'black';
    }

}