import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { salle } from 'src/app/modules/salle';
import { CinemaRabatService } from 'src/app/services/cinema-rabat.service';
import { FormSalleComponent } from '../form-salle/form-salle.component';
import { Router } from '@angular/router';

@Component({
  selector: 'wsa-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  constructor(public cinemaService:CinemaRabatService,public dialog: MatDialog,private router:Router) { }
  displayedColumns = ['nom','Nombre de places','Cinema','action'];
  dataSource :MatTableDataSource<salle>;

  ngOnInit() {
    this.getSalles()
  }
getSalles(){
  this.cinemaService.getAllSalles().subscribe(data => {
    this.dataSource=data;
    console.log("data",this.dataSource);
   
 });
}
deleteCinema(id){
  console.log(id)
  this.cinemaService.deleteSalle(id)
  }
openDialog(): void {
//  let dialogRef = this.dialog.open(FormSalleComponent, {
    this.router.navigateByUrl("/formSalle")
   // data: 'Add Post'
  //});
}
}
