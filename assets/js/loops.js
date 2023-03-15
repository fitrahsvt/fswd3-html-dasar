//for
for(let i = 0; i < 5; i++){
    console.log(`Iterasi ke ${i}`);
}

//Do..While
let a = 0;
do{
    console.log(`Iterasi ke ${a}`);
    a+=1;
} while (a < 5);

//While
let b = 0;
while(b<5){
    console.log(`Iterasi ke ${b}`);
    b++;
}

//Break
for(let c = 0; c < 5; c++){
    if(c==3){
        break;
    }
    console.log(`Iterasi ke ${c}`);
}

//continue
for(let d=0; d<5; d++){
    if(d==3){
        continue;
    }
    console.log(`Iterasi ke ${d}`);
}