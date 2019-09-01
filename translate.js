// arguments recovery
const args = process.argv.slice(2)
var translation = args[0];
 
// security test: no arguments
if (args[0] === undefined){
    console.log("please enter an argument");
}
// security test: moore than on arguments
else if (args[1]){
    console.log("oups, you got too much arguments");
}
//security test: arguments is ok
else{
 
// json reading
    for (var i = 0; i < obj.length; i++){
 
        //security test: if the translation does not exist, send an alert message
        if (obj[i]['translations'][translation] === undefined){
        console.log(obj[i]['name']['official'] , "we can't found any translation");
        }
        //message when the translation exists
        else{
     console.log(obj[i]['name']['official'] , obj[i]['translations'][translation]['official']);
        }
    }
}