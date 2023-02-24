import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner, addInner } from "https://jscroot.github.io/element/croot.js";
import { getRandomColor } from "https://jscroot.github.io/image/croot.js"
import { stringdiv, icons } from "./html.js";

       

function response(result){
    let jsonParse = JSON.parse(result);
    var stringtable = '';
    jsonParse.data.forEach((element, index) => {
      let svgicon = icons.replace("#WARNA#", getRandomColor());
        if (index % 2 === 0){
            stringtable += stringdiv.replace("#NAMA#", element['first_name']).replace("#EMAIL#", element['email']).replace("#BG#", "bg-gray-50").replace("#SVG#", svgicon);
        } else{
            stringtable += stringdiv.replace("#NAMA#", element['first_name']).replace("#EMAIL#", element['email']).replace("#BG#", "").replace("#SVG#", svgicon);
        }
    });

    addInner("demo",stringtable);

}

get("https://reqres.in/api/users",response);




