import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
})
export class LinkComponent implements OnInit {
  @Input()
  color: 'primary' | 'secondary' = 'primary';
  @Input()
  href: string;
  @Input()
  target?: '_self' | '_blank' | '_parent' | '_top' = '_self';

  public get classes(): Array<string> {
    return ['link', `${this.color}-link`];
  }

  constructor() {}

  ngOnInit(): void {}
}
