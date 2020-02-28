import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LogstatusService } from 'src/app/services/logstatus.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  lang:string="English";

  constructor(private ts:TranslateService,public ls:LogstatusService){

    this.ts.use(this.lang);
  }

  ngOnInit(): void {
     //Login Check
     let username=localStorage.getItem("username");
     if(username){
       this.ls.updateStatus(true);
       this.ls.message = "Hi ,"+username;
     }
     
  }

  

  langChange(){
    this.ts.use(this.lang);
  }


}
