import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss'],
  standalone: false
})
export class NewComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
