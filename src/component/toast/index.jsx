import './index.less'

let dom, timer;
export default (msg, delay = 2000) => {
    if (dom == null) {
        dom = document.createElement('div');
        dom.setAttribute('class', 'toast');
        document.body.appendChild(dom);
    }
    if (timer) {
        clearTimeout(timer);
    }
    let html = `${msg}`;
    dom.innerHTML = html;
    timer = setTimeout(() => {
        document.body.removeChild(dom);
        dom = null;
    }, delay);
}
