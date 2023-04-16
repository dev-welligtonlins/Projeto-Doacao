import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert } from '../model/alert';
import { EAlertType } from '../model/e-alert-type';
import { Item } from '../model/item';

@Injectable({
    providedIn: 'root'
})
export class ProgressService {

    calculateProgress(items: Item[]): number {
        if (items.length > 0) {
            let currentValue = 0;
            let requiredValue = 0;
            items.forEach(function (item) {
                currentValue += item.current_value;
                requiredValue += item.required_value;
            });
            return currentValue / requiredValue * 100;
        } else {
            return 0;
        }
    }

}