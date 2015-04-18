var easyRead = {
    /**
     * 配置
     */
    config: {
        //搜索图书
        searchUrl: 'https://api.douban.com/v2/book/search'
    },

    /**
     * 获取选中的文本
     * @return {string}
     */
    getSelectText: function() {
        return window.getSelection().toString().trim();
    },

    /**
     * 查询书本的资料
     * @param url 要发送的查询地址
     * @param qText 要查询的参数
     * @param isGet 是否是 get 请求
     * @return {string}
     */
    query: function(url,qText,isGet) {
        var xhr = new XMLHttpRequest(),
            response;
        if(isGet) {
            url += '?' + 'q=' + encodeURIComponent(qText);
            xhr.open("get",url,true);
            xhr.send(null);
        }
        else {
            xhr.open("post",url,true);
            xhr.send(qText);
        }
        xhr.onreadystatechange = function() {
            if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                response = JSON.parse(xhr.responseText);
            }
            else {
                reponse = false;
            }
            console.log(response);
        }
    },

    /**
     *初始化方法
     */
    init: function() {
        var doc = document;
        doc.addEventListener('mouseup',function() {
            easyRead.query(easyRead.config.searchUrl,easyRead.getSelectText(),true);
        },true);
    }
};

easyRead.init();
