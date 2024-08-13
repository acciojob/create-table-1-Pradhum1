function insert_Row() {
    //Write your code here
	let table = document.getElementById('sampleTable');
	let Btn = document.querySelector('input');
	btn = addEventListener("click", addRow);

	function addRow(){
		let row = table.insertRow[0];
		row.insertCell[0].innerHTML = NewCell1;
		row.insertCell[1].innerHTML = NewCell2;
	}

	
  
  
}
