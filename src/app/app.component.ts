import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'c-app';

    //Se inicializa el constructor de :dialog:MatDialog, es como un modal
  constructor(private _dialog:MatDialog) {}


  //Esta funcion utiliza lo que se incializo en el constructor y abre EmpAddEditComponent
 openAddEditEmpForm(){
  this._dialog.open(EmpAddEditComponent);
 }
}
