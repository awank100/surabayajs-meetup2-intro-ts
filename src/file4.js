"use strict";
class Nasabah {
    constructor(name) {
        this.withdraw = (amount) => {
            if (this._balance < amount) {
                return {
                    status: false,
                    message: 'Saldo tidak cukup'
                };
            }
            else {
                this._balance = this._balance - amount;
                console.log(this._balance);
                return {
                    status: true,
                    message: 'Sukses'
                };
            }
        };
        this._name = name;
        this._balance = 2000000;
    }
}
const parto = new Nasabah('Parto');
const resultWithdraw = parto.withdraw(500000);
console.log(resultWithdraw);
