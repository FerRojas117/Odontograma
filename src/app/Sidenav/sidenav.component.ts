import {
  Component, Inject,
  OnInit, OnDestroy
 } from '@angular/core';

 import {Observable} from 'rxjs';
 import {map, startWith} from 'rxjs/operators';
import { CardService } from '../cardContent.service';
import { Card } from '../card.model';
import { PeriodicElement } from '../tabla.model';
import { Subscription } from 'rxjs';
import { NgForm, FormControl } from '@angular/forms';
import { UserService } from '../servicios/user/user.service';
import { formService } from '../servicios/formLogin/form.service';
import { WOService } from '../servicios/workOrder/wo.service';
import { DeviceService } from '../servicios/devices/device.service';
import { ClientService } from '../servicios/devices/client.service';
import { PlaceService } from '../servicios/devices/place.service';
import { AssignWOService } from '../servicios/asignarWorkOrder/assignWO.service';
import { MatDialog } from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-sidenav-fixed',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.sass'],
})

export class SidenavFixedComponent implements OnInit, OnDestroy {
  userIsTechnician = false;
  worker_busy: boolean;
  rol_id: string;
  person_full_name: string;
  person_id: string;
  confirmAssignSelf: string;
  private UserSub: Subscription;

  myControl = new FormControl();
  myControl_places = new FormControl();
  myControl_clients = new FormControl();
  myControl_WOID = new FormControl();
  myControl_Worker = new FormControl();

  filteredOptions: Observable<string[]>;
  filteredOptions_place: Observable<string[]>;
  filteredOptions_client: Observable<string[]>;
  filteredOptions_WOID: Observable<string[]>;
  filteredOptions_Worker: Observable<string[]>;

  device: string[] = [];
  place: string[] = [];
  client: string[] = [];
  work_order: string[] = [];
  worker: string[] = [];

  private partSub: Subscription;
  private clientSub: Subscription;
  private PlaceSub: Subscription;
  private workerSub: Subscription;
  private woSub: Subscription;


  workOrderCrear = false;
  showFiller = false;

  // CREAR WORK ORDER
  info = false;
  asignar = false;
  comentarios = false;
  autoComplete_Device = true;
  nuevoDevice = false;
  // CREAR WORK ORDER
  depositoNueva = false;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  card: Card[] = [];
  home: Boolean = false;
  trello: Boolean = false;
  wiki: Boolean = false;
  deposito: Boolean = false;
  graficas: Boolean = false;
  main: Boolean = false;
  form: Boolean = true;


  constructor(public cardService: CardService,
    public userServ: UserService,
    public formServ: formService,
    public partService: DeviceService,
    public clientService: ClientService,
    public placeService: PlaceService,
    public workOrderService: WOService,
    public assignWOService: AssignWOService,
    public dialog: MatDialog,
    public dialogSelf: MatDialog
  ) {}

  ngOnInit() {
    this.partService.getDevice();
    this.clientService.getClient();
    this.placeService.getPlace();
    this.assignWOService.getWO();
    this.assignWOService.getWorker();

    this.rol_id = this.formServ.getRol();
    this.person_full_name = this.formServ.getPersonFullName();

    this.person_id = this.formServ.getPersonId();

    console.log(this.person_id, '', this.person_full_name, '', this.rol_id);

    if (this.rol_id == '1') {
      this.userIsTechnician = true;
    }

    // Llenado de partes
    this.partSub = this.partService.getPartsUpdateListener()
    .subscribe( (part_fetched: string[]) => {
      this.device = part_fetched;
    });

    this.filteredOptions = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    // Llenado de clientes
    this.clientSub = this.clientService.getClientUpdateListener()
    .subscribe( (clientFetched: string[]) => {
      this.client = clientFetched;
    //  console.log(this.client);
    });
                // filtrar clientes
    this.filteredOptions_client = this.myControl_clients.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter_client(value))
    );

    // Llenado de places
    this.PlaceSub = this.placeService.getPlaceUpdateListener()
    .subscribe( (place_fetched: string[]) => {
      this.place = place_fetched;
    });
              // Filtrar lugares
    this.filteredOptions_place = this.myControl_places.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter_place(value))
    );

    // Llenado de workOrders
    this.woSub = this.assignWOService.getWOUpdateListener()
    .subscribe( (wo_fetched: string[]) => {
      this.work_order = wo_fetched;
    });
            // Filtrar Workorders
    this.filteredOptions_WOID = this.myControl_WOID.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter_wo(value))
    );

    // Llenado de workers
    this.woSub = this.assignWOService.getWorkerUpdateListener()
    .subscribe( (worker_fetched: string[]) => {
      this.worker = worker_fetched;
    });
            // Filtrar Workers
    this.filteredOptions_Worker = this.myControl_Worker.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filter_worker(value))
    );

  }


  private _filter(value: string): string[] {
    return this.device.filter(option => option.includes(value));
  }


  private _filter_place(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.place.filter(option => option.toLowerCase().includes(filterValue));
 }

 private _filter_client(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.client.filter(option => option.toLowerCase().includes(filterValue));
}

private _filter_wo(value: string): string[] {
  return this.work_order.filter(option => option.includes(value));
}

private _filter_worker(value: string): string[] {
  const filterValue = value.toLowerCase();
  return this.worker.filter(option => option.toLowerCase().includes(filterValue));
}



  ngOnDestroy() {
    this.partSub.unsubscribe();
    this.clientSub.unsubscribe();
    this.PlaceSub.unsubscribe();
  }

  validate(form: NgForm) {
    this.formServ.validate(form.value.email, form.value.password);
   }

  onAddUser(form: NgForm) {
    this.userServ.addUsers(form.value.nombre, form.value.email, form.value.password);
   }

  onClickMenuHome() {
      this.home = true;
      this.trello = false;
      this.wiki = false;
      this.deposito = false;
      this.graficas = false;
      this.card = this.cardService.addCard();
  }
  onClickMenuTrello() {
      this.home = false;
      this.trello = true;
      this.wiki = false;
      this.deposito = false;
      this.graficas = false;
  }
  onClickMenuWiki() {
      this.home = false;
      this.trello = false;
      this.wiki = true;
      this.deposito = false;
      this.graficas = false;
  }
  onClickMenuDeposito() {
      this.home = false;
      this.trello = false;
      this.wiki = false;
      this.deposito = true;
      this.graficas = false;
  }
  onClickMenuGraficas() {
    this.home = false;
    this.trello = false;
    this.wiki = false;
    this.deposito = false;
    this.graficas = true;
}

// CREAR NUEVA WORK ORDER
  onClickMenuTrelloInfo() {
    this.info = true;
    this.asignar = false;
    this.comentarios = false;
  }
  onClickMenuTrelloAsignar() {
    this.info = false;
    this.asignar = true;
    this.comentarios = false;
  }
  onClickMenuTrelloDeposito() {
    this.info = false;
    this.asignar = false;
    this.comentarios = true;
  }

  registrarDevice() {
    this.autoComplete_Device = false;
    this.nuevoDevice = true;
  }

  registrarWO_BD() {
    // console.log(this.myControl.value, this.myControl_places.value, this.myControl_clients.value);
    if (this.rol_id === '1') {
      this.workOrderService.registrateWO(
        this.myControl.value,
        this.myControl_places.value.replace(/['"]+/g, ''),
        this.myControl_clients.value.replace(/['"]+/g, '')
      );
    } else {
      this.workOrderService.registrateWO(
        this.myControl.value,
        this.myControl_places.value.replace(/['"]+/g, ''),
        this.person_full_name.replace(/['"]+/g, '')
      );
    }
  }

  assignWO_BD() {
     if (this.person_full_name.replace(/['"]+/g, '') !=  this.myControl_Worker.value.replace(/['"]+/g, '')) {
      this.openDialog();
    } else {
      this.assignWOService.checkWorker( this.myControl_Worker.value.replace(/['"]+/g, ''));
      this.workerSub = this.assignWOService.getWorkerBusyUpdateListener()
      .subscribe((worker_fetched: boolean) => {
        this.worker_busy = worker_fetched;
        if (this.worker_busy) {
          this.openDialogSelf();
        } else {
          this.assignWOService.assignWO(
            this.myControl_WOID.value,
            this.myControl_Worker.value.replace(/['"]+/g, '')
          );
        }
      })
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogNotAssignableComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogSelf() {
    const dialogRef = this.dialog.open(DialogAssignSelfComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.confirmAssignSelf = result;
      if (this.confirmAssignSelf === 'true') { this.cambiarAssignWO(); }
    });
  }

  registrarDevice_BD(form: NgForm) {

  }
// FIN CREAR NUEVA WORK ORDER
  agregarNuevaDeposito() {
    this.home = false; this.trello = false; this.wiki = false; this.deposito = false;
    this.info = false; this.asignar = false; this.comentarios = false;
    this.depositoNueva = true;
  }

  cambiarAssignWO() {
    this.assignWOService.updateAssignSelf(this.person_id);
    this.assignWOService.assignWO(
      this.myControl_WOID.value,
      this.myControl_Worker.value.replace(/['"]+/g, '')
    );
  }

}


@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogNotAssignableComponent {
  constructor(
    public dialogRef: MatDialogRef<SidenavFixedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {nombre: ''}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'app-dialog-content-example-dialog',
  templateUrl: './dialogSelf.component.html',
})
export class DialogAssignSelfComponent {
  constructor(
    public dialogRef: MatDialogRef<SidenavFixedComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {nombre: ''}) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  acceptAssignSelf() {
    this.dialogRef.close('true');
  }
  declineAssignSelf(): void {
    this.dialogRef.close();
  }
}
