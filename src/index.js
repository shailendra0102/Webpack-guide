import { getAllproducts } from './products.ts';

const products = getAllproducts();
window.console.log('Hey Webpack with dev server', products);