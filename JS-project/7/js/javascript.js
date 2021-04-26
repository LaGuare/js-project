function min(a, b) {
	if (a < b) return a;
	else return b;
}

alert ("Наименьшее число = " + min(2, 5));
console.log (min(3, -1) == -1);
alert ("Наименьшее число = " + min(1, 1));
console.log (min(4, 5) == 5);
alert ("Наименьшее число = " + min(7, 10));
console.log (min(-4, -3) == -3);
alert ("Наименьшее число = " + min(8, 6));