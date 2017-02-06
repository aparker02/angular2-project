import { Component, OnInit } from '@angular/core';
import { IData } from '../data/data';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data: IData[];
  errorMessage: string;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getData()
        .subscribe(data => this.data = data,
                  error => this.errorMessage = <any>error);
    console.log(this.data);
  }

}
