import { Component, OnInit} from "@angular/core";


@Component({
  selector: "app-inicio",
  templateUrl: "./inicio.component.html",
  styleUrls: ["./inicio.component.css"]
})
export class InicioComponent implements OnInit {
  public titulo: string;

  constructor() {
// tslint:disable-next-line: quotemark
    this.titulo = "Sistema Automatizado de control y Apertura de puertas";
  }

  ngOnInit() {
// tslint:disable-next-line: quotemark
    console.log("!Componente inicio cargado¡");
  }
}
