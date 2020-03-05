import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tab3-detail',
  templateUrl: './tab3-detail.page.html',
  styleUrls: ['./tab3-detail.page.scss'],
})
export class Tab3DetailPage implements OnInit {
 public  nh_name;
 public nh_content1;
 public nh_content2;
 public nh_content3;
 public nh_content4;
 public nh_img1;
 public nh_img2;
 public nh_img3;
 public nh_img4;
 public nh_date;
 public nh_view;
 public nh_cr_name;
 public nh_cr_link;

  constructor(private activatedRoute: ActivatedRoute , private router : Router  ,private http: HttpClient ) { 

    
  }
  goto_tab3(){
    this.router.navigate(['/tabs/tab3']);
  }



  ngOnInit() {
    this.nh_name= this.activatedRoute.snapshot.paramMap.get('nh_name') ;
    this.nh_content1= this.activatedRoute.snapshot.paramMap.get('nh_content1') ;
    this.nh_content2= this.activatedRoute.snapshot.paramMap.get('nh_content2') ;
    this.nh_content3= this.activatedRoute.snapshot.paramMap.get('nh_content3') ;
    this.nh_content4= this.activatedRoute.snapshot.paramMap.get('nh_content4') ;
    this.nh_img1= this.activatedRoute.snapshot.paramMap.get('nh_img1') ;
    this.nh_img2= this.activatedRoute.snapshot.paramMap.get('nh_img2') ;
    this.nh_img3= this.activatedRoute.snapshot.paramMap.get('nh_img3') ;
    this.nh_img4= this.activatedRoute.snapshot.paramMap.get('nh_img4') ;
    this.nh_date= this.activatedRoute.snapshot.paramMap.get('nh_date') ;
    this.nh_view= this.activatedRoute.snapshot.paramMap.get('nh_view') ;
    this.nh_cr_name= this.activatedRoute.snapshot.paramMap.get('nh_cr_name') ;
    this.nh_cr_link= this.activatedRoute.snapshot.paramMap.get('nh_cr_link') ;

  }

}
