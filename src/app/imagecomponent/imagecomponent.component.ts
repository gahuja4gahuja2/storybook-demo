import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagecomponent',
  templateUrl: './imagecomponent.component.html',
  styleUrls: ['./imagecomponent.component.scss']
})
export class ImagecomponentComponent implements OnInit {

  @Input()
  imgSrc: string = '/assets/DET_logo_3.png';

  @Input()
  altTxt?: string = 'DET Logo Image';

  @Input()
  figCaptionTxt?: string = 'DET is Deepen Engineering Talent initiative';

  @Input()
  imgOpacity?: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
