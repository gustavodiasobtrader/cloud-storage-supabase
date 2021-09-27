import { CONFIG } from './../configs/env.config';
import { createClient } from '@supabase/supabase-js';

const supabaseClient = createClient(CONFIG.url, CONFIG.key);


export default supabaseClient;