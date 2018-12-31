import React, { Component } from 'react';
import CreateOrUpdateDoc from '../templates/CreateOrUpdateDoc';

export const CreateProduct = () => (
  <CreateOrUpdateDoc docType="Product" isNew />
);

export const CreateUser = () => (
  <CreateOrUpdateDoc docType="User" isNew />
);

export const CreateCompany = () => (
  <CreateOrUpdateDoc docType="Company" isNew />
);

export const CreateReport = () => (
  <CreateOrUpdateDoc docType="Report" isNew />
);

export const UpdateProduct = () => (
  <CreateOrUpdateDoc docType="Product" isNew />
);

export const UpdateUser = () => (
  <CreateOrUpdateDoc docType="User" isNew />
);

export const UpdateCompany = () => (
  <CreateOrUpdateDoc docType="Company" isNew />
);

export const UpdateReport = () => (
  <CreateOrUpdateDoc docType="Report" isNew />
);