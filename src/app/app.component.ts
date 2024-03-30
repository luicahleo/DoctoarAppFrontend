import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'DoctorAppFrontend';

  usuarios: any;

  constructor(private http: HttpClient) {}


  ngOnInit(): void {

    // this.http.get('http://localhost:5238/api/Usuario').subscribe((response) => {
    //   this.usuarios = response;
    // });

    this.http.get('http://localhost:5238/api/Usuario').subscribe({
      next: (response) => {
        this.usuarios = response;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
      complete: () => {
        console.log('Completed');
      },
    });


  }
}
