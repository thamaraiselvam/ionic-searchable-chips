import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { differenceBy, orderBy } from 'lodash';
import { cloneDeep } from 'lodash';

@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {

  public listRearrange: any = []
  public lists: { id: number; name: string; checked: boolean; }[];
  public selectedList: { id: number; name: string; checked: boolean; }[];
  public extras: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {

    this.lists = cloneDeep(navParams.get('list'));
    this.selectedList = cloneDeep(navParams.get('selected'));
    this.extras = navParams.get('extras');

  }

  ngOnInit() {
    this.setItems();
  }

  setItems() {
    this.listRearrange = [];
    this.selectedList = orderBy(this.selectedList, [item => item.name.toLowerCase()], ['asc']);
    this.selectedList.forEach(element => {
      this.listRearrange.push(element);
    });
    let list: any = differenceBy(this.lists, this.selectedList, 'id');
    list = orderBy(list, [item => item.name.toLowerCase()], ['asc']);
    list.forEach(element => {
      this.listRearrange.push(element);
    });
  }

  filterItems(ev: any) {
    this.setItems();
    let val = ev.target.value;
    if (val && val.trim() !== '') {
      this.listRearrange = this.listRearrange.filter(function (item) {
        return item.name.toLowerCase().includes(val.toLowerCase());
      });
    }
  }

  dismiss(option) {
    if (option == "save") {
      this.viewCtrl.dismiss(this.selectedList);
    }
    else {
      this.viewCtrl.dismiss('cancel');
    }

  }

  selectItem(data) {
    if (data.checked == true) {
      this.selectedList.push(data);
    } else {
      let newArray = this.selectedList.filter(function (el) {
        return el.id !== data.id;
      });
      this.selectedList = newArray;
    }
  }

}
