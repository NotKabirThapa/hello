'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Example validation (replace with real API call later)
    if (email === 'admin@example.com' && password === 'admin123') {
      // Mock login state
      localStorage.setItem('adminLoggedIn', 'true');
      // push to admin panel
      router.push('/admin');
    } else {
      setError('Invalid admin credentials.');
    }
  };

  return (
    <main style={{ maxWidth: 400, margin: '100px auto', padding: '20px', border: '1px solid #ccc', borderRadius: 8 }}>
      <h2 style={{textAlign:'center'}}>Admin Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <input
            type="email"
            placeholder="admin@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '94%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: 12 }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '94%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '10px',
            backgroundColor: '#1877f2',
            color: '#fff',
            border: 'none',
            borderRadius: 4,
            fontSize: '16px',
          }}
        >
          Login
        </button>
      </form>
    </main>
  );
}
