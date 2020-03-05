import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController} from '@ionic/angular';
import { Router } from '@angular/router';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-tab-home',
  templateUrl: './tab-home.page.html',
  styleUrls: ['./tab-home.page.scss'],
  
})

export class TabHomePage implements OnInit {

public banner_data = 'https://www.huayvip1688.com/assets/img-banner/img-original.png'
public data_baihuay ;
public data_news ;
public data_stat ;


slideOpts = {
  initialSlide: 0,
  speed: 500
};
  constructor(private http: HttpClient , private router: Router , private statusBar: StatusBar) {

    this.get_banner();
    this.get_data_baihuay();
    this.get_news_huay();
    this. get_stat_huay();
    this.initializeApp();
  }
  

  doRefresh(refresher){
    
    this.get_banner();
    this.get_data_baihuay();
    this.get_news_huay();
    this. get_stat_huay();
 if(this.get_banner && this.get_data_baihuay && this.get_news_huay && this.get_stat_huay){
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.target.complete() 
  }, 2000);
 }
   
    
  }

  

  initializeApp(){
    this.statusBar.show();
    
    this.statusBar.backgroundColorByHexString('#ffffff');
   
  }

  get_banner(){
    this.http.get('https://www.huayvip1688.com/get_banner_active.php').subscribe(res =>{
     
       var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.banner_data = data[0].value[0].image_url ;
     
       
       
    })
  }

  goto_tab1(){
    this.router.navigate(['/tabs/tab1']) ;
  }
  goto_tab2(){
    this.router.navigate(['/tabs/tab2']) ;
  }

  goto_tab3(){
    this.router.navigate(['/tabs/tab3']) ;
  }

  goto_tab4(){
    this.router.navigate(['/tabs/tab4']) ;
  }



  
  get_data_baihuay(){
    this.http.get('https://www.huayvip1688.com/get_data_baihuay-by-number.php?number=5').subscribe(res =>{
  
       var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.data_baihuay = data[0].value

       
       
    })
   }



  ngOnInit() {
  }

  slidesDidLoad(slides) {
    slides.startAutoplay();
  }

  get_news_huay(){
    this.http.get('https://www.huayvip1688.com/get-news.php').subscribe(res =>{
    
       var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.data_news = data[0].value
  
       
       
    })
  }

  get_stat_huay(){
    this.http.get('https://www.huayvip1688.com/get-stat-huay.php').subscribe(res =>{
 
       var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.data_stat = data[0].value[0]
    
       
       
    })
  }

}
