define(
	["matematica"],
	matematica => {
		(() => {
			document.querySelector('.btn').addEventListener('click', () =>  {
            const number1 = document.querySelector('#number1').value;
            const number2 = document.querySelector('#number2').value;              
            alert(matematica.soma(number1, number2));
			});
		})();
	}
);