import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
public news_huay ;
  constructor(private http: HttpClient , private router : Router ) {

 this.get_news();

  }

  doRefresh(refresher){
    
    this.get_news();
 if(this.get_news){
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.target.complete() 
  }, 2000);
 }
   
    
  }
  goto_tab3(){
    this.router.navigate(['/tabs/tab3']);
  }

  goto_tabhome(){
    this.router.navigate(['/']);

  }

  get_news(){
    this.http.get('https://www.huayvip1688.com/get-news.php').subscribe((res)=>{
      var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.news_huay = data[0].value
     
    })
  }

  get_news_by_name(ev){

    var nh_name = ev.target.value ;
    this.http.get('https://www.huayvip1688.com/get-news-by-name.php?nh_name='+nh_name).subscribe((res)=>{
      var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.news_huay = data[0].value
   
      })


  }


  goto_detail(ev){
  var nh_id = ev.nh_id ;
    this.http.get('https://www.huayvip1688.com/set-view-news.php?nh_id='+nh_id).subscribe((res)=>{
   
      if(res == 'set view success'){
        this.get_news() ;
      }
      
      
    })

    this.router.navigate(['/tab3-detail' , ev]);

    
  }

  ngOnInit() {
    this.get_news() ;
  }

  // get-news-by-name.php


  
   
  

}
