import { Component, OnInit } from '@angular/core';
import { CinemaRabatService } from 'src/app/services/cinema-rabat.service';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { cinema } from 'src/app/modules/cinema';

@Component({
  selector: 'wsa-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css']
})
export class CinemasComponent implements OnInit {

  constructor(public cinemaService:CinemaRabatService,public dialog: MatDialog,private router:Router) { }
  displayedColumns = ['nom','longitude','latitude','altitude','nombreSalles','ville','action'];
  dataSource :MatTableDataSource<cinema>;

  ngOnInit() {
    this.getSalles()
  }
getSalles(){
  this.cinemaService.getAllCinemas().subscribe(data => {
    this.dataSource=data;
    console.log("data",this.dataSource);
   
 });
}
delete(id){
console.log(id)
this.cinemaService.deleteCinema(id)
}
openDialog(): void {

    this.router.navigateByUrl("/formSalle")
   // data: 'Add Post'
  //});
}
}

