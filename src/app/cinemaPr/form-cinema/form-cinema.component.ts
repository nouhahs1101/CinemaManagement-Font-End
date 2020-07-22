import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CinemaRabatService } from 'src/app/services/cinema-rabat.service';
import { ville } from 'src/app/modules/ville';
import { cinema } from 'src/app/modules/cinema';
import { MatDialogRef, MatDialog } from '@angular/material';
import { salle } from 'src/app/modules/salle';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'wsa-form-cinema',
  templateUrl: './form-cinema.component.html',
  styleUrls: ['./form-cinema.component.css']
})
export class FormCinemaComponent implements OnInit {
   s= new salle()
  cinema= new cinema()
  city=new ville()
  salles:any[]=[]
  latitude;
  data=new FormGroup({
    name:new FormControl(),
    
    longitude:new FormControl(),
    latitude:new FormControl(),
    altitude:new FormControl(),
    ville:new FormControl(),
    nombreSalles:new FormControl(),
  
  });
  constructor(public cinemaService:CinemaRabatService, public dialogRef: MatDialogRef<FormCinemaComponent>, public authService:AuthenticationService) { }
cities;
  ngOnInit() {
    this.cinemaService.getCities().subscribe(data => {
      this.cities=data;
      console.log("data",this.cities);
     
   });
  }
  onSubmit(){
this.cinemaService.getVilleByName(this.data.value.ville).subscribe(data => {
  this.city.id=data;
  console.log("data", this.city.id);
});   
this.cinema.altitude=this.data.value.altitude
this.cinema.latitude=this.data.value.latitude
this.cinema.longitude=this.data.value.longitude
this.cinema.name=this.data.value.name
this.cinema.ville=this.city
this.cinema.nombreSalles=44

this.s.id=4
//this.salles.push(this.s)
console.log(this.salles)
//this.cinema.salle=this.salles
console.log(this.cinema)
this.cinemaService.saveCinema(this.cinema).toPromise()

  }



  onNoClick(): void {
    this.dialogRef.close();
  }
}
