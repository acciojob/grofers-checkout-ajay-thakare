const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	const prices = document.querySelectorAll('.prices');

	let arr = Array.from(prices);

	let total = 0;
	for(let ele of arr){
		total += Number(ele.textContent);
	}

	const tr = document.createElement('tr');
	tr.innerHTML = `<td id='ans' colspan='2'>${total}</td>`;

    const table = document.getElementsByTagName("table");

    table[0].append(tr);
	
};

getSumBtn.addEventListener("click", getSum);

