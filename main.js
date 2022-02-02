function opennavbar(v) {
    v = v.replace('24', '');
    (!document.getElementById(v).classList.contains('show')) ? document.getElementById(v).classList.add('show'): document.getElementById(v).classList.remove('show');
    if( v == 'latest'){
      document.getElementById('games').classList.remove('show');
    } else if ( v == 'category'){
      document.getElementById('latest').classList.remove('show');
    }
  }
