import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { differenceBy, orderBy } from 'lodash';
import { cloneDeep } from 'lodash';
var ModalComponent = /** @class */ (function () {
    function ModalComponent(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.listRearrange = [];
        this.lists = cloneDeep(navParams.get('list'));
        this.selectedList = cloneDeep(navParams.get('selected'));
        this.extras = navParams.get('extras');
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.setItems();
    };
    ModalComponent.prototype.setItems = function () {
        var _this = this;
        this.listRearrange = [];
        this.selectedList = orderBy(this.selectedList, [function (item) { return item.name.toLowerCase(); }], ['asc']);
        this.selectedList.forEach(function (element) {
            _this.listRearrange.push(element);
        });
        var list = differenceBy(this.lists, this.selectedList, 'id');
        list = orderBy(list, [function (item) { return item.name.toLowerCase(); }], ['asc']);
        list.forEach(function (element) {
            _this.listRearrange.push(element);
        });
    };
    ModalComponent.prototype.filterItems = function (ev) {
        this.setItems();
        var val = ev.target.value;
        if (val && val.trim() !== '') {
            this.listRearrange = this.listRearrange.filter(function (item) {
                return item.name.toLowerCase().includes(val.toLowerCase());
            });
        }
    };
    ModalComponent.prototype.dismiss = function (option) {
        if (option == "save") {
            this.viewCtrl.dismiss(this.selectedList);
        }
        else {
            this.viewCtrl.dismiss('cancel');
        }
    };
    ModalComponent.prototype.selectItem = function (data) {
        if (data.checked == true) {
            this.selectedList.push(data);
        }
        else {
            var newArray = this.selectedList.filter(function (el) {
                return el.id !== data.id;
            });
            this.selectedList = newArray;
        }
    };
    ModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'modal',
                    templateUrl: 'modal.html'
                },] },
    ];
    /** @nocollapse */
    ModalComponent.ctorParameters = function () { return [
        { type: NavController, },
        { type: NavParams, },
        { type: ViewController, },
    ]; };
    return ModalComponent;
}());
export { ModalComponent };
//# sourceMappingURL=modal.js.map