import classes from '../components/Item.module.css'
import Despensedate from './Despensedate'


function Item(props){
    return(
        <div className={classes.expense_item}>
        <Despensedate  d={props.oneExpense. date}> </Despensedate>
        <div className={classes.expense_item__description}><h2  className={classes.expense_item}>{props.oneExpense.title}</h2></div>
        <div  className= {classes.expense_item__price}>{props.oneExpense.number}$</div>
       
        </div>
    )

     

}

export default Item