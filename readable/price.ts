export class Price {
    constructor(
        private readonly amount: number,
        private readonly currency: string,
        private readonly tax: number,
    ) {}

    amountAfterTax(): number {
        return this.amount + this.tax;
    }
}