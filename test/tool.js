// 跨浏览器的兼容
function getStyle(node, cssStyle) {
    //  ?  表示判断    ：  表示否则   三元运算符
    return node.currentStyle ? nond.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
}


function elementsByClassName(node, classStr) {
    var nodes = node.getElementsByTagName('*');
    var arr = []; //用于存放符合条件的节点
    for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].className === classStr); {
            arr.push(nodes[i]);
        }
    }
    return arr;
}

// JS获取随机颜色函数，备用
//随机颜色，十六进制方法；
function getRandomColor() {
    var rand = Math.floor(Math.random() * 0xFFFFFF).toString(16);
    if (rand.length == 6) {
        return rand;
    } else {
        return getRandomColor();
    }
}

//限制拖拽 限制了出边框
function limitDrag(node) {
    node.onmousedown = function(ev) {

            var e = ev || window.event;
            /* 记录鼠标和被拖拽物体相对位置：
            水平方向的相对距离 = 当前鼠标的位置 - 当前被拖拽的物体距左的距离
            垂直方向的相对距离 = 当前鼠标的位置 - 当前被拖拽的物体距上的距离*/

            var offsetX = e.clientX - node.offsetLeft;
            var offsetY = e.clientY - node.offsetTop;

            document.onmousemove = function(ev) {
                var e = ev || Window.event;
                var l = e.clientX - offsetX;
                var t = e.clientY - offsetY;

                // 限制出界
                if (l <= 0) {
                    l = 0;
                }
                var windowWidth = document.documentElement.clientWidth || document.body.clientWidth;
                if (l >= windowWidth - node.offsetWidth) {
                    l = windowWidth - node.offsetWidth;
                }

                if (t <= 0) {
                    t = 0;
                }
                var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
                if (t >= windowHeight - node.offsetHeight) {
                    t = windowHeight - node.offsetHeight;
                }


                /* 当鼠标移动时，当前被拖拽物体的div的left值和top值
                当前鼠标位置 - 当时的相对位置*/
                node.style.left = l + "px";
                node.style.top = t + "px";
            }
        }
        // 取消拖拽
    document.onmouseup = function() {
        document.onmousemove = null;
    }

}



//  限制拖拽 没有限制是否出边框
function drag(node) {
    node.onmousedown = function(ev) {
            var e = ev || window.event;
            /* 记录鼠标和被拖拽物体相对位置：
            水平方向的相对距离 = 当前鼠标的位置 - 当前被拖拽的物体距左的距离
            垂直方向的相对距离 = 当前鼠标的位置 - 当前被拖拽的物体距上的距离*/

            var offsetX = e.clientX - node.offsetLeft;
            var offsetY = e.clientY - node.offsetTop;

            document.onmousemove = function(ev) {
                var e = ev || Window.event;
                node.style.left = e.clientX - offsetX + "px";
                node.style.top = e.clientY - offsetY + "px";
            }
        }
        // 取消拖拽
    document.onmouseup = function() {
        document.onmousemove = null;
    }
}