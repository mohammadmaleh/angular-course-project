import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: 'header.component.html',
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
