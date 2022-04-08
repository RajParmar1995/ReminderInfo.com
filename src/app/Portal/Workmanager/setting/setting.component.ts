import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../Service/common.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  lists: any = {};
  constructor(public common: CommonService) { }

  ngOnInit() {
    this.GetSettingInfo();
  }

  GetSettingInfo() {
    this.common.PostMethod("GetfilterData", { file: "settings", name: "id", value: 1 }).then((res: any) => {
      console.log(res);
      this.lists.settingvalue = res.Data[0].value == 0 ? false : true;
      this.lists.changesetting = this.lists.settingvalue;
    });
  }

  ChangeApiStatus(ev) {
    console.log(this.lists.changesetting);
    let value = this.lists.changesetting ? 0 : 1;
    this.common.PostMethod("RecordUpdate", { file: 'settings', name: 'id', value: 1, updatename: 'value', updatevalue: value }).then((res: any) => {
      if (res.Status == 1) {
        this.common.ToastMessage('Success', 'Your Api Status Update Successfully')
      }
    });
  }

}
