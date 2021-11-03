 import React from 'react';
 import'bootstrap/dist/css/bootstrap.min.css';
 
 class Button extends React.Component {
  render() {
    const { handleClick, children, isSelected} = this.props
      return (
          <> 
          <button onClick={()=>handleClick(children)} className="btn btn-primary ms-3" type="submit">{children}</button>
  </>
    );

}
}

 export default Button;