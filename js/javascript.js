

// +---+
// | 1 |
// +---+
//1
let tag =
 document.getElementById('tag-line');
//2
let elements =
 document.querySelectorAll('.bg-main-content h2');
 
//3
let collect = tag.innerHTML + "\n-------------------------\n";	

//4
for(let r = 0; r < elements.length; r++)
{
	collect = collect + elements[r].innerHTML + "\n";
}

alert(collect);

// +---+
// | 2 |
// +---+

//1
let boxes = document.querySelectorAll('.bg-main-content .box');

//2
let box = boxes[12];

//3
let name = box.querySelector('h2').innerText;
let collectA = name +  "\n-------------------------\n";	

let text = box.querySelectorAll('p');
for(let i = 0; i < text.length; i++){
	collectA = collectA + text[i].innerText + "\n\n";
}

//4
alert(collectA);
