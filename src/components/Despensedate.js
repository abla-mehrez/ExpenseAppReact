
import React from 'react'
import classes from './Despensedate.module.css'
function Despensedate(props){

    let myd = props.d.split('-')
    let x = new Date(myd)
 return (
    


    
 <div className={classes.expense_date}>
 <div className={classes.expense_date__day}> { myd[0]} </div>
 <div className={classes.expense_date__year}>{x.toLocaleDateString('default', { month: 'long' })}</div>

 <div className={classes.expense_date__month}> {myd[2]}</div>

</div>)



}
export  default Despensedate