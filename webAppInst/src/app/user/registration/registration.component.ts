import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styles: [ ]
})
export class RegistrationComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.service.formModel.reset();
  }
  onSubmit(){
    this.service.register().subscribe(
      (res: any) =>{
        this.service.formModel.reset();
        this.toastr.success('New user created','Registration successful')
         res.errors.forEach(element => {
           switch(element.code){
             case 'DuplicateUserName':
              this.toastr.error('User is already taken','Registration failed')
               default:
                this.toastr.error(element.description,'Registration failed')
                 break;
           }
         });
      },
      err=>{
        console.log(err);
      }
    )
  }
}
