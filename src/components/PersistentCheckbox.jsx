import { useState, useEffect } from 'react';

export default function PersistentCheckbox({
  id,
  label,
  defaultChecked = false,
}) {
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [isClient, setIsClient] = useState(false);

  // クライアントサイドでのみ実行される初期化処理
  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(`checkbox-${id}`);
      if (saved !== null) {
        setIsChecked(JSON.parse(saved));
      }
    }
  }, [id]);

  // 状態が変更されたときにローカルストレージに保存
  useEffect(() => {
    if (isClient && typeof window !== 'undefined') {
      localStorage.setItem(`checkbox-${id}`, JSON.stringify(isChecked));
    }
  }, [id, isChecked, isClient]);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
      }}
      onClick={handleChange}
    >
      <div style={{ position: 'relative' }}>
        <div
          style={{
            width: '1.2rem',
            height: '1.2rem',
            border: '2px solid',
            borderColor: isChecked ? '#10b981' : '#9ca3af',
            borderRadius: '4px',
            backgroundColor: isChecked ? '#10b981' : 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
        >
          {isChecked && (
            <svg
              style={{
                width: '1.2rem',
                height: '1.2rem',
                color: 'white',
              }}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
      <span
        style={{
          userSelect: 'none',
          textDecoration: isChecked ? 'line-through' : 'none',
          transition: 'text-decoration 0.2s ease',
        }}
      >
        {label}
      </span>
    </div>
  );
}
