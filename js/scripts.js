var namesFemale = ['Asia', 'Kasia', 'Ola', 'Sylwia', 'Joanna'];
var namesMale = ['Darek', 'Jarek', 'Piotr', 'Jacek', 'Mirek'];

var arr = namesFemale.concat(namesMale);
console.log(arr);

arr.splice(3, 0, 'Oliwia');
console.log(arr);

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);
console.log(allNames);

var newName = 'Marian'

if (allNames.indexOf(newName) === -1)
	var x = allNames.push(newName);	 
	else 
		document.write('Niepoprawne dane!');
	
	console.log(allNames);
