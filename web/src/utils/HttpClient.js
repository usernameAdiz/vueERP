//http://visionmedia.github.io/superagent/
import request from 'superagent'
import router from '../router/index'
import $ from 'jquery'

// import jsonp from 'superagent-jsonp';
// http://10.3.133.74
const LOCAL_SERVER = ' http://localhost:888/';

const DEV_SERVER = '';
const PRO_SERVER = 'http://10.3.133.51:888/';

function getUrl(path) {
    if (path.startsWith('http')) {
        return path;
    }
    return `${PRO_SERVER}${path}`;
}

const errorHandler = (err) => {
    if(err.response && err.response.status == 401 && JSON.parse(err.response.text).msg == 'unauthorized'){
        router.push({name: 'login'})
        return false;
    }
    var str = err.response.status
    str += ' - '
    str += err.response.statusText
    str += '<br/>请求路径：<br/>'
    str += err.response.error.url
    $.alert(str, '请求错误');
}

const HttpClient = {
    get: (path, query) => new Promise((resolve, reject) => {
        $('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').show();
        var req = request
            .get(getUrl(path))
            .query(query)
            .end((err, res) => {
                $('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').hide();
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });
    }),

    post: (path, formdata, query) => new Promise((resolve, reject) => {
        $('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').show();
        request
            .post(getUrl(path))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .query(query)
            .send(formdata)
            .end((err, res) => {
                $('.dk-spinner.dk-spinner-three-bounce, dk-spinner-mask').parent('div').hide();
                if (err) {
                    reject(err);
                } else {
                    resolve(res.body);
                }
            });
    })
};

export default HttpClient;
