import React from 'react';
import {
  Container as BSContainer,
  Modal as BSModal,
  ModalBody as BSModalBody,
  ModalHeader as BSModalHeader,
  ModalFooter as BSModalFooter,
  Input as BSInput,
  InputGroup as BSInputGroup,
  Form as BSForm,
  Label as BSLabel,
  Card as BSCard,
} from 'reactstrap';

import { colors } from '../constants/theme';


import styled from 'styled-components';

export const Container = styled(BSContainer)`
  background: ${colors.white};
  min-height: 100vh;
`;

export const Modal = styled(BSModal)`
`;

export const ModalHeader = styled(BSModalHeader)`
  background: ${colors.white};
`;

export const ModalBody = styled(BSModalBody)`
  background: ${colors.white};
`;

export const ModalFooter = styled(BSModalFooter)`
  background: ${colors.white};
`;

export const Button = styled.button`
  border-radius: 5px 5px;
  background: ${colors.tertiary};
`;

export const Form = styled(BSForm)`
`;

export const Input = styled(BSInput)`
`;

export const InputGroup = styled(BSInputGroup)`
`;

export const Label = styled(BSLabel)`
  margin: 1rem 0 0 0;
`;

export const Card = styled(BSCard)`
  width: 50%;
`;