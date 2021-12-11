import { createClient } from "@supabase/supabase-js";
import 'dotenv/config'

const supabase = createClient(
    process.env.VUE_APP_SUPABASE_URL,
    process.env.VUE_APP_SUPABASE_PUBLIC_KEY
)

export default supabase