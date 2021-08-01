
function Modal(props){
    function cancelHandler(){
        props.onCancel();
    }
    function doneHandler(){
        props.onCancel();
    }

    return(
    
    <div className='modal'>

        <div>
            <form>
                <input type="text" placeholder="Enter First name"/>
                <input type="text" placeholder="Enter Last name"/>
                <input type="text" placeholder="Enter Age"/>
                <input type="text" placeholder="Enter Address"/>
                <input type="text" placeholder="Enter first name"/>
                <input type="text" placeholder="Enter first name"/>



            </form>

        </div>
        <button className='btn btn--alt' onClick={cancelHandler}> Cancel</button>
        <button className='btn' onClick={doneHandler}>Done</button>
    </div>
    )
}


export default Modal;