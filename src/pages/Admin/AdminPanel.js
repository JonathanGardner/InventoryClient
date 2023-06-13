import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Form from './Form';


function AdminPanel() {

  return (
      <div>
        <Form />
      </div>
  );
}

export default AdminPanel;
