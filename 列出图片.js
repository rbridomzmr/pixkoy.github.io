x='';i=prompt('请选择最小像素');
for(n=0;n<document.images.length;n++){
  if(document.images[n].height>i){
    x+='<tr><td><img src='+document.images[n].src+'></td></tr>';}}
    if(x){w=window.open();
    w.document.write ('<table border=0 cellpadding=10>'+x+'</table>');
    w.document.close();}
    else{alert('No images!');}