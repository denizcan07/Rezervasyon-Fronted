export class reservationDto {
    ad: string;
    soyad: string;
    bastarih: Date;
    bittarih: Date;
    telefon: string;
    tc: string;
  
    constructor(ad: string, soyad: string, bastarih: Date,bittarih: Date, telefon: string, tc: string) {
      this.ad = ad;
      this.soyad = soyad;
      this.bastarih = bastarih;
      this.bittarih = bittarih;
      this.telefon = telefon;
      this.tc = tc;
    }
  }
  