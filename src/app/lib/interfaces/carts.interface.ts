export interface ICarts {
    id: number
    userId: number
    date: string
    products: IProduct[]
    __v: number
  }
  
  export interface IProduct {
    productId: number
    quantity: number
  }
  