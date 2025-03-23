import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA,NgModule} from '@angular/core';
import { HeaderComponent } from 'src/app/companents/header/header.component';
import { reservationDto } from './DtoList/reservastionDto';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  reservationList : reservationDto[] = [];
  constructor(    private http: HttpClient
    
) { }
  ngOnInit(): void {
    this.getReservations();
    // this.reservationList = this.rezervasyonListesi;
  }
  rezervasyonListesi: reservationDto[] = [
    new reservationDto('Ahmet', 'Yılmaz', new Date('2024-03-25'), new Date('2024-03-26'), '555-123-4567', '12345678901'),
    new reservationDto('Deniz', 'Kaya', new Date('2024-03-26'), new Date('2024-03-26'), '555-987-6543', '98765432100'),
    new reservationDto('Zeynep', 'Demir', new Date('2024-03-27'), new Date('2024-03-26'), '555-456-7890', '45678912345')
  ];
  getReservations() {

    this.http.get<any[]>('http://localhost:5020/api/Reservations/GetReservations').subscribe(
      (response) => {
        debugger;
        this.reservationList = response; 
      },
      (error) => {
        debugger;
        console.error('Error fetching reservations:', error);
      }
    );
  }

}

