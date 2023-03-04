{
    function OrderSandwich(...items: string[]): void{
        console.log("Sandwich order:");
        for (let i = 0; i < items.length; i++) {
            console.log("- " + items[i]);
        }
        console.log("Enjoy your sandwich!");
    }
    
    OrderSandwich("lettuce", "mayo", "BBQ Sauce", "Chicken");
    OrderSandwich("ham", "cheese", "mustard");
    OrderSandwich("butter", "jelly");
}