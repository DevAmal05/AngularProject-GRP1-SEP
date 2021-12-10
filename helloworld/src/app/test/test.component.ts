import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  items: MenuItem[];

  activeItem: MenuItem;

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home'},
      {label: 'Login', icon: 'pi pi-fw pi-calendar'},
      {label: 'Register', icon: 'pi pi-fw pi-pencil'},
      {label: 'Contactez nous', icon: 'pi pi-fw pi-file'},
     
  ];

  this.activeItem = this.items[0];

  }

}
