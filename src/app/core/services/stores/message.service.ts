import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(private snackBar: MatSnackBar) {}

  showMessage(message: string, duration: number = 3000) {
    this.snackBar.open(message, 'Cerrar', {
      duration: duration
    });
  }

  showError(message: string, duration: number = 5000) {
    this.snackBar.open(message, 'Cerrar', {
      duration: duration,
      panelClass: 'error-snackbar'
    });
  }
}
