import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab5-detail',
  templateUrl: './tab5-detail.page.html',
  styleUrls: ['./tab5-detail.page.scss'],
})
export class Tab5DetailPage implements OnInit {
public random_number ;
public famous_number_data ;
  constructor(private http: HttpClient , private router : Router  , private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {

    this.random_number= this.activatedRoute.snapshot.paramMap.get('random_number') ;
    if(this.random_number != null){
      var num1= this.random_number[0]+this.random_number[1];
      var num2 = this.random_number[1]+this.random_number[2]
      var num3 = this.random_number
  
      this.http.get('https://www.huayvip1688.com/get-famous-number-by-number.php?number1='+num1+'&number2='+num2+'&number3='+num3 ).subscribe((res)=>{
        var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
         this.famous_number_data = data[0].value
         
      })

    }
   
    
    

  }

  goto_detail(x){
    this.router.navigate(['/tab2-detail',x]);
  }

  goto_tab5(){
    this.router.navigate(['/tabs/tab5']);
  }

}
