import { ModalController } from 'ionic-angular';
export declare class ChipsComponent {
    private modalController;
    list: any;
    selectedItems: any;
    extras: any;
    constructor(modalController: ModalController);
    openModal(): void;
    remove(removeItem: any): void;
}
