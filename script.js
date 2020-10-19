let drugs = ["doliprane","efferalgan","dafalgan","levotyrhox","abilify","lysopaine"];

function display(name,isActivated){
	console.table(name+" ab :: "+ isActivated);
	for(let i = 0 ; i < name.length; i++){
		let toDisplay = document.getElementById(name[i]);
		toDisplay.style.display = isActivated[i];
	}

}

function changeBackground(){
	let toChange = document.getElementById('user_card');
	toChange.style.padding = '0px';
	toChange.style.backgroundColor = 'white';
}


function filterMenu(){
	let toDrill = document.getElementById('toDrill');
	let startDisplayFilter = document.getElementById('startDisplayFilter');
	let recyclerView = document.getElementById('recyclerView');
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


function recyclerView(isFiltrable = false, searching = []){
	if(isFiltrable){
		drugs = searching;
		console.table(drugs)
	}
	for (let i =  0; i < drugs.length; i++) {
		let divItem = document.createElement("div");
		let img = document.createElement("img");
		let p = document.createElement("p");
		let recycler = document.getElementById("recyclerView");
		let drug = drugs[i];

	   divItem.setAttribute("id", "div"+i);
	   divItem.classList.add("bloc");
	   p.innerHTML = drug;
	   img.src = "img/"+drug.toLowerCase()+".jpg";
	   recycler.appendChild(divItem);
	   divItem.appendChild(img);
	   divItem.appendChild(p);

	   divItem.onclick = function () {
			let idItem = this.id.split('');
			console.log(idItem[3]);

	   		moreDetailsRecycler(idItem[3]);
	   }
	}
	
}


function deleteChild(){
	let parent = document.getElementById('recyclerView').childElementCount;
	if(parent > 1){
		for (var i = 0; i < drugs.length; i++) {
			let tempDiv = document.getElementById('div'+i);
			tempDiv.remove();
		}
	}else if(parent == 1){
		document.getElementById("div0").remove();
	}

}

function resultView(searching = ""){
		if(drugs.includes(searching)){
			for (let i = 0; i < drugs.length; i++) {
			document.getElementById("div"+i).remove();
		}

		let divItem = document.createElement("div");
		let img = document.createElement("img");
		let p = document.createElement("p");
		let recycler = document.getElementById("recyclerView");

		   divItem.setAttribute("id", "div0");
		   divItem.classList.add("bloc");
		   p.innerHTML = searching;
		   img.src = "img/"+searching.toLowerCase()+".jpg";
		   recycler.appendChild(divItem);
		   divItem.appendChild(img);
		   divItem.appendChild(p);

		   divItem.onclick = function () {
				let idItem = this.id.split('');
				console.log(idItem[3]);

		   		moreDetailsRecycler(0);
		   }
		}else{
			deleteChild();
			recyclerView();
		}
	
		
	
}


function moreDetailsRecycler(id = 0, name = ""){
	let text =  drugs[id];
	let details = document.getElementById('details');
	let imageDetails = document.getElementById('imageDetails');
	let textDetails = document.getElementById('textDetails');
	let titleDetails = document.getElementById('titleDetails');
	details.style = "block";
	imageDetails.src = "img/"+text+".jpg";
	titleDetails.innerHTML = text ;
	textDetails.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec nulla non leo tristique commodo. Suspendisse quis massa pharetra, tincidunt odio non, porta nulla. Vestibulum sit amet placerat lacus :"+text;
	display(['login','menu','details','home','camera','myAccount'],['none','block','block','none','none','none']);


}


function search(){
	let searchDrug = document.getElementById('searchDrug').value;
	let result = [searchDrug];
	resultView(searchDrug);


}