import supabase from "./app";

export async function addUser(uid: string, userMetadata: any): Promise<any> {
    const { data, error } = await supabase.from('users').select('*').eq('id', uid).limit(1).select().single();

    if (data) {
        return { data, error };
    } else {
        const { data: newData, error: newError } = await supabase.from('users').upsert({
            id: uid, email: userMetadata.email, profile_picture: userMetadata.picture, name: userMetadata.name
        });
        if (newError) console.error(newError)

        return { newData, newError }
    }
}

export async function queryUser(uid: string): Promise<any> {
    const { data, error } = await supabase.from('users').select('*').eq('id', uid).limit(1).select().single()
    if (data) return { data, error }
}

/**
 * random quote from database
 * 
 * @returns { data, error }
 */
export async function queryRandomQuote(): Promise<any> {
    const { data, error } = await supabase.from('quotes').select('*', { count: 'exact' });
    const randomNumber = Math.floor(Math.random() * data!.length);
    const quote = data![randomNumber]

    const { data: userData, error: userError } = await queryUser(quote!.author)
    if (userError) throw Error(userError)

    quote!.author = userData
    return { data: quote!, error };
}

export async function addQuote(quote: string, uid: string): Promise<any> {
    return await supabase.from('quotes').upsert({ quote, author: uid }, { returning: "minimal" })
}