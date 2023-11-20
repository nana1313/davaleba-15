function getCurrencySymbolFromCode(currency){
    if(currency === "USD"){
        return "$";
    }else if(currency === "EUR"){
        return "€";
    }else if(currency === "GEL"){
        return "ლ";
    }else{
        return currency;
    }
}
console.log(getCurrencySymbolFromCode("EUR"));
console.log(getCurrencySymbolFromCode("USD"));
console.log(getCurrencySymbolFromCode("GEL"));
console.log(getCurrencySymbolFromCode("KOP"));