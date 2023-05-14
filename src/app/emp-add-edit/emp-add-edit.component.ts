import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {

  educacion: string[] = [
    'Nivel 1',
    'Nivel 2',
    'Nivel 3',
    'Nivel 4',
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
