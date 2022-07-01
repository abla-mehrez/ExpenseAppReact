import {useRef} from 'react';
function AddExpense(){
    //creer un objet à partir des input du formulaire (formulaire controlé : using useRef)
    const refTitle=useRef('');
    const refNumber=useRef('');
    const refDate=useRef('');
   function submitHandler(e){
    e.preventDefault();
    let newExpense={
        title:refTitle.current.value,
        number:refNumber.current.value,
        date:refDate.current.value,    
    }
    
    
    //console.log(newExpense.date.tolocaleString());
 
    
    
    //communication avec Firebase:
    fetch('https://expense-4de98-default-rtdb.firebaseio.com/Expense.json',
    {
        method:'POST',
        body: JSON.stringify(newExpense),
        headers:{ 'Content-Type':'application/json'}
    })
        .then((res) =>{

            alert('ajouté');
          
        }
        )
        .catch((err)=>{
            alert("erreur");
        }
        )
    }
    
    
    
   
return(
    <form onSubmit={submitHandler}>
     <div >
    <label htmlFor='title'>Title</label>
    <input type="text" id="title"  ref={refTitle}></input>
    </div>
    
    <div >
    <label >Amount</label>
    <input type="number" ref={refNumber} ></input>
    </div>
    <div >
    <label >Date</label>
    <input type="date" ref={refDate}></input>
    </div>
    <div >
                <button type="submit">Add Expense</button>
            </div>
    </form>
)
}
export default AddExpense