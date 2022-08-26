export const accountToogle = () => ({
    type: 'accountToogle'
});

export const ordersToogle = () => ({
    type: 'ordersToogle'
});

export const shopToogle = () => ({
    type: 'shopToogle'
});

export const menuToogle = () => ({
    type: 'menuToogle'
});

interface ProductList {
    id: number;
    pizzaName: string;
    image: string;
    price: number;
    count: number;
    //totalCost: number;
    //addition: string[];
    //exclusion: string[];
  }

export const addToCart = (item:ProductList) => ({
    type: 'ADD_CART',
    payload: item
})

export const deleteItem = (id:number) => ({
    type: 'DELETE_CART',
    payload: id
})

export const changeItem = (id:number) => ({
    type: 'CHANGE_CART',
    payload: id
})
