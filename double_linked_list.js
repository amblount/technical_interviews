#11/30/17
#Ebay Data Science part 3

You are given a Double Link List with one pointer of each node pointing to the next node just like in a single link list. The second pointer however CAN point to any node in the list and not just the previous node. Now write a program in O(n) time to duplicate this list. That is, write a program which will create a copy of this list.

Let us call the second pointer as arbit pointer as it can point to any arbitrary node in the linked list.
#create a copy of the list
#create an empty container to hold the new list
# iterating through the existing list
#for each item in the list create 2 new node with a pointers 


list = [{next: 1, arb: 2 },{next: 2, arb: 0 }, {next: null, arb: 1 }]

function linkListCopy(list){
    var newList = [];
    list.forEach(function(obj){
        var temp = {};
        temp[next] = obj[next];
        temp[arb] = obj[arb];
        newList.push(temp);
    })
    return newList;    
}

1->2->3->4->null
1->4
2->4
3->1
4->2

1->2
1->4
2->3
2->4


