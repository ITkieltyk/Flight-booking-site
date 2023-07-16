import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  wstawka: any = '';

  constructor(private bookingService: BookingService) {}

  ngOnInit(): void {
    this.bookingService.daneServer().subscribe({
      next: (dane: any) => {
        console.log('Dane z servera', dane.dane);
      },
    });
  }
}
