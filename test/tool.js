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