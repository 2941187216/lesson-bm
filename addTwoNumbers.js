/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //创建结果链表
    let node = new ListNode('head');
    //辅助指针temp
    let temp = node ;
    let sum = 0;
    //进位数n
    let  n = 0;
    //遍历l1 l2
    while( l1 || l2 ){
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        sum = n1 + n2 + n;
        temp.next = new ListNode( sum % 10 );
        //移动辅助指针
        temp = temp.next;
        //计算得出是否要进位
        n = parseInt( sum / 10 );
        //指针后移
        if(l1) l1 = l1.next
        if(l2) l2 = l2.next
    }
    if( n > 0 ) temp.next = new ListNode(n);
    return node.next;


};