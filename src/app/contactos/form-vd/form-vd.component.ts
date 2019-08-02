import { Component, OnInit } from '@angular/core';
import { Contacto } from 'src/app/models/contacto.model';
import { GRUPOS, SECTORES, AFICIONES } from 'src/app/models/maestro.datos';
import { Grupo } from 'src/app/models/grupo.models';
import { Sector } from 'src/app/models/sector.models';
import { Aficion } from 'src/app/models/aficiones.model';



@Component({
  selector: 'kc-form-vd',
  templateUrl: './form-vd.component.html',
  styleUrls: ['./form-vd.component.css']
})
export class FormVdComponent implements OnInit {
  contacto: Contacto;
  aGrupos:Array<Grupo>;
  aSectores:Array<Sector>;
  aAficiones:Array<Aficion>;

  constructor() { }

  ngOnInit() {
    this.contacto = new Contacto();
    this.aGrupos = GRUPOS;
    this.aSectores = SECTORES;
    this.aAficiones = AFICIONES;
  }
  changeAficiones(ev) {
    if (ev.target.checked) {
       this.contacto.aficiones.push(ev.target.id);
     } else {
       this.contacto.aficiones.splice(
         this.contacto.aficiones.indexOf(ev.target.id), 1
       );
     }
   }
   enviar() {
    console.log('Datos enviados');
  }
}
