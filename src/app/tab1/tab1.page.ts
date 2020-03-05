import { Component  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import * as $ from 'jquery'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


public data_baihuay ;
public grid_col = 12 ;
public img_h = '300px' ;
public img_w = '100%' ;
public font_subtitle = '15px' ;
public font_title = '20px' ;

public display_icon_grid2 = 'none' ;
public display_icon_grid1 = 'unset' ;


  constructor(private http: HttpClient , private router : Router ) {
  

this.get_data_baihuay();
  }

  doRefresh(refresher){
    
    this.get_data_baihuay();
 if(this.get_data_baihuay){
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.target.complete() 
  }, 2000);
 }
   
    
  }

  change_grid1(){ 
 
      this.grid_col = 6 ;
    
      this.img_h = '10rem';
      this.img_w = 'auto'; 
      this.font_subtitle = '12px';
      this.font_title = '15px';
 this.display_icon_grid2  = 'unset' ;
 this.display_icon_grid1  = 'none' ;


  }

  change_grid2(){
    this.grid_col = 12 ;
    
    this.img_h = '300px';
    this.img_w = 'auto'; 
    this.font_subtitle = '15px';
    this.font_title = '20px';
    this.display_icon_grid2  = 'none' ;
    this.display_icon_grid1  = 'unset' ;


  }
  get_data_baihuay(){
    this.http.get('https://www.huayvip1688.com/get_data_baihuay.php').subscribe(res =>{
     
       var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.data_baihuay = data[0].value
  
       
       
    })
   }

   get_data_baihuay_by_name(ev){

    
    var bh_name = ev.target.value
 

   
   this.http.get('https://www.huayvip1688.com/get_data_baihuay_by_name.php?bh_name='+bh_name).subscribe(res =>{
    
      var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
      this.data_baihuay = data[0].value
   
      
      
   })
  }

  
  get_data_baihuay_by_date(ev){

   
    var bh_date = ev.target.value


    if(bh_date != ''){
      this.http.get('https://www.huayvip1688.com/get_data_baihuay_by_date.php?bh_date="'+bh_date+'"').subscribe(res =>{
    
         var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
         this.data_baihuay = data[0].value
      
         
         
      })
    }else{
      this.get_data_baihuay();
    }
    
   
  }

  goto_tabhome(){
    this.router.navigate(['/']);
  }

  goto_detail(ev){
    this.router.navigate(['/tab1-detail' , ev]);
  }

  swipeEvent(ev) {
    console.log(ev);
    
}

 




}
