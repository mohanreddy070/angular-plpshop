export class product {
  constructor(public productId: number, public name: string, public price: number, public currency: string, public image: string, public url: String, public rating: number, public discount:number) { }
}

export const productsCollection = [
  {
    id: 1,
    name: 'United Color beniton',
    price: 499.99,
    currency: 'EUR',
    image: 'images/01.jpg',
    url: 'https://static2.jassets.com/p/Puma-917-Mid-2.0-Ind.-Blue-Sneakers-4118-935263-1-product2.jpg',
    rating: 4,
    discount:10
  },
  {
    id: 2,
    name: 'Adidas sports shoes',
    price: 249.99,
    currency: 'EUR',
    image: 'images/02.jpg',
    url: 'http://scene7.zumiez.com/is/image/zumiez/pdp_hero/adidas-Flashback-White-%26-Black-Shoes-_272010-front-US.jpg',
    rating: 4.5,
    discount:15
  },
  {
    id: 4,
    name: 'Adidas',
    price: 239.99,
    currency: 'EUR',
    image: 'images/04.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/810h11HFM3L._UY395_.jpg',
    rating: 3.4,
    discount:30
  },
  {
    id: 6,
    name: 'PUMA sports ',
    price: 119.99,
    currency: 'EUR',
    image: 'images/06.jpg',
    url: 'http://assets.myntassets.com/assets/images/1920391/2017/6/8/11496905404701-Adidas-Men-Sports-Shoes-3121496905404588-5.jpg',
    rating: 4.1,
     discount:25
  },
  {
    id: 5,
    name: 'puma track',
    price: 599.99,
    currency: 'EUR',
    image: 'images/05.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81t38mrch6L._UL1500_.jpg',
    rating: 2.9,
    discount:40
  },
  {
    id: 3,
    name: 'Adidas track',
    price: 149.99,
    currency: 'EUR',
    image: 'images/03.jpg',
    url: 'https://cdn.shopclues.com/images/thumbnails/37609/320/320/INDUSNBLREDb14634988211480324580.jpg',
    rating: 3.5,
     discount:40
  },
  {
    id: 9,
    name: 'United Color beniton',
    price: 499.99,
    currency: 'EUR',
    image: 'images/01.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81t38mrch6L._UL1500_.jpg',
    rating: 4.6,
     discount:30
  }
];
