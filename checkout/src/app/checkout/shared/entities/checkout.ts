export class Checkout {
    userName = 'Nicolas Mazia';
    paymentMethod: string;
    totalPrice = '8,00';
    cardNumber: string;
    cardName: string;
    cardDate: string;
    cardCvv: string;
    plots = localStorage.getItem('plots')
}