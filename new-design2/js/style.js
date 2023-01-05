function viewlist(){
	var mainEl = document.getElementById("listview");
	mainEl.innerHTML = "";
	
	var stringtyp = JSON.parse('{name: "kapil", age: 27}');
	console.log(stringtyp);
	var d = [{
			id:1,
			image: "asset/28.jpg",
			title: "Punjabi Suit",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			hobies: ["Cricket", "Chess", "Reading books"]
	},
	{
			id:2,
			image: "asset/29.jpg",
			title: "Punjabi Suit",
			desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
			hobies: ["Chess", "Movies", "Dance"]
	},
	];
	

	for(var i = 0; i<=1; i++){
		var el = document.createElement("div");
		el.setAttribute("class", "box");
			
		var innerEl = document.createElement("div");
		innerEl.setAttribute("class", "inner-box");
			
			var img = document.createElement("img");
			img.setAttribute("src", d[i].image);
			innerEl.appendChild(img);
			el.appendChild(innerEl);
			
			var innercnt = document.createElement("div");
			innercnt.setAttribute("class", "inner-box");
			
			var h2 = document.createElement("h2");
			h2.innerHTML = d[i].title;
			innercnt.appendChild(h2);
			
			var p = document.createElement("p");
			p.innerHTML = d[i].desc;
			innercnt.appendChild(p);
			el.appendChild(innercnt);
			
			var ul = document.createElement("ul");
			for(var j=0; j < d[i].hobies.length; j++){
				var li = document.createElement("li");
				li.innerHTML = d[i].hobies[j];
				ul.appendChild(li);
			}
			innercnt.appendChild(ul);
			var mainEl = document.getElementById("listview");
			mainEl.appendChild(el);
	}
}
