const canvas1 = document.querySelector('canvas')
const cn = canvas1.getContext('2d')
canvas1.width = innerWidth;
canvas1.height = innerHeight;
const canvas = document.querySelector('canvas')
const c1 = canvas.getContext('2d')
canvas.width=canvas1.width*.4;//295
canvas.height=canvas1.height*.8;//creating canvas512



 
 
 

function addingcent(){
    var t=document.getElementById("datat1");
    var v1='<tr>'+'<td>'+iter+'</td>'+'<td>'+centroid[0].x+'</td>'+'<td>'+centroid[0].y+'</td>'+'<td>'+centroid[1].x+'</td>'+'<td>'+centroid[1].y+'</td>'+'<td>'+centroid[2].x+'</td>'+'<td>'+centroid[2].y+'</td>'+'</tr>';
    t.innerHTML=v1;

}





var dataset=[
    {x:50,y:90},{x:99,y:100},{x:150,y:290},{x:225,y:245},{x:190,y:290},{x:250,y:200},{x:310,y:310},{x:350,y:222},{x:50,y:210},{x:380,y:240}
    ,{x:200,y:400},{x:200,y:300},{x:190,y:290},{x:200,y:450},{x:300,y:120},
        {x:350,y:410},{x:269,y:250},{x:256,y:310},{x:328,y:450},
        {x:428,y:400},{x:200,y:126},{x:223,y:325},{x:378,y:159},{x:236,y:189},
        {x:346,y:389},{x:200,y:123},{x:319,y:446},{x:230,y:291},{x:415,y:400},{x:333,y:444},{x:150,y:150},
        {x:146,y:233},{x:212,y:222},{x:199,y:426},{x:230,y:420},{x:225,y:455},{x:344,y:444},{x:222,y:350},
        {x:250,y:289},{x:220,y:286},{x:289,y:356},{x:289,y:322},{x:299,y:475},{x:356,y:444},{x:333,y:356},
        {x:122,y:333},{x:133,y:444},{x:189,y:446},{x:156,y:455},{x:234,y:400},{x:246,y:475},{x:255,y:482},
        {x:169,y:369},{x:149,y:329},{x:255,y:411},{x:222,y:320},{x:256,y:399},{x:190,y:455},{x:150,y:329},
        
        

];///initial dataset*/

/*var dataset=[];
function randomnumber(min,max){
const r=Math.random()*(max-min)+min;
return Math.floor(r);

}
for(var i=0;i<1000;i++){
    var obj={};
    
    obj.x=randomnumber(50,450)
    obj.y=randomnumber(50,450) 
    obj.c=0;obj.z=0;
    dataset.push(obj);
    obj={};

}*/


for(let i=0;i<dataset.length;i++){
    dataset[i].c=0;dataset[i].z=0;
}
console.log(dataset)

var centroid=[{x:80,y:80,c:"#FF0000"},{x:200,y:200,c:"#FFFF00"},{x:350,y:350,c:"#00FF00"}]

class Dot{
    constructor(x, y, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw(){
        c1.beginPath();
        c1.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c1.fillStyle = this.color;
        c1.fill();}}//declaring a class for datasetpoint and centroid  construction
        
    let R=6; //radius of datasetpoint
    var dot=[];//array for storing datasetpoint objects
    
    
    function constructdot(){
    for(let j = 0; j<dataset.length; j++){
        
             dot[j] = new Dot(dataset[j].x, dataset[j].y, R,"#000000");
            dot[j].draw();
        
    }}//function for constructing datasetpoints
    setTimeout(()=>{constructdot();},2000);//constructing datasetpoints


        
    var cent=[];//array for storing centroid objects
    var CR=15;//radius of centroid
//creating centroids
let storect=[];
function constructin_cent(){
for(var j = 0; j<centroid.length; j++){
    
        if(j==0){
            
            
            cent[j]=new Dot(80,80,CR,centroid[j].c);
            cent[j].draw();centroid[j].x=80;centroid[j].y=80;
        }
       else if(j==1){
        
            cent[j]=new Dot(200,200,CR,centroid[j].c);
            cent[j].draw();centroid[j].x=200;centroid[j].y=200;
            
        }
        else{
            
                cent[j]=new Dot(350,350,CR,centroid[j].c);
                cent[j].draw();centroid[j].x=350;centroid[j].y=350;
            
        }
        
    }}
    

    var iter=1;
    setTimeout(()=>{
        constructin_cent(); 
       /* var t=document.getElementById("cent");
        t.innerHTML='<tr>'+'<td>'+"iter"+'</td>'+'<td>'+"C1[X]"+'</td>'+'<td>'+"C1[Y]"+'</td>'+'<td>'+"C2[X]"+'</td>'+'<td>'+"C2[Y]"+'</td>'+'<td>'+"C3[X]"+'</td>'+'<td>'+"C3[Y]"+'</td>'+'</tr>'+'<tr>'+'<td>'+iter+'</td>'+'<td>'+centroid[0].x+'</td>'+'<td>'+centroid[0].y+'</td>'+'<td>'+centroid[1].x+'</td>'+'<td>'+centroid[1].y+'</td>'+'<td>'+centroid[2].x+'</td>'+'<td>'+centroid[2].y+'</td>'+'<t/r>';*/
    },3000);

    //var t=document.getElementById("cent");
        //t.innerHTML='<tr>'+'<td>'+"iter"+'</td>'+'<td>'+"C1[X]"+'</td>'+'<td>'+"C1[Y]"+'</td>'+'<td>'+"C2[X]"+'</td>'+'<td>'+"C2[Y]"+'</td>'+'<td>'+"C3[X]"+'</td>'+'<td>'+"C3[Y]"+'</td>'+'</tr>'+'<tr>'+'<td>'+iter+'</td>'+'<td>'+centroid[0].x+'</td>'+'<td>'+centroid[0].y+'</td>'+'<td>'+centroid[1].x+'</td>'+'<td>'+centroid[1].y+'</td>'+'<td>'+centroid[2].x+'</td>'+'<td>'+centroid[2].y+'</td>'+'<t/r>';


      
    
    
    
    /*function drawlines(x1,y1,x2,y2,color){
        //alert("hello");
        var x1n,y1n,x2n,y2n,chy,chx,l,RL,CRL;
        chy=y2-y1;
        chx=x2-x1;
        l=Math.sqrt(Math.pow(chx,2)+Math.pow(chy,2));
        RL=R/l;CRL=CR/l;
        y1n=y1+chy*RL;
        y2n=y2-chy*CRL;
        x1n=x1+chx*RL;
        x2n=x2-chx*CRL;console.log(x1n);

        c1.beginPath();
        c1.moveTo(x1n,y1n);
        c1.lineTo(x2n,y2n);
        c1.strokeStyle = color;
        c1.stroke();



    }*/
    

   
   
    function kmeans(){
        var y=0,cluster_z=1;
        var iter=1;
    
        

        
        addingdata(dataset);
        while(y<10&&cluster_z==1)
             {
             
             
             //to be done starting from second iteration
             //updates centroid,redraws datasetpoints and draw updated centroids 
            
             if(iter>1){
                 var c1_sumx=0,c2_sumx=0,c3_sumx=0,c1_sumy=0,c2_sumy=0,c3_sumy=0,cntc1=0,cntc2=0,cntc3=0;  
             for(var i=0;i<dataset.length;i++)
             {
             if(dataset[i].c==0){
                 c1_sumx+=dataset[i].x;c1_sumy+=dataset[i].y;cntc1+=1;
             }
             else if(dataset[i].c==1){
                 c2_sumx+=dataset[i].x;c2_sumy+=dataset[i].y;cntc2+=1;
             }
             else{
                 c3_sumx+=dataset[i].x;c3_sumy+=dataset[i].y;cntc3+=1;
             }
         }
             centroid[0].x=c1_sumx/cntc1;
             centroid[0].y=c1_sumy/cntc1;
             centroid[1].x=c2_sumx/cntc2;
             centroid[1].y=c2_sumy/cntc2;
             centroid[2].x=c3_sumx/cntc3;
             centroid[2].y=c3_sumy/cntc3;
            // var t=document.getElementById("cent");
            // var tr=document.querySelector('tr');
            // tr.innerHTML ='<td>'+iter+'</td>'+'<td>'+centroid[0].x+'</td>'+'<td>'+centroid[0].y+'</td>'+'<td>'+centroid[1].x+'</td>'+'<td>'+centroid[1].y+'</td>'+'<td>'+centroid[2].x+'</td>'+'<td>'+centroid[2].y+'</td>';
            // tr.appendChild(tr)
     
         
     //clearing canvas and drawing datasetpoints again
         
         c1.clearRect(0,0,canvas.width,canvas.height);
         constructdot();
         
         
         //drawing updated centroids
         for(var j=0;j<3;j++){
             if(j==0){cent[j]=new Dot(centroid[j].x,centroid[j].y,CR,centroid[j].c);
                 cent[j].draw()}
             else if(j==1){cent[j]=new Dot(centroid[j].x,centroid[j].y,CR,centroid[j].c);
                 cent[j].draw()}
             else {cent[j]=new Dot(centroid[j].x,centroid[j].y,CR,centroid[j].c);
                 cent[j].draw()}
             }
          }//to be done starting from second iteration,iter grt than 1
             //updates centroid,redraws datasetpoints and draw updated centroids 
     
     
     
     
     //finds minimum distance and change color of datasetpoints
      
     for(var j=0;j<dataset.length;j++){
             
         let d=[];
             for(var i=0;i<centroid.length;i++){
                 //drawlines(dataset[j].x,dataset[j].y,centroid[i].x,centroid[i].y,"#000000");
                d[i]=Math.sqrt(Math.pow((dataset[j].x-centroid[i].x),2)+Math.pow((dataset[j].y-centroid[i].y),2));//finding euclidean distance
              }
     var min=d[0];pos=0;
     for(var i=1;i<3;i++){
         if(d[i]<min){
         min=d[i];
          pos=i;
     }}//finding minimum distance 
     if(pos!=dataset[j].c){
         dataset[j].c=pos;
         dataset[j].z=1;
     }
     else{
         dataset[j].z=0;
     }
       
     
     dot[j] = new Dot(dataset[j].x, dataset[j].y, R,centroid[pos].c);
                 dot[j].draw();
                 //drawlines(dataset[j].x,dataset[j].y,centroid[pos].x,centroid[pos].y,centroid[pos].c);
                 //changes color according to min distance
     
     }//end of looping through datasetpoints
     
     cluster_z=0;
     for(var i=0;i<dataset.length;i++){
     if(dataset[i].z==1)
     cluster_z=1;
     
     }
     
     iter+=1;
     //drawlines(dataset[j].x,dataset[j].y,centroid[pos].x,centroid[pos].y,centroid[pos].c);
     y++;
         
        }//end of main loop that determines no of times cent should change
     clusterfind(dataset);
     
     }
     //setTimeout(kmeans,6000);

     
function reset(){
    c1.clearRect(0,0,canvas.width,canvas.height);
    
   //constructdot();
   // constructin_cent();
    //kmeans();

}
const e=document.getElementById("b");

e.addEventListener("click",kmeans);
e.addEventListener("keydown",reset);


function clusterfind(dataset){
    var c1=0,c2=0,c3=0;
    for(var i=0;i<dataset.length;i++){
       if(dataset[i].c==0)c1++;
       else if(dataset[i].c==1)c2++;
       else c3++;
    }
    var t=document.querySelector("#clustert");
    var v1='<tr>'+'<td>'+"Cluster 1"+'</td>'+'<td>'+"Cluster2"+'</td>'+'<td>'+"Cluster3"+'</td>'+'</tr>';
     v1+='<tr>'+'<td>'+c1+'</td>'+'<td>'+c2+'</td>'+'<td>'+c3+'</td>'+'</tr>' ;
    t.innerHTML=v1;

 }

 function addingdata(dataset){
    var table = document.getElementById("datat");
    var myvar;
   myvar='<tr>'+'<td>'+"X"+'</td>'+'<td>'+"Y"+'</td>'+'</tr>' 
    for(var i = 0; i < dataset.length; i++){
        myvar += '<tr>'+'<td>'+dataset[i].x+'</td>'+'<td>'+dataset[i].y+'</td>'+'</tr>'     
    }
    table.innerHTML = myvar;
}