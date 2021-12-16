import supabase from "./app"

/**
 * @returns {Promise<void>}
 */
export const signInWithGoogle = async (): Promise<void> => {
    await supabase.auth.signIn({ provider: 'google' })
}

/**
 * @returns {Promise<void>}
 */
export const signOut = async (): Promise<void> => {
    await supabase.auth.signOut()
}