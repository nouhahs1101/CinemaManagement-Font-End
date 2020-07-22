import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cinema } from 'src/app/modules/cinema';
import { salle } from 'src/app/modules/salle';

@Injectable({
  providedIn: 'root'
})
export class CinemaRabatService {
  id;
  constructor(private http: HttpClient) { }
  getCinemas(cinema:string){
  
    return this.http.get<any>(`http://localhost:8080/cinemas/`+cinema);

  }

  getSalles(cinema){
  
    return this.http.get<any>(`http://localhost:8080/salles/`+cinema);

  }
  getCities(){
  
    return this.http.get<any>(`http://localhost:8080/cities`);

  }

  getProjection(name:string){
      return this.http.get<any>(`http://localhost:8080/projection/`+name);
}
 
  getVilleByName(name:string){
   return this.http.get<any>(`http://localhost:8080/villeNom/`+name);
}
saveCinema(cinema:cinema){
  console.log(cinema)
  return this.http.post(`http://localhost:8080/saveCinema/`,cinema);

}
getCinemaByName(name:string){
  this.id=name;
  console.log("emploiservice",this.id);
  return this.id;

};
getAllSalles(){
  return this.http.get<any>('http://localhost:8080/allSalles/');
}

getAllCinemaName(){
  return this.http.get<any>('http://localhost:8080/allCinema/');
}
getCinemaById(name:string){
  return this.http.get<any>(`http://localhost:8080/cinemaNom/`+name);
}
saveSalle(salle){
  console.log(salle)
  return this.http.post('http://localhost:8080/saveSalle',salle);
}
getAllCinemas(){
  return this.http.get<any>('http://localhost:8080/cinemas/');
}

  deleteCinema(id){
    console.log(id)
   
      this.http.delete('http://localhost:8080/deleteCinema/'+id)
  
    }
   
    deleteSalle(id){
      console.log(id)
     
        this.http.delete('http://localhost:8080/deleteSalle/'+id)
    
      }
     
}
