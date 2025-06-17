import { hydrateRoot } from 'react-dom/client';
import React from 'react';
import { EmailForm } from '../components/EmailForm';

document.querySelectorAll('[data-react-component="EmailForm"]').forEach((el) => {
  hydrateRoot(el, <EmailForm />);
});
