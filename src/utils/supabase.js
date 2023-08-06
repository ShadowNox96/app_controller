import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mqeznezuoehyvefczurb.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey, {auth: {persistSession: false}})


export default supabase;