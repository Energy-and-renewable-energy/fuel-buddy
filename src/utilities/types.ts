export interface GasStation {
    title: string;
    categoryName: string;
    address: string;
    neighborhood: string;
    city: string;
    postalCode: string;
    state: string;
    website: string;
    phone: string;
    location: {
        lat: number;
        lng: number;
    }
    totalScore: number;
    rank: number;
    cid: string;
    reviewsCount: number;
    reviewsDistribution: {
        oneStar: number;
        twoStar: number;
        threeStar: number;
        fourStar: number;
        fiveStar: number;
    }
    gasPrices: GasPrice[]
}

export type GasTypes = "Regular" | "Midgrade" | "Premium" | "Diesel"
export type GasPrice = {
    priceTag: string;
    unit: string;
    currency: string;
    price: number;
    gasType: GasTypes;
}