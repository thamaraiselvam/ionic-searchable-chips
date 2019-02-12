import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalComponent } from '../modal/modal';
var ChipsComponent = /** @class */ (function () {
    function ChipsComponent(modalController) {
        this.modalController = modalController;
        this.list = [];
        this.selectedItems = [];
        this.extras = {};
    }
    ChipsComponent.prototype.openModal = function () {
        var _this = this;
        var test = this.modalController.create(ModalComponent, {
            list: this.list,
            selected: this.selectedItems,
            extras: this.extras
        });
        test.onDidDismiss(function (selectedItems) {
            if (selectedItems === 'cancel') {
                return;
            }
            _this.selectedItems = selectedItems;
        });
        test.present();
    };
    ChipsComponent.prototype.remove = function (removeItem) {
        for (var item in this.selectedItems) {
            if (this.selectedItems[item].id === removeItem.id) {
                delete this.selectedItems[item];
            }
        }
        //remove empty elements from array
        this.selectedItems = this.selectedItems.filter(function (el) {
            return el != null;
        });
    };
    ChipsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'chips',
                    templateUrl: 'chips.html'
                },] },
    ];
    /** @nocollapse */
    ChipsComponent.ctorParameters = function () { return [
        { type: ModalController, },
    ]; };
    ChipsComponent.propDecorators = {
        "list": [{ type: Input, args: ['list',] },],
        "selectedItems": [{ type: Input, args: ['selectedItems',] },],
        "extras": [{ type: Input, args: ['extras',] },],
    };
    return ChipsComponent;
}());
export { ChipsComponent };
//# sourceMappingURL=chips.js.map