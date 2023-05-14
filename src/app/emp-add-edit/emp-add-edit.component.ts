import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  //Se incializa un FromGroup
  empForm:FormGroup;

  educacion: string[] = [
    'Nivel 1',
    'Nivel 2',
    'Nivel 3',
    'Nivel 4',
  ]
  //Agregamos al constructor el formbuilder
  constructor(private _fb: FormBuilder) { 
    //creamos las v para los datos del form
    //en el html debe estan el formControlName
    this.empForm = this._fb.group({
      nombres:'',
      apellidos:'',
      email:'',
      dob:'',
      sexo:'',
      educacion:'',
      compania:'',
      experiencia:'',
      recursos:'',

    })
  }
  //Funcion para ver los datos en consola xde
onFormSubmit(){
  if(this.empForm.valid){
    console.log(this.empForm.value)
  }
}
  ngOnInit(): void {
  }

}
