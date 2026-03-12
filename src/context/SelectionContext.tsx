'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Coach {
    id: string;
    name: string;
    title: string;
    avatar: string;
    specialties: string[];
}

interface SelectionContextType {
    selectedCoach: Coach | null;
    setSelectedCoach: (coach: Coach | null) => void;
}

const SelectionContext = createContext<SelectionContextType | undefined>(undefined);

export function SelectionProvider({ children }: { children: ReactNode }) {
    const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);

    return (
        <SelectionContext.Provider value={{ selectedCoach, setSelectedCoach }}>
            {children}
        </SelectionContext.Provider>
    );
}

export function useSelection() {
    const context = useContext(SelectionContext);
    if (context === undefined) {
        throw new Error('useSelection must be used within a SelectionProvider');
    }
    return context;
}
