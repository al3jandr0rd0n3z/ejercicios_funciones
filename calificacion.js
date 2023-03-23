function clasifica(a){
    if(90<a){
        return "A";
    }else if(80<a && 89<a){
        return "B";
    }else if(70<a && 79<a){
        return "C";
    }else if(60<a && 69<a){
        return "D";
    }else if(a<59){
        return "F";
 }

}
console.log(clasifica (3));