function recogerPeliculas() {
    peliculasTR = document.getElementsByTagName('table')[0].getElementsByTagName('tr')
    str='[';
    for (i=1;i<peliculasTR.length;i++) {
		estudio=peliculasTR[i].children[2].textContent;
		ano= peliculasTR[i].children[4].textContent.replace('^','');
		ganancia= peliculasTR[i].children[3].textContent.replace(/,/g,'');
		titulo = peliculasTR[i].children[1].textContent.replace(/'/,'');
	      str += "[" + ano
      str += "," + ganancia
	  str += ","+"'"+estudio+"'"
	  str+= ","+ "'" + titulo + " "+  ganancia + "'"
	  +"],"
      str += "\n"
    }
    str += "[,,]]"
    return str;	
}
