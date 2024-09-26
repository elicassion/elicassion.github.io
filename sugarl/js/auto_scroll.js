function atari_1() {
    document.getElementById('atari').scrollIntoView();    
};

function atari_2() {
	window.scrollBy(0, document.getElementById('main-video').scrollHeight*3.0/8);
}

function atari_3() {
	window.scrollBy(0, document.getElementById('main-video').scrollHeight*2.0/8);
}

function wipe() {
    document.getElementById('wipe').scrollIntoView();
};

function door() {
    document.getElementById('door').scrollIntoView();
};

function failure_case() {
    document.getElementById('failure_case').scrollIntoView();
};

const pause = _ => new Promise(resolve => setTimeout(resolve, _));

INTERVAL = 15000
async function loopScroll() {
	atari_1();
	await pause(INTERVAL);
	atari_2();
	await pause(INTERVAL);
	atari_3();
	await pause(INTERVAL);
	wipe();
	await pause(INTERVAL);
	door();
	await pause(INTERVAL);
	failure_case();
}
setTimeout(loopScroll, 5000);
setInterval(loopScroll, INTERVAL*6);