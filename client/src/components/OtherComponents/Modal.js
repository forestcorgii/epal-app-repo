
function Modal(props){
    function cancelHandler(){
        props.onCancel();
    }
    function confirmHandler(){
        props.onCancel();
    }

    return(
    
    <div className='modal'>

        <div>
            <form>
                <input type="text" placeholder="Enter first name"/>
                <input type="text" placeholder="Enter first name"/>
                <input type="text" placeholder="Enter first name"/>
                <input type="text" placeholder="Enter first name"/>
                <input type="text" placeholder="Enter first name"/>
                <input type="text" placeholder="Enter first name"/>



            </form>

        </div>
        <button className='btn btn--alt' onClick={cancelHandler}> Cancel</button>
        <button className='btn' onClick={confirmHandler}>Confirm</button>
    </div>
    )
}


export default Modal;