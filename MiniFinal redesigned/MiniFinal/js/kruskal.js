
var arr=[];

var min_cost=0;

var op = [];

function fn1(){

    var n = document.getElementById("text1").value;

    arr.length=n;
    for(var i=0;i<n;i++){
        arr[i]=[];
        arr[i].length=n;
        for(var j=0;j<n;j++){
            arr[i][j]=0;
        }
    }
    console.table(arr);

    op.length= n-1;
    for(i=0;i<n-1;i++){
        op[i]=[];
        op[i].length=3;
        for(j=0;j<3;j++){
            op[i][j]=0;
        }
    }

    /*for(var i=1;i<=n;i++){
        for(var j=i+1;j<=n;j++){
            arr[i-1][j-1]=arr[j-1][i-1]=parseInt(prompt("(If no edge enter 999)Enter edge between "+i+" & "+j));
        }
    }*/

    var k=0;
    for(var i=1;i<=n;i++){
        for(var j=i+1;j<=n;j++){
            var tkip = document.getElementById("aleds");
            if(k==0){
                tkip.innerHTML = "<label>(If no edge enter 999)Enter edge between "+i+" & "+j+"</label>:-&nbsp<input id=\"edge"+k+"\" type=\"number\"><br>";
            }
            else{
                tkip.innerHTML += "<label>(If no edge enter 999)Enter edge between "+i+" & "+j+"</label>:-&nbsp<input id=\"edge"+k+"\" type=\"number\"><br>";
            }
            k++;
        }
    }
    tkip.innerHTML += "<button id=\"sved\">Save Edges</button>";

    var adder = document.getElementById("sved");
    adder.onclick = function(){
        k=0;
        for(var i=1;i<=n;i++){
            for(var j=i+1;j<=n;j++){
                arr[i-1][j-1]=arr[j-1][i-1]=parseInt(document.getElementById("edge"+k).value);
                k++;
            }
        }
        console.table(arr);

        var i,j,u,v,min;
        var parent=[];
        parent.length=n;
        for(i=0;i<n;i++){
            parent[i]=i;
        }

        var a=0;
        while(true){
            min=999;
            for(i=0;i<n;i++){
                for(j=0;j<n;j++){
                    if(arr[i][j]!=999 && arr[i][j]!=0 && arr[i][j]<min){
                        min=arr[i][j];
                        u=i;
                        v=j;
                    }
                }
            }

            if(min==999){
                break;
            }
            arr[u][v]=arr[v][u]=999;
        
            if(parent[u]==u && parent[v]==v){
                parent[v]=u;
                op[a][0]=u+1;
                op[a][1]=v+1;
                op[a++][2]=min;
                min_cost+=min;
            }
            else{
                if(parent[u]==u || parent[v]==v){
                    if(parent[u]!=u){
                        let p=u;
                        while(parent[p]!=p){
                            p=parent[p];
                        }
                        if(p!=v){
                            if(parent[v]<parent[u]){
                                parent[u]=parent[v];
                            }
                            else{
                                parent[parent[v]]=u;
                                parent[v]=u;
                            }
                            op[a][0]=u+1;
                            op[a][1]=v+1;
                            op[a++][2]=min;
                            min_cost+=min;
                        }
                    }
                    else{
                        let p=v;
                        while(parent[p]!=p){
                            p=parent[p];
                        }
                        if(p!=u){
                            if(parent[v]<parent[u]){
                                parent[u]=parent[v];
                            }
                            else{
                                parent[parent[v]]=u;
                                parent[v]=u;
                            }
                            op[a][0]=u+1;
                            op[a][1]=v+1;
                            op[a++][2]=min;
                            min_cost+=min;
                        }
                    }
                }
                else{
                    let p=u,q=v;
                    while(parent[p]!=p){
                        p=parent[p];
                    }
                    while(parent[q]!=q){
                        q=parent[q];
                    }
                    if(p!=q){
                        if(parent[v]<parent[u]){
                            parent[u]=parent[v];
                        }
                        else{
                            parent[parent[v]]=u;
                            parent[v]=u;
                        }
                        op[a][0]=u+1;
                        op[a][1]=v+1;
                        op[a++][2]=min;
                        min_cost+=min;
                    }
                }
            }
        }
    }
}
//console.table(op);
