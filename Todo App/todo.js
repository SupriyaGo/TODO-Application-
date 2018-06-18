//Create Element Another Process

// var h=document.createElement('h1')
// var myValue=document.createTextNode('Hello World')
// h.appendChild(myValue)
// document.querySelector('h1').appendChild(h)


var ul=document.getElementById('list')
var li;



var addButton=document.getElementById('add')
addButton.addEventListener('click',addItem);

var removeButton=document.getElementById('remove')
removeButton.addEventListener('click',removeItem)

var removeButton=document.getElementById('removeAll')
removeButton.addEventListener('click',removeAllItem)

function addItem(){
   var input=document.getElementById('input')
   var item=input.value;
   ul=document.getElementById('list')
   var textnode=document.createTextNode(item)

    if (item==='') {
        return false;
    }else{
        //create list
        li=document.createElement('li')
        //create checkbox
        var checkBox=document.createElement('input')
        checkBox.type='checkbox'
        checkBox.setAttribute('id','check')
        //create label
        var label=document.createElement('label')
        //add all elements o web page
        //ul.appendChild(label);
        li.appendChild(checkBox);
        li.appendChild(label);
        label.appendChild(textnode);
        
        ul.insertBefore(li,ul.childNodes[0]);
        
        setTimeout(() => {
            li.className=' visual';
        }, 2);
        input.value='';


    }
    
}
//for checking purpose
// function removeItem(){
//     console.log("remove button clicked");
    
// }

function removeItem(){
        li=ul.children
         for (let index = 0; index < li.length; index++) {
             while (li[index] && li[index].children[0].checked ) {
                 ul.removeChild(li[index])
             }   
         } 
    }
    function removeAllItem(){
        li=ul.children
        for (let index = 0; index < li.length; index++) {
               ul.remove(li[index])    
       }
     }