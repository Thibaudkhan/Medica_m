let drugs = ["doliprane","efferalgan","dafalgan","levotyrhox","abilify"];


function display(name,isActivated){
	console.table(name+" ab :: "+ isActivated);
	for(var i = 0 ; i < name.length; i++){
		var toDisplay = document.getElementById(name[i]);
		toDisplay.style.display = isActivated[i];
	}

}

function changeBackground(){
	var toChange = document.getElementById('user_card');
	toChange.style.padding = '0px';
	toChange.style.backgroundColor = 'white';
}


function filterMenu(){
	var toDrill = document.getElementById('toDrill');
	var startDisplayFilter = document.getElementById('startDisplayFilter');
	var recyclerView = document.getElementById('recyclerView');
	if(startDisplayFilter.textContent == 'fermer'){
		toDrill.style.display = 'none';
		startDisplayFilter.innerHTML = 'ouvrir'
		recyclerView.style.marginTop = '90px';
	}else{
		toDrill.style.display = 'block';
		recyclerView.style.marginTop = '270px';
		startDisplayFilter.innerHTML = 'fermer';


		console.log('ok');
	}
}


function recyclerView(){

	

	for (var i =  0; i < drugs.length; i++) {
		var divItem = document.createElement("div");
		var img = document.createElement("img");
		var p = document.createElement("p");
		var recycler = document.getElementById("recyclerView");
		var drug = drugs[i];
	   /*var text = document.createTextNode("Tutorix is the best e-learning platform");
	   tag.appendChild(text);
	   var element = document.getElementById("new");
	   element.appendChild(tag);*/

	   divItem.setAttribute("id", "div"+i);
	   divItem.classList.add("bloc");
	   p.innerHTML = drug;
	   img.src = "img/"+drug.toLowerCase()+".jpg";
	   recycler.appendChild(divItem);
	   divItem.appendChild(img);
	   divItem.appendChild(p);

	   divItem.onclick = function () {
			var idItem = this.id.split('');
			console.log(idItem[3]);

	   		moreDetailsRecycler(idItem[3]);
	   }
	}
	
}

function moreDetails(wut){
	var children;
	var text;
	if (wut.hasChildNodes()) {
	   children = wut.childNodes;
		text = children[3].textContent;
		console.log(children[3].textContent);
	}
	var details = document.getElementById('details');
	var imageDetails = document.getElementById('imageDetails');
	var textDetails = document.getElementById('textDetails');
	var titleDetails = document.getElementById('titleDetails');
	details.style = "block";
	imageDetails.src = "img/"+text.toLowerCase()+".jpg";
	titleDetails.innerHTML = text ;
	textDetails.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec nulla non leo tristique commodo. Suspendisse quis massa pharetra, tincidunt odio non, porta nulla. Vestibulum sit amet placerat lacus :"+text;
	display(['login','menu','details','home'],['none','block','block','none']);


}

function moreDetailsRecycler(id = 0, name = ""){
	var text =  drugs[id];
	var details = document.getElementById('details');
	var imageDetails = document.getElementById('imageDetails');
	var textDetails = document.getElementById('textDetails');
	var titleDetails = document.getElementById('titleDetails');
	details.style = "block";
	imageDetails.src = "img/"+text+".jpg";
	titleDetails.innerHTML = text ;
	textDetails.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec nulla non leo tristique commodo. Suspendisse quis massa pharetra, tincidunt odio non, porta nulla. Vestibulum sit amet placerat lacus :"+text;
	display(['login','menu','details','home'],['none','block','block','none']);


}


function search(){
	var searchDrug = document.getElementById('searchDrug').value;

	console.log("your research "+searchDrug);


}