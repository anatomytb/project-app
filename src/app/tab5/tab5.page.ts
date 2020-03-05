import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

// import * as $ from 'jquery'
declare var $ ;
@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page implements OnInit {
public image_lucky ;

public r_num1 ;
public r_num2 ;
public r_num3 ;
public random_number ;


  constructor(private http: HttpClient , private router : Router ,private activatedRoute: ActivatedRoute , public navCtrl: NavController) { 

    this.get_image_lucky();

   this.ngOnInit();
   

  }

  doRefresh(refresher){
    this.navCtrl.navigateRoot('/tabs/tab5') ;
    this.get_image_lucky();
   
 
 if(this.get_image_lucky ){
  setTimeout(() => {
  
    refresher.target.complete() 
  }, 2000);
 }
   
    
  }

  goto_tab2(){
    this.router.navigate(['/tabs/tab2']);
  }

  random_num(){
    
    setTimeout(() => { this.r_num1 = Math.floor(Math.random() * 10); }, 700);
    setTimeout(() => {  this.r_num2 = Math.floor(Math.random() * 10);}, 1400);
    setTimeout(() => {  this.r_num3 = Math.floor(Math.random() * 10); }, 3800);
  }



  goto_tabhome(){
    this.router.navigate(['/']);

  }


  get_image_lucky(){
    this.http.get('https://www.huayvip1688.com/get-image-lucky.php').subscribe((res)=>{
    
      
      
       this.image_lucky = res;
     
    })
  }

  ngOnInit() {
    var value_set =  this.activatedRoute.snapshot.paramMap.get('set') ;
  
    
  }

  input_number(ev){

 this.random_number = ev.target.value ;
 
  }

  goto_detail(){
    let data = {
      random_number :  this.random_number
    }
    this.router.navigate(['/tab5-detail' , data]);
  }

}
 