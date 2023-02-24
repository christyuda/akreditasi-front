import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner } from "https://jscroot.github.io/element/croot.js";

function response(result){
    
    setInner("demo",result);
}

get("https://reqres.in/api/users",response);

