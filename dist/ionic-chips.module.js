import { NgModule } from '@angular/core';
import { ChipsComponent } from './components/chips/chips';
import { IonicModule } from 'ionic-angular';
import { ModalComponent } from './components/modal/modal';
var IonicChipsModule = /** @class */ (function () {
    function IonicChipsModule() {
    }
    IonicChipsModule.forRoot = function () {
        return {
            ngModule: IonicChipsModule,
        };
    };
    IonicChipsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        ChipsComponent,
                        ModalComponent
                    ],
                    exports: [
                        ChipsComponent,
                        ModalComponent
                    ]
                },] },
    ];
    return IonicChipsModule;
}());
export { IonicChipsModule };
//# sourceMappingURL=ionic-chips.module.js.map