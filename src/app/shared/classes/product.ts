// Products
export interface Product {
    id?: number;
    title?: string;
    description?: string;
    type?: string;
    brand?: string;
    collection?: any[];
    category?: string;
    year?: string;
    price?: any;
    milage?: number;
    sale?: boolean;
    discount?: number;
    stock?: number;
    new?: boolean;
    quantity?: number;
    tags?: any[];

    model?: string;
    color?: string;
    kilos?:number;
    engine_size?: string;
    transmission?: string;
    fuel?: string;
    doors?: string;
    kilowatts?: string;
    service_history?: string;
    vin?: string;
    img_link?: string;
    img_link2?: string;
    img_link3?: string;
    img_link4?: string;
    logo_link?: string;
    installment?: string;
    term?: string;
    dealer?: string;
    timestamp?: string;
    status?: string;

    variants?: Variants[];
    images?: Images[];
    details?: Details[];
    
}

export interface UsedCar {
    id?: number;
    brand?: string;
    model?: string;
    year?: string;
    color?: string;
    kilos?:string;
    engine_size?: string;
    transmission?: string;
    fuel?: string;
    doors?: string;
    type?: string;
    kilowatts?: string;
    service_history?: string;
    vin?: string;
    img_link?: string;
    img_link2?: string;
    img_link3?: string;
    img_link4?: string;
    logo_link?: string;
    price?: string;
    installment?: string;
    term?: string;
    description?: string;
    dealer?: string;
    timestamp?: string;
    status?: string;
}

export interface Details {
    mileage?: number;
    year?: number;
    fuel?: string;
    transmition?: string;
    engine?: string;
    type?: string;
    serviceHistory?: string;
}

export interface Variants {
    variant_id?: number;
    id?: number;
    sku?: string;
    size?: string;
    color?: string;
    image_id?: number;
}

export interface Images {
    image_id?: number;
    id?: number;
    alt?: string;
    src?: string;
    variant_id?: any[];
}