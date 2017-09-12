import { Injectable } from '@angular/core';
@Injectable()
export class AppService {
    private arrays = [
        { id: 1, name: 'name 1' },
        { id: 2, name: 'name 2' },
        { id: 3, name: 'name 3' },
    ];

    public get getArray() {
        return this.arrays;
    }

    public onSave(item) {
        this.arrays.push(item);
    }

    public onDelete(item) {
        this.arrays.splice(this.arrays.findIndex(m => m == item), 1);
    }
}