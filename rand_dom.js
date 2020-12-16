// randomizer function
const counter = document.getElementById('counter');
const btnstop = document.getElementById('btn-stop');
const btnstart = document.getElementById('btn-start');
const btnPlay = document.getElementById('replay');
let interval;
let min = 1;
let max = 37;
let timer = 50;
let rnum;
const lotNum = [];
btnPlay.style.display = 'none';
btnstop.disabled = true;


const stopCount = (e) => {
	clearInterval(interval);
	numbersCreator(rnum);
	btnstart.disabled = false;
}

const startCount = () => {
	tickTick();
	btnstart.disabled = true;
	btnstop.disabled = false;
}

function numbersCreator(n) {
	if (!lotNum.includes(n)) {
		lotNum.push(n);

		const userNumbers = document.getElementById('userNumbers');
		let li = document.createElement('li');
		li.textContent = n;
		userNumbers.appendChild(li);
	} else {
		Swal.fire(
			'Duplicate Entry',
			`${n} is already included, press start to resume`,
			'info'
		)
	}
	if (lotNum.length === 6) {
		Swal.fire(
			'All six numbers are in.',
			'Fingers crossed!',
			'success'
		);
		btnstart.style.display = 'none';
		btnstop.style.display = 'none';
		btnPlay.style.display = 'block';
		counter.style.color = '#4d4d4d';
		counter.style.opacity = 0.7;

	}
}

const randomize = () => {
	rnum = Math.ceil(Math.random() * (max - min) + 1);
	return rnum;
}

function tickTick() {
	interval = setInterval(showNumbers, timer);
}

function replay() {
	window.location.reload();
}

function showNumbers() {
	counter.textContent = randomize();
}

btnstop.addEventListener('click', stopCount);
btnstart.addEventListener('click', startCount);
btnPlay.addEventListener('click', replay);
