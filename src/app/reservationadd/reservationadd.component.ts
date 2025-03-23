import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { reservationDto } from '../pages/home/DtoList/reservastionDto';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservationadd',
  templateUrl: './reservationadd.component.html',
  styleUrls: ['./reservationadd.component.scss']
})
export class ReservationaddComponent implements OnInit {
  reservationDto: reservationDto = { // reservation nesnesini başlat
    ad: '',
    soyad: '',
    bastarih: new Date(),
    bittarih: new Date(),
    telefon: '',
    tc: ''
  };
  reservationForm!: FormGroup;
  constructor(private fb: FormBuilder,
    private http: HttpClient, private router: Router
  ) { }

  ngOnInit(): void {
    this.reservationForm = this.fb.group({
      ad: ['', Validators.required],
      soyad: ['', Validators.required],
      telefon: ['', [Validators.required, Validators.pattern('[0-9]{10}')]], 
      bastarih: [new Date(), Validators.required],
      bittarih: [new Date(), Validators.required],
      tc: ['', [Validators.required, Validators.pattern('[0-9]{11}')]] 
    });
  }
  reservastionAddClick() {
    debugger;
    this.http.post('http://localhost:5020/api/Reservations/PostReservation', this.reservationDto)
      .subscribe(response => {
        console.log('Reservation added:', response);
        this.router.navigate(['/']);
      });
  }

}
