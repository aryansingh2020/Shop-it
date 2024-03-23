// products.js

// Load PRODUCTS array from localStorage or use a default value if it's not available
let PRODUCTS = JSON.parse(localStorage.getItem("products")) || [
  
  {
    id: 4,
    productName: "WLS Van Gogh Denim Jacket",
    price: 228.0,
    productImage: "imga.png",
  },
  {
    id: 5,
    productName: "LED Light Strips",
    price: 19.99,
    productImage: "imgb.png",
  },
  {
    id: 6,
    productName: "SPECTRUM LS TEE",
    price: 68.0,
    productImage: "imgc.png",
  },
  {
    id: 7,
    productName: "AUTO SERVICE SHIRT by GOLF WANG",
    price: 120.0,
    productImage: "imgd.png",
  },
  {
    id: 8,
    productName: "DON'T TRIP UNSTRUCTURED HAT",
    price: 40.0,
    productImage: "imge.png",
  },

{
  id: 4,
  productName: "WLS Van Gogh Denim Jacket",
  price: 228.0,
  productImage: "imgf.png",
},
{
  id: 5,
  productName: "LED Light Strips",
  price: 19.99,
  productImage: "imgg.png",
},
{
  id: 6,
  productName: "SPECTRUM LS TEE",
  price: 68.0,
  productImage: "imgh.png",
},
{
  id: 7,
  productName: "AUTO SERVICE SHIRT by GOLF WANG",
  price: 120.0,
  productImage: "imgi.png",
},
{
  id: 8,
  productName: "DON'T TRIP UNSTRUCTURED HAT",
  price: 40.0,
  productImage: "imgj.png",
},
{
  id: 7,
  productName: "AUTO SERVICE SHIRT by GOLF WANG",
  price: 120.0,
  productImage: "imgk.png",
},
{
  id: 8,
  productName: "DON'T TRIP UNSTRUCTURED HAT",
  price: 40.0,
  productImage: "imgl.png",
},
];


const addProduct = (newProduct) => {
  PRODUCTS = [...PRODUCTS, newProduct];

  localStorage.setItem("products", JSON.stringify(PRODUCTS));
};

export { PRODUCTS, addProduct };
