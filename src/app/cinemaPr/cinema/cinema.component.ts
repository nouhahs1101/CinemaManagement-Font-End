import { Component, OnInit } from '@angular/core';
import { CinemaRabatService } from 'src/app/services/cinema-rabat.service';
import { salle } from 'src/app/modules/salle';
import { MatDialog } from '@angular/material';
import { FormCinemaComponent } from 'src/app/cinemaPr/form-cinema/form-cinema.component';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'wsa-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {
  projections: any;
  cities: any;

  constructor(public cinemaService:CinemaRabatService,public dialog: MatDialog,public authService:AuthenticationService) { }
cinemas:any[];
salles:salle[];

url;
currentCinema;
on;

ngOnInit() {
//this.on=this.ngOnInit()
this.getCinemas();
this.cinemaService.getCities().subscribe(data => {
  this.cities=data;
  console.log("data",this.cities);
 
});

this.cinemaService.getCinemas(this.cinemaService.id).subscribe(data => {
 // this.ngOnInit()
   this.cinemas=data;
   console.log("data",this.cinemas);
  
});
//this.getSalles();
console.log("data",this.cinemas);
}

getCinemas(){
  this.cinemaService.getCinemas(this.cinemaService.id).subscribe(data => {
  this.ngOnInit()
    this.cinemas=data;
    console.log("data",this.cinemas);
   
 });
 }


 getSalles(cinema){
  let  i=1;
   this.currentCinema=cinema
  this.cinemaService.getSalles(cinema).subscribe(data => {
    this.salles=data;
    this.salles.forEach(element => {
      this.cinemaService.getProjection(element.name).subscribe(data => {
        element.projections=data;
        element.image="assets/images/anna"+i+".jpg"
        i=i+1
        console.log("data",  element.projections);
       
     });
   });
});
 }

 openDialog(): void {
  let dialogRef = this.dialog.open(FormCinemaComponent, {
    width: '700px',
    height:'500px' ,
    data: 'Add Post'
  });
  // dialogRef.componentInstance. subscribe((result) => {
  //   // this.dupService.addPost(result.data);
  //   // this.dataSource = new PostDataSource(this.dupService);
  //  });
}
}
