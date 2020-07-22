import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  toggled = false;
  _hasBackgroundImage = true;
  
  menus = [
   
    {
      title: 'Villes',
    
    
      active: false,
      type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'badge-warning'
      },
      submenus: [
        {
          title: 'Rabat', 
          linkk:'cinemaRabat',
          icon: 'place',
          id:1,
          
        
          
          badge: {
            text: 'Pro ',
            class: 'badge-success',
           
          }
        },
        {
          title: 'Casablanca ',
         linkk:'cinemaRabat',
          icon: 'place',
          id:1,
          
        },
        {
          title: 'Oujda ',
          linkk:'cinemaRabat',
          icon: 'place',
          id:1,
          
        },
        {
          title: 'Marrakech ',
         linkk:'cinemaRabat',
          icon: 'place',
          id:1,
          
        },
        {
          title: 'Tanger ',
          linkk:'cinemaRabat',
          icon: 'place',
          id:1,
          
        },
        {
          title: 'Fès ',
         linkk:'cinemaRabat',
          icon: 'place',
          id:1,
          
        },
        {
          title: 'Méknes ',
         linkk:'cinemaRabat',
          icon: 'place',
          id:1,
          
        },
       
      ]
    },
    {
      title: 'Salles',
      icon: 'supervisor_account',
      link:'salle',
      active: true,
      type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'badge-warning'
     }},
     
     {
      title: 'Projections',
      icon: 'supervisor_account',
  
      active: true,
      type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'badge-warning'
     }},
     
     {
      title: 'Cinémas',
      icon: 'laptop',
      link:'allCinema',
      active: true,
      type: 'dropdown',
      badge: {
        text: 'New ',
        class: 'badge-warning'
     }},
  
  
    
  ];
  constructor() { 
   
  }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }
  getSubmenuList(){
  
  }
  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
  
  
}
