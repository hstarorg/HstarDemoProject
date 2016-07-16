import { Component, OnInit } from '@angular/core';

import {TestService} from './test.service';

@Component({
  moduleId: module.id,
  selector: 'my-app-home',
  template: 'name.component.html',
  providers: [TestService]
})
export class MyAppHomeComponent implements OnInit {
  constructor(private testService: TestService) {

  }

  ngOnInit() { }

}