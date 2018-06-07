!function() {
	var $input = $('input')
	var promise = Promise.resolve()
	function next(url) {
			const t = url === '1'? 1000: 500

			promise = promise.then(() => {
				return new Promise((resolve) => {
					setTimeout(() => { 
						$input.val(url)
						resolve()
					},t)
				})
			})
		}
	
	$('.tab1').click(() => {
		next('1')
		
	})
	$('.tab2').click(() => {
		console.log(2)
		next('2')
	})
}.call()