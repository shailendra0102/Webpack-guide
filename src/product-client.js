import axios from 'axios';

export const fetchproducts = async () => {
    const products = await axios.get('https://fakestoreapi.com/products');
    getPreviousThreeMonths();
    return products.data;
}

export const getPreviousThreeMonths = () => {
    const arr = getThreeMonthsdates();
    window.console.log('getPreviousThreeMonths',arr);
}
/*{
    month: 2,
    year: 2024,
    monthlong: 'February'

}*/

const getThreeMonthsdates = () => {
    const dates = [];
    for(let i in [0,1,2]){
        let dateNow = new Date();
        dateNow.setMonth(dateNow.getMonth() -i);
        dates.push(Object.assign({},{
            'month': dateNow.toLocaleString('default', { month: 'numeric'}),
            'year': dateNow.toLocaleString('default', { year: 'numeric' }),
            'displayMonth': dateNow.toLocaleString('default', { month: 'long' })
        }))
    }
    return dates;
}