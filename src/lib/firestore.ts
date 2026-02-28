import {
    doc,
    setDoc,
    getDoc,
    updateDoc,
    collection,
    query,
    where,
    getDocs,
    addDoc,
    serverTimestamp,
    Timestamp
} from 'firebase/firestore';
import { db } from './firebase';

// --- TYPES & INTERFACES ---

export type UserRole = 'engineer' | 'enterprise';

export interface UserProfile {
    uid: string;
    name: string;
    email: string;
    role: UserRole;
    photoURL?: string;
    bio?: string;
    skills?: string[];
    githubUsername?: string;
    reputationXP: number;
    badges: string[];
    createdAt: Timestamp;
}

export interface EnterpriseProfile {
    uid: string;
    companyName: string;
    website?: string;
    industry?: string;
    description?: string;
    location?: string;
    verifiedStatus: boolean;
}

export interface Problem {
    id?: string;
    title: string;
    description: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    bounty: string;
    postedBy: string; // Enterprise UID
    createdAt: Timestamp;
    deadline?: Timestamp;
    tags: string[];
}

export interface Solution {
    id?: string;
    problemId: string;
    userId: string;
    submissionLink: string;
    score?: number;
    AI_feedback?: string;
    approved: boolean;
    createdAt: Timestamp;
}

// --- SERVICE FUNCTIONS ---

/**
 * Creates or updates a core user document in Firestore
 */
export const syncUserToFirestore = async (userData: Partial<UserProfile>) => {
    if (!userData.uid) return;

    const userRef = doc(db, 'users', userData.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
        // Initial creation
        const newUser: UserProfile = {
            uid: userData.uid,
            name: userData.name || 'Anonymous',
            email: userData.email || '',
            role: userData.role || 'engineer',
            photoURL: userData.photoURL || '',
            bio: '',
            skills: [],
            githubUsername: '',
            reputationXP: 0,
            badges: [],
            createdAt: serverTimestamp() as Timestamp,
            ...userData
        };
        await setDoc(userRef, newUser);

        // If enterprise, also create profile
        if (userData.role === 'enterprise') {
            await createEnterpriseProfile(userData.uid, userData.name || 'New Enterprise');
        }
    } else {
        // Update existing with merge
        await updateDoc(userRef, { ...userData });
    }
};

/**
 * Creates an initial enterprise profile
 */
const createEnterpriseProfile = async (uid: string, companyName: string) => {
    const profileRef = doc(db, 'enterprise_profiles', uid);
    const newProfile: EnterpriseProfile = {
        uid,
        companyName,
        verifiedStatus: false
    };
    await setDoc(profileRef, newProfile);
};

/**
 * Generic profile update helper
 */
export const updateUserProfile = async (uid: string, data: Partial<UserProfile>) => {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, { ...data });
};

/**
 * Enterprise profile update helper
 */
export const updateEnterpriseProfile = async (uid: string, data: Partial<EnterpriseProfile>) => {
    const profileRef = doc(db, 'enterprise_profiles', uid);
    await updateDoc(profileRef, { ...data });
};

/**
 * Fetch user data by UID
 */
export const getUserProfile = async (uid: string): Promise<UserProfile | null> => {
    const userRef = doc(db, 'users', uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() ? (userSnap.data() as UserProfile) : null;
};

/**
 * Creates a new problem (Enterprise only)
 */
export const createProblem = async (problemData: Omit<Problem, 'createdAt' | 'id'>) => {
    const problemsRef = collection(db, 'problems');
    const newProblem = {
        ...problemData,
        createdAt: serverTimestamp()
    };
    return await addDoc(problemsRef, newProblem);
};

/**
 * Fetches all problems
 */
export const getAllProblems = async (): Promise<Problem[]> => {
    const problemsRef = collection(db, 'problems');
    const q = query(problemsRef);
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Problem));
};

/**
 * Submits a solution (Engineer only)
 */
export const submitSolution = async (solutionData: Omit<Solution, 'createdAt' | 'id' | 'approved'>) => {
    const solutionsRef = collection(db, 'solutions');
    const newSolution = {
        ...solutionData,
        approved: false,
        createdAt: serverTimestamp()
    };
    return await addDoc(solutionsRef, newSolution);
};

/**
 * Get solutions for a specific problem
 */
export const getProblemSolutions = async (problemId: string): Promise<Solution[]> => {
    const solutionsRef = collection(db, 'solutions');
    const q = query(solutionsRef, where('problemId', '==', problemId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Solution));
};
