import { UserService } from './../../services/user.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/services/rol.service';
import { Rol } from 'src/app/models/rol';

@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolService, UserService]

})
export class RolComponent implements OnInit {
  public token;
  public opcionBoton: string;
  public estado: string;
  constructor(private userService: UserService, private rolService: RolService) {
    this.token = this.userService.obtenerToken();
  }

  ngOnInit() {
    console.log('¡Compontent rol cargado!');
    this.listarRoles();
  }
  listarRoles() {
    this.rolService.listarRoles(this.token).subscribe(res => this.rolService.roles = res.roles as Rol[], error => console.log(<any>error));
  }
  guardarRol(form: NgForm) {
    this.rolService.guardarRol(this.token, form.value).subscribe(res => {
      this.listarRoles();
      form.reset();
    }, error => console.log(<any>error));
  }
  eliminarRol(idRol: string) {
    if (confirm('¿Estas seguro de eliminar este rol?')) {
      this.rolService.eliminarRol(this.token, idRol).subscribe(res => { this.listarRoles(); }, error => console.log(<any>error));
    }
  }
}
