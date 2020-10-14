import { createContext } from 'react';

const DeveloperContext = createContext({
    isAuthenticated: false,
})

export default DeveloperContext;