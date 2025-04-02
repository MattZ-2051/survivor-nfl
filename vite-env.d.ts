/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly: string;
	DATABASE_URL: string;
	PUBLIC_SUPABASE_URL: string;
	PUBLIC_SUPABASE_ANON_KEY: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
