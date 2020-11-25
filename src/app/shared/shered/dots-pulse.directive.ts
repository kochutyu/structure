import {Directive, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, Renderer2, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appDotsPulse]'
})
export class DotsPulseDirective implements OnInit, OnChanges {

  @Input() input: any;
  @Output() onEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private el: ElementRef,
    private r: Renderer2
  ) {
  }

  ngOnInit(): void {
    console.log(this.input);
    this.createDots();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.r.setStyle(this.el.nativeElement, 'background', this.input % 2 ? 'red' : 'blue');
    // this.r.
  }

  public createDots(): void{
    const dot: HTMLElement = this.r.createElement('span');
    this.r.addClass(dot, 'dot');
    this.r.appendChild(this.el.nativeElement, dot);
  }

}
