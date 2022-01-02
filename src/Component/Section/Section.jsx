import React from "react";
import SimpleContext from './../../Context/Context';

class Section extends React.Component {
  render() {
    
    return (
      <SimpleContext.Consumer>
        {context =>(
 <div>
 <h5 id="LengthList">{" "}تعداد اشخاص وارد شده{" "}{context.state.length === 0 ? (<b style={{backgroundColor: "red",padding: "0px 15px",borderRadius: "10px",color: "white",}}>{context.state.length}
     </b>) : context.state.length === 1 ? (<b style={{backgroundColor: "gold",padding: "0px 15px",borderRadius: "10px",color: "white",}}>{context.state.length}</b>
   ) : context.state.length === 2 ? (<b style={{backgroundColor: "green",padding: "0px 15px",borderRadius: "10px",color: "white",}}>{context.state.length}</b>
   ) : (<b style={{backgroundColor: "green",padding: "0px 15px",borderRadius: "10px",color: "white",}}>{context.state.length}</b>)}{" "}نفره
 </h5>
 <input type="text" className="form-control mt-3 p-3" id="Input" placeholder=":نام شخصی را وارد نمایید لطفا"/>
 <button className="btn btn-success m-3" onClick={context.HandlerAdding}>ثبت شخص</button>
 <button className="btn btn-danger m-3" onClick={context.HandlerShow}>پنهان کردن</button>
 {context.Hide ? (<ul id="List">{context.state.map((data) => (<li id="itemList" key={data.id}><em style={{ cursor: "pointer" }}>{data.Fullname}</em><div id="ParentInput">{" "}<input type="text" id="ChangeInput" className="form-control" onChange={(even) => context.Handlerchange(even, data.id)}/></div><i className="bi bi-trash-fill" onClick={() => {context.HandlerDelete(data.id, data.Fullname);}}></i></li>))}</ul>) : null}
</div>
        )}
     
      </SimpleContext.Consumer>
    );
  }
}
export default Section;

