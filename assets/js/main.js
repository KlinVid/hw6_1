function script(){
    let symbol = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    let randomSymbol;
    let block = +prompt('Введите количество блоков <div>:');
            
        if (block>=1){
            for (j=1; j<=block; j++){
                document.querySelector('body').innerHTML += `<div id="id${j}"><img src="assets/images/kreker.jpg"></div>`;
                let colorSymbol = ''; 
                for (i=0; i<6; i++){
                    randomSymbol = Math.floor(Math.random() * symbol.length);
                    colorSymbol += symbol[randomSymbol];
            }
            document.querySelector(`#newStyle`).innerHTML += `
    
                #id${j}{
                    background-color: #${colorSymbol};
                }
    
            `;
            }
        } 
        else{
            alert('Введено не верное значение!');
        }

};

script();