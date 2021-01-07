for(i=1; i<=20; i++){
    console.log(i);
}

let classe = [
    'Ayhan',
    'Adame',
    'Seb',
    'Jamila',
    'Dawid'
];

for(i=0; i<classe.length; i++){
    console.log(`Bonjour ${classe[i]} `); 
} 



let numbre = parseInt(prompt("Entre un nombre?"));

if(!isNaN(numbre)){
    for(i=0; i<=numbre; i++){
        console.log(i);
    }
}else{
    console.log('c4est un nombre quil faut entrrer! ');
}