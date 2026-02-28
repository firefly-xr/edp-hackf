import React, { createContext, useContext, useEffect, useState } from 'react';
import type { User } from 'firebase/auth';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { onSnapshot, doc } from 'firebase/firestore';
import { auth, googleProvider, githubProvider, db } from '../lib/firebase';
import { syncUserToFirestore } from '../lib/firestore';
import type { UserProfile } from '../lib/firestore';

interface AuthContextType {
    user: User | null;
    profile: UserProfile | null;
    loading: boolean;
    signInWithGoogle: (role?: 'engineer' | 'enterprise') => Promise<void>;
    signInWithGithub: (role?: 'engineer' | 'enterprise') => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let unsubscribeProfile: (() => void) | null = null;

        const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
            setUser(firebaseUser);

            if (unsubscribeProfile) {
                unsubscribeProfile();
                unsubscribeProfile = null;
            }

            if (firebaseUser) {
                // Real-time listener for profile (doesn't block App rendering)
                unsubscribeProfile = onSnapshot(doc(db, 'users', firebaseUser.uid), (docSnap) => {
                    if (docSnap.exists()) {
                        setProfile(docSnap.data() as UserProfile);
                    } else {
                        setProfile(null);
                    }
                }, (error) => {
                    console.error("Profile listener error:", error);
                });
            } else {
                setProfile(null);
            }
            // CRITICAL: Set loading to false as soon as Auth state is confirmed
            setLoading(false);
        });

        return () => {
            unsubscribeAuth();
            if (unsubscribeProfile) unsubscribeProfile();
        };
    }, []);

    const signInWithGoogle = async (role: 'engineer' | 'enterprise' = 'engineer') => {
        try {
            const result = await signInWithPopup(auth, googleProvider);
            if (result.user) {
                await syncUserToFirestore({
                    uid: result.user.uid,
                    email: result.user.email || '',
                    name: result.user.displayName || '',
                    photoURL: result.user.photoURL || '',
                    role
                });
            }
        } catch (error) {
            console.error("Error signing in with Google", error);
            throw error;
        }
    };

    const signInWithGithub = async (role: 'engineer' | 'enterprise' = 'engineer') => {
        try {
            const result = await signInWithPopup(auth, githubProvider);
            if (result.user) {
                await syncUserToFirestore({
                    uid: result.user.uid,
                    email: result.user.email || '',
                    name: result.user.displayName || '',
                    photoURL: result.user.photoURL || '',
                    role
                });
            }
        } catch (error) {
            console.error("Error signing in with GitHub", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
            setProfile(null);
        } catch (error) {
            console.error("Error signing out", error);
            throw error;
        }
    };

    const value = {
        user,
        profile,
        loading,
        signInWithGoogle,
        signInWithGithub,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
