export class product {
  constructor(public productId: number, public name: string, public price: number, public currency: string, public image: string, public url: String, public rating: number, public discount:number,public category: string) { }
}

export const productsCollection = [
  {
    id: 1,
    name: 'United Color beniton',
    price: 499.99,
    currency: '₹',
    image: 'images/01.jpg',
    url: 'https://static2.jassets.com/p/Puma-917-Mid-2.0-Ind.-Blue-Sneakers-4118-935263-1-product2.jpg',
    rating: 4,
    discount:10,
    category: 'shoes'
  },
  {
    id: 2,
    name: 'Fastrack Watch',
    price: 2999.99,
    currency: '₹',
    image: 'images/02.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/915LDVhdUEL._UL1500_.jpg',
    rating: 3.9,
    discount:35,
    category: 'Watches'
  },
  {
    id: 4,
    name: 'Adidas',
    price: 239.99,
    currency: '₹',
    image: 'images/04.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/810h11HFM3L._UY395_.jpg',
    rating: 3.4,
    discount:30,
    category: 'shoes'
  },
  {
    id: 6,
    name: 'Nokia',
    price: 999.99,
    currency: '₹',
    image: 'images/06.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/41OEaFm1EcL.jpg',
    rating: 4.1,
    discount:25,
    category: 'Mobiles'
  },
  {
    id: 5,
    name: 'puma track',
    price: 599.99,
    currency: '₹',
    image: 'images/05.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81t38mrch6L._UL1500_.jpg',
    rating: 2.9,
    discount:40,
    category: 'shoes'
  },
  {
    id: 3,
    name: 'Adidas track',
    price: 149.99,
    currency: '₹',
    image: 'images/03.jpg',
    url: 'https://cdn.shopclues.com/images/thumbnails/37609/320/320/INDUSNBLREDb14634988211480324580.jpg',
    rating: 3.5,
     discount:40,
    category: 'shoes'
  },
  {
    id: 9,
    name: 'United Color beniton',
    price: 499.99,
    currency: '₹',
    image: 'images/01.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/81t38mrch6L._UL1500_.jpg',
    rating: 4.6,
    discount:30,
    category: 'shoes'
  },
  {
    id: 8,
    name: 'Vivo',
    price: 15000.00,
    currency: '₹',
    image: 'images/08.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/61Kj514S4WL._SL1200_.jpg',
    rating: 3.9,
    discount:10,
    category: 'Mobiles'
  },

   {
    id: 15,
    name: 'iPhone 6s',
    price: 45000.00,
    currency: '₹',
    image: 'images/10.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/519KIlHA2wL._SL1024_.jpg',
    rating: 4.2,
    discount:20,
    category: 'Mobiles'
  },

{
    id: 20,
    name: 'Titan',
    price: 4000.00,
    currency: '₹',
    image: 'images/10.jpg',
    url: 'https://images-na.ssl-images-amazon.com/images/I/71PsMNWiDRL._UL1500_.jpg',
    rating: 2.9,
    discount:15,
    category: 'Watches'
  }

 
];