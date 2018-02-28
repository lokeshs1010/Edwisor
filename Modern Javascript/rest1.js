let allUserAddress = [];

let storeUserAddress = (userId, ...addressToStore) =>{
    let customAddress = {userId:userId, address:addressToStore};
    allUserAddress.push(customAddress);
    console.log(allUserAddress);
    return(allUserAddress);
}

let firstAddress = {
    houseNo : 4855,
    city: "Rewari",
    State: "Haryana",
    pinCode : 123401
};

let secondAddress = {
    houseNo : 1010,
    city: "delhi",
    State: "delhi",
    pinCode : 111501
};

storeUserAddress("Lokesh", firstAddress, secondAddress);