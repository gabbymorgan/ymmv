import React from 'react';
import { connect } from 'react-redux';

import { Modal } from '../styles';
import * as FormComponents from '../components/FormComponents';

class SessionModal extends React.Component {
  render() {
    const FormComponent = FormComponents[this.props.formModalType];
    return (
      <Modal isOpen={this.props.showingFormModal}>
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