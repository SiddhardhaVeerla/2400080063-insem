import { useState } from 'react';

/**
 * StudentForm allows adding a new student by name.
 * Props:
 *  onAdd(name: string): void
 */
export default function StudentForm({ onAdd }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return; // ignore empty
    onAdd(trimmed);
    setName('');
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
