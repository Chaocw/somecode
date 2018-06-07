function json(url,data,callbackName='callback') {
    url = url + '?callback=' + callbackName
    for(let key of Object.keys(data)){
        url += '&' + key + '=' data[key]
    }
    let script =document.createElement('script')
    script.src = url
    document.body.appendChild(script)
    return new Promise(reslove => {
        window[callbackName] = (data) => {
            reslove(data)
            document.body.removeChild(script)
        }
    })
}


jsonp('http://photo.sina.cn/aj/index', {page: 1, cate: 'recommend'}, 'jsoncallback')
.then(data => {
  console.log(data)
})



//       function jsonp(url = '', data = {}, callbackName = 'callback') {
//             var queryString
//             var _url
//             var _callbackFunc = 'fn'+jsonp.randomString()

//             data[callbackName] = _callbackFunc
//             queryString = jsonp.stringifyQueryString(data)
//             _url = `${url}${''.includes.call(url, '?') ? '&' : '?'}${queryString}`

//             if (!jsonp.isValidateURL(_url)) {
//                 throw new URLError('invalidate url')
//             }
//             return jsonp.insertScript(_url, _callbackFunc)
//         }
//         jsonp.insertScript = function insertScript(url, cbfunc) {
//             window[cbfunc] = function callback(data) {
//                 jsonp.reponseData = data   
//             }
//             return new Promise(function(reslove, reject) {
//                 var scriptEl = document.createElement('script')
//                 var id = cbfunc + '_' + jsonp.randomString()
//                 scriptEl.type = 'application/javascript'
//                 scriptEl.src = url
//                 scriptEl.id = id
//                 scriptEl.async = true
//                 scriptEl.onerror = function() {
//                     reject('error')
//                     jsonp.clearCallback(id)
//                 }
//                 scriptEl.onload = function() {
//                     reslove(jsonp.reponseData)
//                     jsonp.clearCallback(id)
//                 }
//                 document.body.appendChild(scriptEl)
//             })
//         }


// function _jsonp(url='', data = {}, callbackName = 'callback') {
//     let queryString = this.getQueryString(data)
// }

// _jsonp.prototype = {
//     insertScript(url, cb) {
//         return new Promise(reslove => {
//             var script = document.createElement('script')
//             var id = cb + '_' + this.randomString()
//             script.src = url
//             script.id = id

//         })
//     },
//     getQueryString(data) {
//         if(typeof data !== 'object') {
//             return ''
//         }
//         let arr = []
//         for(let key of Object.keys(data)){
//             arr.push(`${key}=${data[key]}`)
//         }
//         return arr.join('&')
//     },
//     isValidURL(url) {
//         if(!url) return false;
//         var reg = /^((http|https)?):\/\/([\w-]+(\.[\w-]+)*\/?)+(\?([\w\-\.,@?^=%&:\/~\+#]*)+)?$/
//         return reg.test(url)
//     },
//     getUrl() {

//     },
//     randomString() {
//         return Math.random().toString(16).substr(2)
//     },
//     clearCallback(id) {
//         let cbfunc = ''.split.call(id, '_')[0]
//         delete window[cbfunc]
//         delete jsonp.reponseData
//         document.body.removeChild(document.querySelector('#'+id))
//     }
// }













