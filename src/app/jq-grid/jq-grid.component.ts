import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-jq-grid',
  templateUrl: './jq-grid.component.html',
  styleUrls: ['./jq-grid.component.css']
})
export class JqGridComponent implements OnInit {

  constructor(private _dataService: DataService) { }

  ngOnInit() {
  }

}
