// hhh
import style from './ButtonsContainer.module.css'
const ButtonContainer = ({OnButtonClick}) => {
    let buttonsName=["C","1","2","3","+","4","5","6","-","7","8","9","*","=","/","0",".","%"]
  return (
    <div className={style.buttonContainer}>
        {
            buttonsName.map((ButtonName)=>
                <button  className={style.button} onClick={()=> OnButtonClick(ButtonName)}>{ButtonName}</button>
            )
        }
    
    </div>
  );
};

export default ButtonContainer;
