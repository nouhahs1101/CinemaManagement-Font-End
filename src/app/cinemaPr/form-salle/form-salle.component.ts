import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CinemaRabatService } from 'src/app/services/cinema-rabat.service';
import { MatDialogRef } from '@angular/material';
import { salle } from 'src/app/modules/salle';
import { cinema } from 'src/app/modules/cinema';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'wsa-form-salle',
  templateUrl: './form-salle.component.html',
  styleUrls: ['./form-salle.component.css']
})
export class FormSalleComponent implements OnInit {
  data=new FormGroup({
    name:new FormControl(),
    nombrePlace:new FormControl(),
    cinema:new FormControl(),
   
  });
  salle=new salle()
cinemas;

  constructor(public cinemaService:CinemaRabatService, public authService:AuthenticationService) { }

  ngOnInit() {
    this.cinemaService.getAllCinemaName().subscribe(data => {
      this.cinemas=data;
      console.log("data", this.cinemas);
    });   
  }
  onSubmit(){
    let cnema= new cinema()
    this.cinemaService.getCinemaById(this.data.value.cinema).subscribe(data => {
     cnema.id=data;
      console.log("data",  cnema.id);

    });  
    this.salle.cinema=cnema
    this.salle.name=this.data.value.name
    this.salle.nombrePlace=this.data.value.nombrePlace
    console.log("salle")
    console.log(this.salle)
    this.cinemaService.saveSalle(this.salle).toPromise()

  }
  onNoClick(): void {
    //this.dialogRef.close();
  }
}
