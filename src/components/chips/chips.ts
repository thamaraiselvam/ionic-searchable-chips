import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalComponent } from '../modal/modal';

@Component({
  selector: 'chips',
  templateUrl: 'chips.html'
})
export class ChipsComponent {

  @Input('list') list: any = [];
  @Input('selectedItems') selectedItems: any = [];
  @Input('extras') extras: any = {};

  constructor(private modalController: ModalController) { }

  openModal() {

    let test = this.modalController.create(ModalComponent, {
      list: this.list,
      selected: this.selectedItems,
      extras: this.extras
    })
    test.onDidDismiss(selectedItems => {

      if (selectedItems === 'cancel') {
        return;
      }

      this.selectedItems = selectedItems;
    });

    test.present();
  }

  remove(removeItem) {
    for (let item in this.selectedItems) {
      if (this.selectedItems[item].id === removeItem.id) {
        delete this.selectedItems[item];
      }
    }

    //remove empty elements from array
    this.selectedItems = this.selectedItems.filter(function (el) {
      return el != null;
    });
  }


}
