import { getAllproducts } from './products.ts';

const products = await getAllproducts();
window.console.log('Hey Webpack with dev server', products);