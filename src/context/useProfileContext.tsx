import React, { useState } from "react";

const defaultValue = { profile: [], changeProfile: () => {} };
interface defaultValueType {
    profile: Term[];
    changeProfile: (profile: Term[]) => void; 
};

export const ProfileContext = React.createContext<defaultValueType>(defaultValue);

export const ProfileContextProvider = ({ children }: { children: React.ReactNode }) => {
    const initialProfileString = localStorage.getItem("profile");
    const initialProfile: Term[] = initialProfileString ? JSON.parse(initialProfileString) : [];
    const [profile, setProfile] = useState<Term[]>(initialProfile);
    const changeProfile = (profile: Term[]) => {
        setProfile(profile);
        localStorage.setItem("profile", JSON.stringify(profile));
    };
    return (
        <ProfileContext.Provider value={{ profile, changeProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};