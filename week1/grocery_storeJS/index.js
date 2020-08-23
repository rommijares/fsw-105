var shopper = {
    shopperFirstName: 'John',
    shopperLastName: 'Smith',
    customerIdNumber: 256,
    buySaleItems: true,
    useCoupons: false,
    groceryCart: ['eggs', 'milk', 'bread', 'butter', 'juice'],
    shopperFullName: function() {
        return this.shopperFirstName + ' ' + this.shopperLastName;
    }
};

document.getElementById('practice').innerHTML = shopper.shopperFullName();


