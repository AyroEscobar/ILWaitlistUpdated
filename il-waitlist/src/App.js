
import React from 'react';
import { createClient } from '@supabase/supabase-js';


const url = process.env.REACT_APP_SUPABASE_URL;
const key = process.env.REACT_APP_SUPABASE_ANON_KEY;

const supabase = createClient(url, key);

function App() {
  return (
     <div>
    <h1>where are you going to be</h1>
    </div>
  );
}

export default App;
