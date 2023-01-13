import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  input!:any[];

  constructor(private data:DataService){}

  ngOnInit(): void {
    this.data.getAll().subscribe( data => this.input = data)
  }
}
