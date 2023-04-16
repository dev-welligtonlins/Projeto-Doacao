import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert } from '../model/alert';
import { EAlertType } from '../model/e-alert-type';

@Injectable({
    providedIn: 'root'
})
export class AlertService {

    private alertControl: Subject<Alert>;

    constructor() {
        this.alertControl = new Subject<Alert>();
    }

    sendAlert(alerta: Alert): void {
        this.alertControl.next(alerta);
    }

    sendSuccessAlert(message: string = "Operação realizada com sucesso!"): void {
        this.alertControl.next({
            type: EAlertType.SUCCESS,
            message: message
        })
    }

    receiveAlert(): Observable<Alert> {
        return this.alertControl.asObservable();
    }
}
