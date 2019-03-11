import React, { Component } from 'react';
import '../Styles/App.scss';
import Data from '../Components/Data';
import TipCard from '../Components/TipCard';


import MaterialIcon from '@material/react-material-icon';




class Reference extends Component {
  constructor() {
    super();
    this.state = { show: false,
                   modalData: []
                 }
    }
    show = (data) => {
    this.setState({ show: true,
                    modalData: data});
    }
    hide = () => {
    this.setState({ show: false });
    }




  render() {
    return(
<div>
<Data  show = {this.show}  modalData = {this.modalData}/>
<Modal show={this.state.show} modalData = {this.state.modalData} handleClose={this.hide} >
        </Modal>
</div>

  );
}
}


const Modal = (props) => {
  const showHideClassName = props.show ? 'modal display-block' : 'modal display-none';

  return (

    <div className={showHideClassName}>
      <section className = "CardModal">

            <MaterialIcon icon="close" onClick={props.handleClose}/>
            <TipCard modalData = {props.modalData} />

      </section>
    </div>
  );
};


export default Reference;
