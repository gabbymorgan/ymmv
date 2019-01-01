import React, { Component } from 'react';
import FormComponent from '../templates/FormComponent';

export const CreateProduct = () => (
  <FormComponent docType="Product" isNew />
);

export const CreateUser = () => (
  <FormComponent docType="User" isNew />
);

export const CreateCompany = () => (
  <FormComponent docType="Company" isNew />
);

export const CreateReport = () => (
  <FormComponent docType="Report" isNew />
);

export const UpdateProduct = () => (
  <FormComponent docType="Product" isNew={false} />
);

export const UpdateUser = () => (
  <FormComponent docType="User" isNew={false} />
);

export const UpdateCompany = () => (
  <FormComponent docType="Company" isNew={false} />
);

export const UpdateReport = () => (
  <FormComponent docType="Report" isNew={false} />
);