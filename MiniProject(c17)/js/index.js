
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
                tkip.innerHTML = "<label>(If no edge enter 999)Enter edge between "+i+" & "+j+" - </label> &nbsp; &nbsp; <input id=\"edge"+k+"\" type=\"number\"><br>";
            }
            else{
                tkip.innerHTML += "<label>(If no edge enter 999)Enter edge between "+i+" & "+j+ " - </label> &nbsp; &nbsp; <input id=\"edge"+k+"\" type=\"number\"><br>";
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
                var ipp = document.getElementById("edge"+k).value;
                if(ipp==""){
                    alert("Edge value cannot be empty!");
                    break;
                }
                else{
                    arr[i-1][j-1]=arr[j-1][i-1]= parseInt(ipp);
                    k++;
                }
            }
        }
        console.table(arr);

        var i,j;

        var distance=[],from=[],visited=[];
        distance.length=15; from.length=15; visited.length=15;

        distance[0]=0;
        visited[0]=1;

        for(i=1;i<n;i++){
            distance[i]=arr[0][i];
            from[i]=0;
            visited[i]=0;
        }

        var no_of_edges=n-1;
        var u,v,min_distance,a=0;

        while(no_of_edges>0){
            min_distance=999;
            for(i=1;i<n;i++){
              if(visited[i]==0 && distance[i]<min_distance){
                v=i;
                min_distance=distance[i];
              }
            }
            u= from[v];
            op[a][0]=u+1;
            op[a][1]=v+1;
            op[a++][2]=arr[u][v];
            no_of_edges--;
            visited[v]=1;
          
            for(i=1;i<n;i++){
              if(visited[i]==0 && arr[i][v]<distance[i]){
                distance[i]=arr[i][v];
                from[i]=v;
              }
            }
            min_cost= min_cost+ arr[u][v];
        }

        console.log("Minimum cost is: ")
        console.log(min_cost);
        console.table(op);
    }
}
//console.table(op);
