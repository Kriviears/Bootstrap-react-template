import React from 'react';

const lfpContext = React.createContext({
    currentPage: '',
    changePage: () => {}
})

export default lfpContext;