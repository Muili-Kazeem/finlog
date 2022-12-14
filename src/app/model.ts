export interface IClientEstimate {
    firstEstimateId: string,
    secondEstimateId: string,
    customer: string,
    billingAddress: string,
    estimateDate: Date,
    expiryDate: Date,
    currency: Number,
    recipientMail: string,
    estimateSubject: string,
    estimateItems: { item: string, description: string, quantity: Number, rate: Number, discount: Number, amount: Number }[],
    subtotal: Number,
    tax: Number,
    discount: Number,
    estimateTotal: Number,
  }
