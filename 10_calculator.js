let sym = JSON.parse(localStorage.getItem('rslt'))|| '';
    document.querySelector('.result').innerHTML=sym;
    function calculate(symbol){
      if(symbol === '='){
        sym = eval(sym);
      }
      else if(symbol === 'clear'){
        sym = '';
      }
      else{
        sym += symbol;
      }

      let rslt=document.querySelector('.result').innerHTML=sym;
      localStorage.setItem('rslt', JSON.stringify(rslt));
    }