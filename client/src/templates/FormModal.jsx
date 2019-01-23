import React from 'react';
import { connect } from 'react-redux';

import { Modal, ModalHeader } from '../styles';
import * as FormComponents from '../components/FormComponents';

const FormComponent = () => {
  const Form = FormComponents[this.props.formModalType] || null;
  return Form;
}

class SessionModal extends React.Component {
  render() {
    const { formModalType } = this.props;
    return (
      <Modal isOpen={this.props.showingFormModal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            {formModalType}
          </ModalHeader>
        <FormComponent/>
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

export default connect(mapStateToProps)(SessionModal);