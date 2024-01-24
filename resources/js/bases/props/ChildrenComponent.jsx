import PropTypes from 'prop-types';

export const ChildrenComponent = ({btnText}) => {  
  return (
    <>
    <button className="btn btn-success">{btnText}</button>    
    </>
  )
}


//Indicación extra para otros desarrolladores para indicar funcionamiento del componente

ChildrenComponent.propTypes = {
  btnText:PropTypes.string.isRequired
};