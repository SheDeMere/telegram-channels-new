import React from 'react';
import UserCategories from './UserCategories';
import { useSelector } from 'react-redux';
import AdminCategories from './AdminCategories';

function Categories() {
  const admin = useSelector((state) => state.header.admin);

  return admin ? <AdminCategories /> : <UserCategories />;
}

export default Categories;
