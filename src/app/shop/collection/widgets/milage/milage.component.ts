import { Component, OnInit, Output, Input, EventEmitter, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-milage',
  templateUrl: './milage.component.html',
  styleUrls: ['./milage.component.scss']
})
export class MilageComponent implements OnInit {
// Using Output EventEmitter
@Output() milageFilter : EventEmitter<any> = new EventEmitter<any>();
	
// define min, max and range
@Input() min: number;
@Input() max: number;

public collapse: boolean = false;
public isBrowser: boolean = false;

public milage: any;

options: Options = {
  floor: 0,
  ceil: 100000
};

constructor(@Inject(PLATFORM_ID) private platformId: Object) { 
  if (isPlatformBrowser(this.platformId)) {
    this.isBrowser = true; // for ssr
  }
}

ngOnInit(): void {
  this.options.ceil = this.max;
 }

// Range Changed
appliedFilter(event: any) {
  debugger
  // this.options.floor = this.min;
  // this.options.ceil = this.max;
  this.milage = { minMilage: event.value, maxMilage: event.highValue };
  this.milageFilter.emit(this.milage);
}

}
