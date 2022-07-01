import classes from './List.module.css'
import Item from './Item';
function List(props){
   
return(
        <div className={classes.expenses_list}>
          <ol className={classes.expenses_list__fallback}>
            {props.listOfExpense.map((exp)=>{
               return <Item key={exp.id} oneExpense={exp}></Item>
            })}
            
          </ol>

        </div>
    )
}
export default List