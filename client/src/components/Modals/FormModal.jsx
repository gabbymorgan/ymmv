import React from 'react';
import { connect } from 'react-redux';

import { hideFormModal } from '../../actions';
import {CreateCompany, CreateProduct} from '../';
import { Modal, ModalHeader, ModalBody } from '../../styles';


const FormType = ({ type }) => {
  const formTypes = {
    Company: CreateCompany,
    Product: CreateProduct,

  }
  const Form = formTypes[type];
  return <Form />
}

class FormModal extends React.Component {
  toggle() {
    this.props.hideFormModal();
  }

  render() {
    return (
      <Modal isOpen={this.props.showingFormModal} toggle={this.toggle.bind(this)}>
        <ModalHeader toggle={this.toggle.bind(this)}>
          New {this.props.type}
        </ModalHeader>
        <ModalBody>
          <FormType type={this.props.type}/>
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showingFormModal: state.modals.showingFormModal,
    formModalType: state.modals.formModalType,
  }
}

export default connect(mapStateToProps, { hideFormModal })(FormModal);