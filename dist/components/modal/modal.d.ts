import { NavController, NavParams, ViewController } from 'ionic-angular';
export declare class ModalComponent {
    navCtrl: NavController;
    navParams: NavParams;
    viewCtrl: ViewController;
    listRearrange: any;
    lists: {
        id: number;
        name: string;
        checked: boolean;
    }[];
    selectedList: {
        id: number;
        name: string;
        checked: boolean;
    }[];
    extras: string;
    constructor(navCtrl: NavController, navParams: NavParams, viewCtrl: ViewController);
    ngOnInit(): void;
    setItems(): void;
    filterItems(ev: any): void;
    dismiss(option: any): void;
    selectItem(data: any): void;
}
