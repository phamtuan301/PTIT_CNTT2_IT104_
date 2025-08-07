type Product1 = {
    readonly id: string;
    name: string;
    price: number;
};

type OrderItem = {
    product: Product1;
    quantity: number;
};
type Order = {
    orderId: string;
    customerName: string;
    items: OrderItem[];
    note?: string; 
};
function calculateOrderTotal(order: Order): number {
    let total = 0;
    for (let item of order.items) {
        total += item.product.price * item.quantity;
    }
    return total;
}
function printOrderDetails(order: Order): void {
    console.log(`Don hang: ${order.orderId}`);
    console.log(`Khach hang: ${order.customerName}`);
    console.log("San pham:");
    for (let item of order.items) {
        console.log(`- ${item.product.name} (x${item.quantity}) -> $${(item.product.price * item.quantity).toFixed(2)}`);
    }
    console.log(`Tong cong: $${calculateOrderTotal(order).toFixed(2)}`);
    if (order.note) {
        console.log(`Note: ${order.note}`);
    } else {
        console.log("No additional notes.");
    }
}
let order: Order = {
    orderId: "ORD001",
    customerName: "John Doe",
    items: [
        { product: { id: "P001", name: "Laptop", price: 1500 }, quantity: 1 },
        { product: { id: "P002", name: "Smartphone", price: 800 }, quantity: 2 }
    ],
    note: "Please deliver by next week."
};
printOrderDetails(order);