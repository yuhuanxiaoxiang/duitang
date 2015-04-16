var emp = [3,10,45,6,7,8,9,9,6,5,42,54,6,5,76,7,54,45,45,67,67,4,100,7,32,20,42,84,81,22]；
var index =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
for(var i = 0;i <5; i++){
	var ran =Math.floor(Math.random() * emp.length);
        emp = emp.splice((ran),1);
       	index[ran]=1;
    };
	for(var a = 0,b = 0;a < 15;a++){
         if (index[b] = 1){
         	a--};
         	b++};
	return b;