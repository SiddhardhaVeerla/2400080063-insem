/**
 * Summary displays counts and lists of present & absent students
 * Props:
 *  students: Array<{id:number,name:string,present:boolean}>
 */
export default function Summary({ students }) {
  const total = students.length;
  const present = students.filter((s) => s.present);
  const absent = students.filter((s) => !s.present);
  return (
    <div className="summary">
      <h2>Summary</h2>
      <div className="counts">
        <span>Total: {total}</span>
        <span>Present: {present.length}</span>
        <span>Absent: {absent.length}</span>
      </div>
      <div className="lists">
        <div>
          <h3>Present ({present.length})</h3>
          {present.length ? (
            <ul>
              {present.map((s) => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          ) : (
            <p className="empty">None</p>
          )}
        </div>
        <div>
          <h3>Absent ({absent.length})</h3>
          {absent.length ? (
            <ul>
              {absent.map((s) => (
                <li key={s.id}>{s.name}</li>
              ))}
            </ul>
          ) : (
            <p className="empty">None</p>
          )}
        </div>
      </div>
    </div>
  );
}
