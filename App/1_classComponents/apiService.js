
const baseUrl= "https://dummyjson.com";

const ApiFunctions = {
    getProductList(extraUrl){
        var url = baseUrl+extraUrl;
        var data= fetch(url);
        return data;
    }
}

export default ApiFunctions;