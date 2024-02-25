import { useEffect } from 'react';
import { registerUToolsHook } from '@/core/events';

export default () => {
  // initialize
  useEffect(() => {
    registerUToolsHook();
  }, []);

  return (
    <div>Home</div>
  );
}
