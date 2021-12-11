import supabase from "./app"

export const signInWithGoogle = async (): Promise<void> => {
    await supabase.auth.signIn({ provider: 'google' })
}

export const signOut = async (): Promise<void> => {
    await supabase.auth.signOut()
}