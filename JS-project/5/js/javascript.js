function nums() {
	let a = 3;
	for (let i = 0; i < a; i++) {
		console.log(typeof i);
		console.log(i);
	}
	for (let i = 0; i < a; i++) {
		if (i == 2) {
			alert("Число " + i);
		}
	}
}

nums();

function bools() {
	let outside = confirm("Пойдешь на улицу?");
	if (outside) {
		alert("lets go");
	} else {
		alert("sad");
	}
}

bools();