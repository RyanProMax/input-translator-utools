import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUToolsHook } from '@/core/events';

export default () => {
  const navigate = useNavigate();

  // initialize
  useEffect(() => {
    registerUToolsHook({ navigate });
  }, []);

  return (
    <div>Home</div>
  );
}
