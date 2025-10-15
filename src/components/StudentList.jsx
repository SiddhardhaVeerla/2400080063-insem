/**
 * StudentList shows all students with ability to toggle present/absent
 * Props:
 *  students: Array<{id:number,name:string,present:boolean}>
 *  onToggle(id:number): void
 *  onRemove(id:number): void (optional future)
 */
export default function StudentList({ students, onToggle }) {
  if (!students.length) {
    return <p className="empty">No students added yet.</p>;
  }
  return (
    <table className="attendance-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {students.map((s, idx) => (
          <tr key={s.id} className={s.present ? 'present-row' : 'absent-row'}>
            <td>{idx + 1}</td>
            <td>{s.name}</td>
            <td>{s.present ? 'Present' : 'Absent'}</td>
            <td>
              <button onClick={() => onToggle(s.id)}>
                Mark {s.present ? 'Absent' : 'Present'}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
