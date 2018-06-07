function deepClone(object) {
	var newObj = {}
	for(let key of Object.keys(object)){
		if(object[key] instanceof Object){
			if(object[key] === object){
				newObj[key] = newObj
			}else{
				newObj[key] = deepClone(object[key])
			}
		}else{
			newObj[key] = object[key]
		}
	}
	return newObj
}

// obj = {a:1,b:2,c:3,d:{e:4,f:null}}
// obj.d.f = obj.d
// var obj2 = deepClone(obj)

// var arr =[1,2,3]
// arr.push(arr)

// var arr2 = deepClone(arr)