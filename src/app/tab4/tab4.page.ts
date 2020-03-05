import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
public stat_huay ;
public col_color = '#DCDCDC' ;
public month1 = '';
public month2 = '';
  constructor(private http: HttpClient , private router : Router ) { 

    this.get_stat_huay();

    this.get_name_month();
  
    
    
    
  }

  doRefresh(refresher){
    
    this.get_stat_huay();
    this.get_name_month();
 
 if(this.get_stat_huay && this.get_name_month){
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.target.complete() 
  }, 2000);
 }
   
    
  }

 
 
  goto_tabhome(){
    this.router.navigate(['/']);

  }

  get_stat_huay_by_month(){
    var date = new Date() ;
    var mount_n = date.getMonth()+1 ;
    var mount = '0'+mount_n

    
    this.http.get('https://www.huayvip1688.com/get-stat-huay-by-month.php?month='+mount).subscribe((res)=>{
      var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.stat_huay = data[0].value
      
    })
  }
  get_stat_huay_by_month2(){
    var date = new Date() ;
    var mount_n = date.getMonth()+2 ;
    var mount = '0'+mount_n
    
    
    this.http.get('https://www.huayvip1688.com/get-stat-huay-by-month.php?month='+mount).subscribe((res)=>{
      var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.stat_huay = data[0].value
      
    })
  }


  get_stat_huay(){
    this.http.get('https://www.huayvip1688.com/get-stat-huay.php').subscribe((res)=>{
      var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.stat_huay = data[0].value
       
    })
  }

  get_name_month(){
    var date = new Date();
    var mount1 = date.getMonth()+1 ;
    

    switch(mount1){
      case 1 : 
      this.month1 = "มกราคม" ;
      this.month2 = "กุมภาพันธ์" ;
      break;
      case 2 :
        this.month1 = "กุมภาพันธ์  " ;
        this.month2 = "มีนาคม" ;
        break ;
        case 3 :
          this.month1 = "มีนาคม" ;
          this.month2 = "เมษายน " ;
          break ;
          case 4 :
            this.month1 = "เมษายน " ;
            this.month2 = "พฤษภาคม" ;
            break ;
            case 5 :
              this.month1 = "พฤษภาคม" ;
              this.month2 = "มิถุนายน " ;
              break ;
              case 6 :
                this.month1 = "มิถุนายน " ;
                this.month2 = "กรกฎาคม" ;
                break ;
                case 7 :
                  this.month1 = "กรกฎาคม" ;
                  this.month2 = "สิงหาคม" ;
                  break ;
                  case 8 :
                    this.month1 = "สิงหาคม" ;
                    this.month2 = "กันยายน " ;
                    break ;
                    case 9 :
                      this.month1 = "กันยายน " ;
                      this.month2 = "ตุลาคม" ;
                      break ;
                      case 10 :
                        this.month1 = "ตุลาคม" ;
                        this.month2 = "พฤศจิกายน " ;
                        break ;
                        case 11 :
                          this.month1 = "พฤศจิกายน " ;
                          this.month2 = "ธันวาคม" ;
                          break ;
                          case 12 :
                            this.month1 = "ธันวาคม" ;
                            this.month2 = "มกราคม" ;
                            break ;
    }

  }

  ngOnInit() {
  }
 
}
