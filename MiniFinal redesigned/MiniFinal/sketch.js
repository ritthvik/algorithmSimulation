
var p=0;
var interval;

function setup() {
    createCanvas(1200,1200);
    var dis= document.getElementById("btn");
    dis.onclick = function(){
        if(p==op.length){
            alert("Spanning tree complete! \nAnd Minimum-Cost is :- "+min_cost);
            p=0;
        }
        else{
            interval = setInterval(putEdge(),3000);
        }
    }
    noLoop();
}

var m= 700;
var n= 50;
var i=1;

var nodes = [];
nodes.length = 15;
for(var k=0;k<15;k++){
    nodes[k] = [0,0];
}

function draw() {
    textSize(18);

    var putnodes = document.getElementById("nodein");
    putnodes.onclick = function(){
        var ln= op.length + 1;
        nodes[0][0]=m;
        nodes[0][1]=n;
        ellipse(m,n,30,30)
        text(i.toString(),m-5,n);
        m=m-100;
        n=n+80;
        for(var j=1;j<ln;j++){
            nodes[j][0]=m;
            nodes[j][1]=n;
            ellipse(m,n,30,30)
            i++;
            text(i.toString(),m-5,n);
            if(j%2==0){
                m=m-150;
                n=n+80;
            }
            else{
                m=m+150;
            }
        }
        stroke(255);
        m=200;n=30;i=1;
    }
}

function putEdge(){
    line(nodes[op[p][0]-1][0],nodes[op[p][0]-1][1],nodes[op[p][1]-1][0],nodes[op[p][1]-1][1]);
    var x = (nodes[op[p][0]-1][0]+nodes[op[p][1]-1][0])/2;
    var y = (nodes[op[p][0]-1][1]+nodes[op[p][1]-1][1])/2;
    var val = op[p][2].toString();
    text(val,x,y);
    p=p+1;
}

