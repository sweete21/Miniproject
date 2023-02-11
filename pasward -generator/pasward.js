
/*creating function to return values from all type of characters*/
let uppervalues="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowervalues="abcdefghijklmnopqrstuvwxyz"
let integers="0123456789"
let specialsymbol="!@#$%^&*()><~?>+-=<"

function get_uppervalues(){
    return uppervalues[Math.floor(Math.random() * uppervalues.length)];

}
function get_lowervalues(){
    return lowervalues[Math.floor(Math.random() * lowervalues.length)];

}
function get_integers(){
    return integers[Math.floor(Math.random() * integers.length)];

}
function get_specialsymbols(){
    return specialsymbol[Math.floor(Math.random() * specialsymbol.length)];

}

/*generating pasward*/
var pasward='';
var pass_lenght=0;
sum=sum+10
sum+=10

function create(){
        let upper=document.getElementById("uppercase").checked;
        let lower=document.getElementById("lowercase").checked;
        let number=document.getElementById("number").checked;
        let symbol=document.getElementById("specialcharacter").checked;
        
        if((upper||lower||number||symbol)==false)
            alert("please select atleast one box");
        else
            pass_lenght=document.getElementById("paslen").value;
        if(pass_lenght==0||pass_lenght>10)
            alert("password length can not be zero or greater 10 ")

        while(pasward.length<=(pass_lenght-1))
        {
            if(upper==true){
                pasward+=get_uppervalues();
            }
            if(pasward.length==(pass_lenght))
            break;
            if(lower==true){
                pasward+=get_lowervalues();
            }
            if(pasward.length==(pass_lenght))
            break;
            if(number==true){
                pasward+=get_integers();
            }
            if(pasward.length==(pass_lenght))
            break;
            if(symbol==true){
                pasward+=get_specialsymbols();
            }
        }
        let res=document.getElementById("display");
        res.value=pasward;
}

function copy(){
    var copyText = document.getElementById("display");
    copyText.select();
    copyText.setSelectionRange(0,pass_lenght);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}
function clear(){
    reload();
}
