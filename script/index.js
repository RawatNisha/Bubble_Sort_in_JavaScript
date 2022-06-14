document.getElementById("button").addEventListener("click",function(event){
    sortTheArray()
})


function sortTheArray() {
    let input = document.getElementById("array");
    console.log(input.value);
    let string = input.value;
    let number = string.split(",");
    let array = [];
    for (let i = 0; i < number.length; i++) {
        let value = number[i];
        array.push(Number(value));
    }
    let temp;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    console.log(array);
    let output = document.getElementById("output");
    output.innerHTML = "<h1>"+array.toString()+"</h1>";
}

// sortTheArray();
