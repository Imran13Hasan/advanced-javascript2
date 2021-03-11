const first = 2;
const second = "2";
if(first == second){
    console.log('Condition is true');
}else{
    console.log('Condition is false');
}
// Output: Condition is true;
// Double equal only check the value;


const first = 2;
const second = "2";
if(first === second){
    console.log('Condition is true');
}else{
    console.log('Condition is false');
}
// Output: Condition is false;
// Triple equal check type and value both;


const first = 1;
const second = true;
if(first == second){
    console.log('Condition is true');
}else{
    console.log('Condition is false');
}
// Output: Condition is true;
// Because of true is compared with 1 and double equal only check the value;


const first = 1;
const second = true;
if(first === second){
    console.log('Condition is true');
}else{
    console.log('Condition is false');
}
// Output: Condition is false;
// Because of triple equal firstly check the type of the value since they are not the same type of;


const first = 0;
const second = false;
if(first == second){
    console.log('Condition is true');
}else{
    console.log('Condition is false');
}
// Output: Condition is true;
// Because of false is compared with 0 and double equal only check the value;


const first = 0;
const second = false;
if(first === second){
    console.log('Condition is true');
}else{
    console.log('Condition is false');
}
// Output: Condition is false;
// Because of triple equal firstly check the type of the value since they are not the same type of;


//It's recommended to the new developers that use '===' because '==' might be make confused;