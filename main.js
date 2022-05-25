function opennavbar(v) {
  v = v.replace('24', '');
  (!document.getElementById(v).classList.contains('show')) ? document.getElementById(v).classList.add('show'): document.getElementById(v).classList.remove('show');
  if( v == 'latest'){
    document.getElementById('games').classList.remove('show');
  } else if ( v == 'category'){
    document.getElementById('latest').classList.remove('show');
  }
}
  window.onload = codeAddress;

  function codeAddress() {
    var list = document.getElementsByClassName("TCC");
    var offset = -(new Date().getTimezoneOffset() / 60);

    for ( var i = 0; i < list.length; ++i ){  debugger
      var index= list[i].innerHTML.indexOf(':');
      var orig = list[i].innerHTML.substring(index-2,index);
      var newtime = parseInt(orig) + offset;
      if(newtime > 23) {newtime = newtime - 24;}
      list[i].innerHTML = list[i].innerHTML.replace(orig,newtime);
    }
}
