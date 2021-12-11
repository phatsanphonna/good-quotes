declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VUE_APP_SUPABASE_PUBLIC_KEY: string;
      VUE_APP_SUPABASE_URL: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      PWD: string;
    }
  }
}

export { }