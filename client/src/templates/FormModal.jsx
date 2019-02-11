import React from 'react';
import { connect } from 'react-redux';

import { Modal, ModalHeader, ModalBody } from '../styles';
import * as FormComponents from '../components/Forms/FormComponents';
import * as actions from '../actions';

const { hideFormModal } = actions;

const FormComponent = (props) => {
  const Form = FormComponents[props.formModalType] || null;
  return <Form />;
}

class FormModal extends React.Component {
  toggle() {
    this.props.hideFormModal();
  }
  render() {
    const { formModalType } = this.props;
    return (
      <Modal isOpen={this.props.showingFormModal} toggle={this.toggle.bind(this)}>
        <ModalHeader toggle={this.toggle.bind(this)}>
          {formModalType}
        </ModalHeader>
        <ModalBody>
          <FormComponent formModalType={this.props.formModalType} />
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