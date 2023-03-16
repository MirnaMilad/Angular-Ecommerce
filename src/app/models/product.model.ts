export class Product{
        id: string
        productName: string
        imgUrl: string
        category: string
        price: number
        shortDesc:string
        description:string
        reviews: Review []
        avgRating:number
}

export class Review {
    rating: number
    text: string
}