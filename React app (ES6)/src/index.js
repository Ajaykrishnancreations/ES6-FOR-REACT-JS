import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sample, { age, Sname } from './App';

//import App from './App';
import ArithCalled from './App';
import reportWebVitals from './reportWebVitals';
import Modules from './App';
import Ans from './App'

//=============================(  )==================================================================
/*
ReactDOM.render(
  <React.StrictMode>
    <Sname />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

//==================================================================================================

const Myarray=["apple","banana","mango","orange"];
const Mylist=Myarray.map((myvar)=><p>{myvar}</p>);   
ReactDOM.render(Mylist ,document.getElementById('root')); //for calling "Mylist" const no need to use like this <Mylist />

//===================================================================================================

/*


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

*/

//=====================Destructuring Comes in Handy===================

function Operation(a,b)
{
  const Add=a+b;
  const Sub=a-b;
  const Mul=a*b;
  const Div=a/b;
  return [Add,Sub,Mul,Div]
}
const [A,B,C,D]=Operation(10,20)
const Myarr=[A,B,C,D];
const ResultArray=Myarr.map((item)=><p>{item}</p>)
ReactDOM.render(ResultArray ,document.getElementById('root'));

//=========================================================================

// modelues
//----------------- in line ------------ 
//   ReactDOM.render(Sname,document.getElementById('root'));

//----------Nameed export ---------------
//------------ all at once at botom ---------
/*
const Res="my name is "+Sname+"and my age is "+age;
ReactDOM.render(Res,document.getElementById('root'));
*/
//  -----type 2 --defult exports--------------
//ReactDOM.render(<Modules />,document.getElementById('root'));

//==================================
ReactDOM.render(Ans,document.getElementById('root'));


reportWebVitals();
