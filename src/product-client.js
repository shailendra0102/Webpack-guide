import axios from 'axios';

const fetchproducts = async () => {
    const products = await axios.get('https://fakestoreapi.com/products');
    return products.data;
}

export default fetchproducts;