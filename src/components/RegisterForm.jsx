import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

function RegisterForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errors, setErrors] = useState({});
  const [students, setStudents] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};

    if (firstName.trim() === '') {
      newErrors.firstName = 'Shkruaj emrin';
    }

    if (lastName.trim() === '') {
      newErrors.lastName = 'Shkruaj mbiemrin';
    }

    if (email.trim() === '') {
      newErrors.email = 'Shkruaj emailin';
    } else if (!/^[^\s@]+/.test(email.trim())) {
      newErrors.email = 'Shkruaj nje email te vlefshem';
    }

    if (password.trim() === '') {
      newErrors.password = 'Shkruaj fjalekalimin';
    } else if (password.length < 6) {
      newErrors.password = 'Fjalekalimi duhet te kete te pakten 6 karaktere';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    const newStudent = {
      id: crypto.randomUUID(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
    };

    setStudents((previousStudents) => [
      ...previousStudents,
      newStudent,
    ]);

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <Input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          error={errors.firstName}
        />

        <Input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          error={errors.lastName}
        />

        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <Button type="submit">Add Student</Button>
      </form>

      {students.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Emri</th>
              <th>Mbiemri</th>
              <th>Email</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RegisterForm;