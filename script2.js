function add_list(){
    
    var nm=document.getElementById("list").value;
    if(localStorage.getItem("list")==null){
        var list=[];
    }
    else{
        var list= JSON.parse(localStorage.getItem("list"));
    }
    
    
    list.push(
        {
            name:nm,
        }
    )
    
    localStorage.setItem("list",JSON.stringify(list));
    document.getElementById("list").value="";
     document.onload(get_list());
     
    
}
function get_list(){
    if(localStorage.getItem("list")==null){
        var list=[];
    }
    else{
        var list= JSON.parse(localStorage.getItem("list"));
    }
    display_list(list);
   
}
function display_list(list){
    
    var data = "";
    data += "<tr>";
    data += "<th> Number </th>";
    data += "<th> List </th>";
    data += "<th> Action </th>";
    data += "</tr>";

    list.forEach((element,i) => {
        data+="<tr>"
         data+= `<td>${i+1}</td>`
            data+="<td>"
            data+=element.name
            data+="</td>"
           data+= `<td><i class="fa fa-trash-o" style="font-size:24px" onclick="delete_list(${i})"></i>&nbsp;<i class="fa fa-edit" style="font-size:20px" onclick="edit_list(${i})"></i></td>`
           data+="</tr>"
                    
        
    });
    document.getElementById("mytable").innerHTML=data;
    
          
}
function delete_list(id){
    if(localStorage.getItem("list")==null){
        var list=[];
    }
    else{
        var list= JSON.parse(localStorage.getItem("list"));
    }
    list.splice(id,1); // to delete
    localStorage.setItem("list", JSON.stringify(list));
    get_list();


}
function edit_list(id){

    if(localStorage.getItem("list")==null){
        var list=[];
    }
    else{
        var list= JSON.parse(localStorage.getItem("list"));
    }
   document.getElementById("list").value=list[id].name;
   document.getElementById("submit").innerText="save changes"
   document.getElementById("submit").onclick = function () {
    var n = document.getElementById("list").value;
    list[id].name=n;
    localStorage.setItem("list",JSON.stringify(list));
    
     document.getElementById("submit").innerText="Add List"
     get_list();
    document.getElementById("list").value="";
}}
