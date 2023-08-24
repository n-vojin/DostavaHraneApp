export const filterData = [
  {name: 'Fast food', image: require('../assets/fastfood.png'), id: '0'},
  {name: 'Burgers', image: require('../assets/burger.png'), id: '1'},
  {name: 'Salads', image: require('../assets/salads.png'), id: '2'},
  {name: 'Hotdog', image: require('../assets/hotdog.png'), id: '3'},
  {name: 'Chinese', image: require('../assets/chinese.png'), id: '4'},
  {name: 'Mexican', image: require('../assets/mexican.png'), id: '5'},
  {name: 'Sea food', image: require('../assets/seafood.png'), id: '6'},
  {name: 'Drinks', image: require('../assets/drinks.png'), id: '7'},
  {name: 'Coffee', image: require('../assets/coffee.png'), id: '8'},
  {name: 'Desserts', image: require('../assets/desserts.png'), id: '9'},
];

export const checkOutData = [
  {
    image:
      'https://fagor.rs/wp-content/uploads/2021/12/recept-za-rusku-salatu.jpg',
    name: 'Ruska salata',
    price: 400,
    quantity: 3,
  },
  {
    image:
      'https://nadijeti.com/wp-content/uploads/2018/11/cezar-salata-1024x819.jpg',
    name: 'Cezar salata',
    price: '450',
    quantity: 2,
  },
];

export const productData1 = [
  {
    name: 'Pomfrit XL',
    price: 300.0,
    image:
      'https://beoshoppingcenter.rs/wp-content/uploads/2020/02/McD_Sajt-Us%CC%8Cc%CC%81e_Pomfrit_650x650.jpg',
  },
  {
    name: 'Big Mac',
    price: 340.0,
    image:
      'https://image.cnbcfm.com/api/v1/image/107016405-1645041786514-GettyImages-1128021770_1.jpg?v=1645043552',
  },
  {
    name: 'Chicken Burger',
    price: 440.0,
    image:
      'https://www.pngitem.com/pimgs/m/484-4840724_mcdonalds-chicken-big-mac-hd-png-download.png',
  },
  {
    name: 'Pomfrit XL',
    price: 340.0,
    image:
      'https://beoshoppingcenter.rs/wp-content/uploads/2020/02/McD_Sajt-Us%CC%8Cc%CC%81e_Pomfrit_650x650.jpg',
  },
  {
    name: 'Big Mac',
    price: 340.0,
    image:
      'https://image.cnbcfm.com/api/v1/image/107016405-1645041786514-GettyImages-1128021770_1.jpg?v=1645043552',
  },
  {
    name: 'Chicken Burger',
    price: 340.0,
    image:
      'https://www.pngitem.com/pimgs/m/484-4840724_mcdonalds-chicken-big-mac-hd-png-download.png',
  },
];

export const restaurantsData = [
  {
    restaurantName: 'Mc Donalds',
    farAway: '21.2',
    businessAddress: '22 Bessie street, Cape Town',
    images:
      'https://s7d1.scene7.com/is/image/mcdonalds/HQ%20Global%20Menu%207%20Release%20-%20Thumbnail%20-%20700x400:hero-desktop?resmode=sharp2',
    averageReview: 4.9,
    numberOfReview: 272,
    coordinates: {lat: -26.1888612, lng: 28.246325},
    discount: 10,
    deliveryTime: 15,
    collectTime: 5,
    foodType: 'Burgers, Wraps,Milkshakes...',
    productData: [
      {
        name: 'Pomfrit XL',
        price: 29.3,
        image:
          'https://beoshoppingcenter.rs/wp-content/uploads/2020/02/McD_Sajt-Us%CC%8Cc%CC%81e_Pomfrit_650x650.jpg',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image:
          'https://image.cnbcfm.com/api/v1/image/107016405-1645041786514-GettyImages-1128021770_1.jpg?v=1645043552',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image:
          'https://www.pngitem.com/pimgs/m/484-4840724_mcdonalds-chicken-big-mac-hd-png-download.png',
      },
    ],
    id: 0,
  },

  {
    restaurantName: 'KFC',
    farAway: '12.7',
    businessAddress: '22 Bessie street, Cape Town',
    images:
      'https://www.fastfoodmenuprices.com/wp-content/uploads/2014/03/kfc-chicken.jpg',
    averageReview: 4.3,
    numberOfReview: 306,
    coordinates: {lat: -26.1891648, lng: 28.2441808},
    discount: 20,
    deliveryTime: 30,
    collectTime: 10,
    foodType: 'Chicken,Chicken wings... ',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 1,
  },

  {
    restaurantName: 'Steers',
    farAway: '5',
    businessAddress: ' 17 Olivia Rd, Johannesburg',
    images:
      'https://www.mashed.com/img/gallery/fast-food-salad-ranked-from-worst-to-best/intro-1610039413.jpg',
    coordinates: {lat: -26.1886781, lng: 28.244879},
    averageReview: 4.9,
    numberOfReview: 1272,
    discount: 12,
    deliveryTime: 25,
    collectTime: 15,
    foodType: 'Flame grilled beef Burgers',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 2,
  },

  {
    restaurantName: 'Roman Pizza',
    farAway: '7',
    businessAddress: ' 15 Atlas Rd, Kempton Park',
    images:
      'https://upload.wikimedia.org/wikipedia/commons/4/41/Pizza_food.jpg',
    averageReview: 4.3,
    numberOfReview: 700,
    coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, Vegetarian pizza...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 3,
  },
  {
    restaurantName: 'Mišič',
    farAway: '2',
    businessAddress: ' Petefi Šandora 13, Temerin',
    images:
      'https://scontent.fbeg4-1.fna.fbcdn.net/v/t39.30808-6/317086579_574183678046495_2304764447888179404_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EU3OcmcsTtAAX93DrJJ&_nc_ht=scontent.fbeg4-1.fna&oh=00_AfCrjP9Xcl1aTYQHD1Y-3l35b2_dZcstO5-mjpjDhBy2tg&oe=64E2A40F',
    averageReview: 20000.6,
    numberOfReview: 700,
    coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount: null,
    deliveryTime: 20,
    collectTime: 10,
    foodType: 'Chicken pizza, Vegetarian pizza...',
    productData: [
      {
        name: 'Hand cut chips',
        price: 29.3,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png',
      },
      {
        name: 'Big Mac',
        price: 50.8,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png',
      },
      {
        name: 'Chicken Burger',
        price: 70,
        image: 'https://bukasapics.s3.us-east-2.amazonaws.com/plate3.png',
      },
    ],
    id: 3,
  },
];
