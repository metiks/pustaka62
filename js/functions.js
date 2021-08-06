function viewArticle(pdf_file, team_names, ppt_link){
	parent.document.getElementById("pdf_load").src = pdf_file;
	parent.document.getElementById("team_load").innerHTML = team_names;
	parent.document.getElementById("ppt_load").innerHTML = ppt_link;
}

function loadTeam(kelompok){
    team_rubrik = teamDesc[kelompok][1];
	team_lap_file = teamDesc[kelompok][2];

    for (var i=0; i<=kelompok; i++) {
		detailTeam = "<H3>PENULIS</H3>" + "<ul>";

	 	jum_team = anggota[kelompok].length;

	 	for (var j=0; j<jum_team; j++) {
			detailTeam = detailTeam + "<li>" + anggota[kelompok][j] ; 		 	
	 	}
	 	detailTeam = detailTeam + "</ul>";
	}
	
   	file_loc = "https://drive.google.com/file/d/" + team_lap_file + "/preview";
	ppt_loc =  "materi/PPT/" + team_rubrik + "Kelompok" + kelompok + ".pptx";
	ppt_link =  '<a href="'+ppt_loc+'">'+'File Presentasi'+'</a>';	
	window.alert(teamDesc[kelompok][2]);
  	return viewArticle( file_loc, detailTeam, ppt_link);
}

