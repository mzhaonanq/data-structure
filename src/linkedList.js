const createNode = (value) =>{
    return {
        data:value,
        next:null
    }
}

const appendNode = (node,value)=>{
    while(node.next !== null){
        node = node.next
    }
    const newNode = createNode(value)
    node.next = newNode
    return newNode   
}

const rootNode = createNode(10)
const node2 = appendNode(rootNode,20)
const node3 = appendNode(rootNode,30)  
const node4 = appendNode(rootNode,40)  

// console.log(node2)
// console.log(node3)
// console.log(node4)
// console.log(rootNode)

const removeNode = (node,nodeList)=>{
    while(nodeList.next!==node){
        nodeList = nodeList.next
    }
    nodeList.next = node.next
}

removeNode(node3,rootNode)
console.log(rootNode)

const travelList = (nodeList,fn) =>{
    while(nodeList!==null){
        fn(nodeList)
        nodeList = nodeList.next
    }
}

// travelList(rootNode,(node)=>{console.log(node.data)})

const insertNode = (nodeList,node,value) =>{
    while(nodeList!==node){
        nodeList = nodeList.next
    }
    const restNode = nodeList.next
    nodeList.next = createNode(value)
    nodeList.next.next = restNode
}
insertNode(rootNode,node2,30)
console.log(rootNode)