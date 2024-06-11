import React from 'react';

export const SelectedTabContext = React.createContext({
    selectedTab: '',
    setSelectedTab: (value: string) => { },
});