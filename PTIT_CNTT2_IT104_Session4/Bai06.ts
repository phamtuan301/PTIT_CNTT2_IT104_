type Product = {
     id: string;
     name: string;
     price: number;
     category: {
       id: string;
       name: string;
  };
     discount?: number; 
};
let listProducts: Product[] = [
    {
        id: "P001",
        name: "Laptop",
        price: 1500,
        category: {
            id: "C001",
            name: "Electronics"
        },
        discount: 10
    },
    {
        id: "P002",
        name: "Smartphone",
        price: 800,
        category: {
            id: "C001",
            name: "Electronics"
        }
    },
    {
        id: "P003",
        name: "Table",
        price: 200,
        category: {
            id: "C002",
            name: "Furniture"
        },
        discount: 5
    }
];
function calculateFinalPrice(product: Product): number {
    let finalPrice = product.price;
    if (product.discount) {
        finalPrice -= (finalPrice * product.discount / 100);
    }
    return finalPrice;
}
function printProductDetails(product: Product): void {
    console.log(`Product ID: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price.toFixed(2)}`);
    console.log(`Category: ${product.category.name}`);
    if (product.discount) {
        console.log(`Final Price after discount: $${calculateFinalPrice(product).toFixed(2)}`);
    } else {
        console.log("No discount available.");
    }
}
for (let product of listProducts) {
    printProductDetails(product);
}