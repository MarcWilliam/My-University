/*
async function getTrace() {
	let pageContent
	try {
		pageContent = await fetch('https://trace.risingstack.com', {
			method: 'get'
		})
	} catch (ex) {
		console.error(ex)
	}
	console.log(pageContent);
	return pageContent
}

getTrace()
	.then()
*/

const timeout = function (delay) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, delay)
	})
}



async function timer() {
	console.log('timer started' + new Date());
	await Promise.resolve(timeout(2000));
	console.log('timer finished' + new Date());
}
timer();