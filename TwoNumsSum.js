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
    let result = new ListNode();
    //restTemp为辅助指针，指向result链表末尾的指针，用于给链表
    //末尾添加节点
    let resTemp = result; 
    //进数nextSum
    let nextSum = 0;
    //标识相加进1
    let flag = 0;
    //遍历l1,l2
    while( l1 && l2 ){
        //sum为两链表对应的两数之和
        let sum = 0;
        if(flag == 0){
            sum = l1.val + l2.val;
            result.val = sum % 10;
            nextSum = sum / 10;
            flag++;
        }else{
            sum = l1.val + l2.val + nextSum;
            resTemp.next = new ListNode(sum % 10);
            resTemp = resTemp.next;
            nextSum = sum / 10;
        }
        //指针后移
        l1 = l1.next;
        l2 = l2.next;
        
        
    }
    //判断l1 l2是否遍历完
    while(l1){
        let sum = l1.val + nextSum;
        resTemp.next = new ListNode(sum % 10);
        resTemp = resTemp.next;
        nextSum = sum / 10;
        l1 = l1.next;
    }
    while(l2){
        let sum = l2.val + nextSum;
        resTemp.next = new ListNode(sum % 10);
        resTemp = resTemp.next;
        nextSum = sum / 10;
        l2 = l2.next;
    }
    
    return result;


};


