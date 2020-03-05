import { Component , OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
public famous_number_data ;
public random_number ;
  constructor(private http: HttpClient , private router : Router  , private activatedRoute: ActivatedRoute ) {

    this.get_famous_number();

  }

  doRefresh(refresher){
    
    this.get_famous_number();
 if(this.get_famous_number){
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.target.complete() 
  }, 2000);
 }
   
    
  }


  goto_tabhome(){
    this.router.navigate(['/']);
  }

  get_famous_number(){
    this.http.get('https://www.huayvip1688.com/get-famous-number.php').subscribe((res)=>{
      var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.famous_number_data = data[0].value
       
    })
  }

  get_famous_number_by_date(ev){
    var fn_date = ev.target.value ;
    
    if(fn_date != ''){
      this.http.get('https://www.huayvip1688.com/get-famous-number-by-date.php?fn_date="'+fn_date+'"' ).subscribe((res)=>{
        var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
         this.famous_number_data = data[0].value
         
      })
    }else{
      this. get_famous_number();
    }
    
  }

  get_famous_number_by_name(ev){
    let data ={
      fn_name : ev.target.value
    }
   

    
    
    this.http.get('https://www.huayvip1688.com/get-famous-number-by-name.php?fn_name='+data.fn_name ).subscribe((res)=>{
      var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
       this.famous_number_data = data[0].value
       
    })
  }

  goto_detail(ev){
    this.router.navigate(['/tab2-detail' , ev]);
  }

 
  ngOnInit() {
   
    // this.random_number= this.activatedRoute.snapshot.paramMap.get('random_number') ;
    // if(this.random_number != null){
    //   var num1= this.random_number[0]+this.random_number[1];
    //   var num2 = this.random_number[1]+this.random_number[2]
    //   var num3 = this.random_number
    //   console.log(num1,num2);
    //   this.http.get('https://www.huayvip1688.com/get-famous-number-by-number.php?number1='+num1+'&number2='+num2+'&number3='+num3 ).subscribe((res)=>{
    //     var data = Object.keys(res).map(key => ({type: key, value: res[key]})); ;
    //      this.famous_number_data = data[0].value
    //      console.log(this.famous_number_data);
    //   })

    // }
   
    
   
    
  }

}
