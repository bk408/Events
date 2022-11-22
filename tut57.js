function toggleHide(params) {
  let  btn = document.getElementById('btn');
  let  para = document.getElementById('para');
  if(para.style.display != 'none'){               // !=  it means is equal to  //
  para.style.display = 'none';
}

else {
    para.style.display = 'block';
}
}


let  para = document.getElementById('para');
para.addEventListener('mouseover', function run(){
      alert('Mouse Inside');                // here we can use console.log also if we want to check in console otherwise alert is ok  //
      
});

para.addEventListener('mouseout', function run(){
    alert('Mouse now went outside');
    co
});