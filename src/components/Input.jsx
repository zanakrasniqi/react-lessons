import React from 'react';

function Input({ type, placeholder, value, onChange, error }) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Input;