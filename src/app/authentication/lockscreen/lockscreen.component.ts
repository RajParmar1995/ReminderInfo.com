import { CommonService } from './../../Portal/Service/common.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-lockscreen',
  templateUrl: './lockscreen.component.html',
  styleUrls: ['./lockscreen.component.scss']
})
export class LockscreenComponent implements OnInit {
  public form: FormGroup;
  lists: any = {};
  constructor(private fb: FormBuilder, private router: Router, public route: ActivatedRoute, public common: CommonService) { }

  ngOnInit() {
    this.lists.profile = JSON.parse(localStorage.getItem("UserProfile"));
    this.form = this.fb.group({
      password: [null, Validators.compose([Validators.required])]
    });
    this.route.queryParams.subscribe((res: any) => {
      console.log(res);
      this.lists.LastUrl = res.Url;
      this.lists.LastUrl = this.lists.LastUrl.replace("http://localhost:4200", "");
      this.lists.LastUrl = this.lists.LastUrl.replace("https://easybillpay.co.in", "");
    });
  }

  onSubmit() {
    let pass = localStorage.getItem("Typepography");
    if (pass == this.form.value.password) {

      this.router.navigate([this.lists.LastUrl]);
    } else {
      this.common.ToastMessage('Fail', "You Entered a Wrong Password try again to login");
      this.common.logout();
    }
  }
}
