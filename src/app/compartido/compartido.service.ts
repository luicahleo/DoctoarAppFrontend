import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sesion } from '../usuario/Interfaces/sesion';

@Injectable({
  providedIn: 'root',
})
export class CompartidoService {
  constructor(private _snackBar: MatSnackBar) {}

  mostrarAlerta(mensaje: string, tipo: string): void {
    this._snackBar.open(mensaje, tipo, {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000,
    });
  }

  guardarSesion(sesion: Sesion): void {
    localStorage.setItem('usuarioSesion', JSON.stringify(sesion));
  }

  obtenerSesion(): Sesion {
    const sesionString = localStorage.getItem('usuarioSesion');

    const usuarioToken: Sesion = JSON.parse(sesionString!);
    return usuarioToken;
  }

  eliminarSesion(): void {
    localStorage.removeItem('usuarioSesion');
  }
}
