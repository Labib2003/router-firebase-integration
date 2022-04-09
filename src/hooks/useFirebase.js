import { useState } from "react"

const useFirebase = () => {
    const [user, setUser] = useState({});

    const signInWithGoogle = () => {
        console.log('Sign in');
    }

    return {user, setUser, signInWithGoogle};
}

export default useFirebase;