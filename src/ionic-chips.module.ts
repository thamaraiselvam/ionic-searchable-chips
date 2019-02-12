import { NgModule, ModuleWithProviders } from '@angular/core';
import { ChipsComponent } from './components/chips/chips';
import { IonicModule } from 'ionic-angular';
import { ModalComponent } from './components/modal/modal';

@NgModule({
    imports: [
        // Only if you use elements like ion-content, ion-xyz...
        IonicModule
    ],
    declarations: [
        // declare all components that your module uses
        ChipsComponent,
        ModalComponent
    ],
    exports: [
        // export the component(s) that you want others to be able to use
        ChipsComponent,
        ModalComponent
    ]
})
export class IonicChipsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: IonicChipsModule,
        };
    }
}