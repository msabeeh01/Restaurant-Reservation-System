//import fetch for supabsae
import fetch from 'node-fetch';
globalThis.fetch = fetch;



//create supabase client and export it
import { createClient } from '@supabase/supabase-js';

//.env
import dotenv from 'dotenv';
dotenv.config();


const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export{
    supabase
}