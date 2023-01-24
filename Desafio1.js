class Product {
    constructor(title, description, price, thumbnail, stock, code) {
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.stock = stock
        this.code = code
       
    }
}

class ProductManager {
    static idCounter = 0;
    constructor() {
        this.Products = [];
    }

    addProduct(product) {
        if (Object.values(product).includes("") || Object.values(product).includes(null)) {
            console.log("Todos los campos deben ser completados.");
          } else {
                const DuplicateCode = this.Products.find((prod) => prod.code === product.code);
                if (DuplicateCode) {
                    console.log(`El código ${DuplicateCode.code} está duplicado. Ingrese uno diferente.`);
                    } else {
                        this.Products.push({...product, id: ++ProductManager.idCounter});   
                    }
                }
          }

    getProducts() {
        console.log("Listado completo de productos:");
        console.log(this.Products);
        return this.Products;
    }

    getProductById(id) {
        const findProduct = this.Products.find((prod) => prod.id === id);
        if (findProduct) {
            let index = this.Products.indexOf(findProduct);
            console.log("Se ha encontrado el siguiente producto:")
            console.log(this.Products[index]);
        } else {
            console.log("Not found");
        }
    }
}

const productManager = new ProductManager(); 

// Lista de productos el cual tiene el array vacio

productManager.getProducts(); 
 
//Ejemplo del primer producto
productManager.addProduct({
  title: "REMERA ESSENTIALS GIANT LOGO",
  description: "UNA REMERA CÓMODA PARA EL DÍA A DÍA",
  price: 9.99,
  thumbnail: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b91010638e534e3fac2bae8c0117bba3_9366/Remera_Essentials_Giant_Logo_Verde_HL2218_21_model.jpg",
  stock: 50,
  code: 1,
});

productManager.getProducts(); 
// Ejemplo del segundo producto el cual esta duplicado,da error
productManager.addProduct({
    title: "ZAPATILLAS HOOPS 2.0 MID",
    description: "ZAPATILLAS INSPIRADAS EN EL BÁSQUET CON UN LOOK CLÁSICO",
    price: 22.99,
    thumbnail: "https://assets.adidas.com/images/w_600,f_auto,q_auto/82a1af0fc4b547819925ac0200ed9388_9366/Zapatillas_Hoops_2.0_Mid_Blanco_FY8617.jpg",
    stock: 10,
    code: 1,
  });
// Tercer ejemplo del produco
productManager.addProduct({
    title: "ZAPATILLAS DURAMO SL 2.0",
    description: "ZAPATILLAS DE RUNNING PARA TU DÍA A DÍA HECHAS PARCIALMENTE CON MATERIALES RECICLADOS",
    price: 25.99,
    thumbnail: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/66ef8bd4315f4457a967af480092910f_9366/Zapatillas_Duramo_SL_2.0_Negro_HP2376_01_standard.jpg",
    stock: 7,
    code: 3,
  });
//Ejemplo del cuarto producto con un campo vacío. Debería salir error.
productManager.addProduct({
    title: "SHORTS AEROREADY",
    description: "SHORTS DEPORTIVOS PARA TUS SESIONES DIARIAS DE ENTRENAMIENTO",
    price: 12.99,
    thumbnail: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0615b1ab673c411f9d05ab2800011581_9366/Shorts_AEROREADY_Gris_GL4383_02_laydown_hover.jpg",
    stock: null,
    code: 4,
});
//Creamos nuevamente el producto 4, esta vez ingresando los valores por parámetro.
const Product4 = new Product("SHORTS AEROREADY", "SHORTS DEPORTIVOS PARA TUS SESIONES DIARIAS DE ENTRENAMIENTO", 12.99, "Ruta imagen", 6, 04);
productManager.addProduct(Product4);

//Buscamos y mostramos los productos por consola utilizando su id. El último debería tirar error al no existir.
productManager.getProductById(1);
productManager.getProductById(2);
productManager.getProductById(3);
productManager.getProductById(4);