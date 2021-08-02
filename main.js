guest=[];
function add(){
    guest_name=document.getElementById("guest-name").value;
    guest.push(guest_name);
    console.log(guest);
    document.getElementById("guests").innerHTML=guest;
}
    function revile(){
loop="";
len=guest.length;
for (i=0; i<len; i++)
{
    console.log(guest[i]);
    loop=loop+guest[i]+"<br>";
}
console.log(loop);
document.getElementById("guests_loop").innerHTML=loop;
    }
function sort1(){
guest.sort();
    console.log(guest);

    loop="";
len=guest.length;
console.log(len)
    for (i=0; i<len; i++)
{
    console.log(guest[i]);
    loop=loop+guest[i]+"<br>";
}
document.getElementById("sorted-list").innerHTML=loop;
}
function search(){
    searchlook=document.getElementById("search-bar").value;
    for (j=0; j<len; j++){
    if (guest[j] == searchlook){
        console.log(j)
document.getElementById("searchOP").innerHTML="Found 1 result";
}
else{
    document.getElementById("searchOP").innerHTML="Found 0 result";
}
    }
}