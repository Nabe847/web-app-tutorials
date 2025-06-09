import PersistentCheckbox from './PersistentCheckbox.jsx';

export default function ChecklistItem({
  id,
  children,
  defaultChecked = false,
}) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <PersistentCheckbox
        id={id}
        label={children}
        defaultChecked={defaultChecked}
      />
    </div>
  );
}
