const createNode = (value)=>{
    return{
        data : value,
        children: null,
        parent:null
    }
}

const mainTree = createNode(0)
console.log(mainTree)

const appendChild = (tree,value)=>{
    const newNode =createNode(value)
    tree.children = tree.children || []
    tree.children.push(newNode)
    newNode.parent = tree
    return newNode
}
const node2 =appendChild(mainTree,10)
appendChild(mainTree,20)
appendChild(mainTree,30)
appendChild(mainTree,40)
appendChild(mainTree,50)
console.log(mainTree)

appendChild(node2,11)
appendChild(node2,12)
const node13 = appendChild(node2,13)
appendChild(node2,14)
appendChild(node2,15)
console.log(mainTree)

const travelTree = (tree,fn)=>{
    fn(tree)
    if(!tree.children){return}
    for(let i = 0;i<tree.children.length;i++){
        travelTree(tree.children[i],fn)
    }
}

travelTree(mainTree,(node)=>{console.log(node.data)})

const removeChild = (tree,node)=>{
    if(tree===node) {tree===null}
    const siblings = node.parent.children
    let index = siblings.indexOf(node)
    siblings.splice(index,1)
}

removeChild(mainTree,node13)
console.log(mainTree)