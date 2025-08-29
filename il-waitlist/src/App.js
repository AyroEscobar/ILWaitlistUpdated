import { createClient } from '@supabase/supabase-js';

const url = 'https://tqsjtxyzbdvgjatvochr.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxc2p0eHl6YmR2Z2phdHZvY2hyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzMTU0MjEsImV4cCI6MjA2NTg5MTQyMX0.1cU8UxeHncWQPNXqn5dtGR7A6AO7pKwQiW-_77tUWdI';

const supabase = createClient(url, key);

function App() {
  return (
    <div>
      <p>URL: {url}</p>
      <p>Key: {key}</p>
    </div>
  );
}

export default App;
