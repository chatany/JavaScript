
let a=document.getElementById("input").value
function check() {
    if(a==""){
         alert("plesase Enter Text")
        
    }else{
        let arr=a.toLowerCase()
        let arr2=arr.split("")
        let arr1=arr.split("").reverse()
        console.log(arr2);
        console.log(arr1);
        localStorage.setItem("name",JSON.stringify(a))
     
        for(i=0;i<arr1.length;i++){
        if(arr2[i]==arr1[i]){
            document.getElementById("result").innerHTML= a+" is a palindrome"
        }
        else if(arr2[i]!=arr1[i]){
            document.getElementById("result").innerHTML= a+` is not a palindrome number`
        }
    }
}
}
   
function input() {
    a=document.getElementById("input").value

}
