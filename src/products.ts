import fetchproducts from './product-client';
interface Product {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    title: string,
    rating: { [key: string]: string; }
}

type Products = Product[];

export const getAllproducts: () => Promise<Products> = async () => {
    const products = await fetchproducts();
    return products;
}