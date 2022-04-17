import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';



export default ({ onSignIn }) => {
    const ref = useRef(null);

    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath: history.location.pathname,
            // onNavigate is being used to sync container's router
            // with child memory rotuer
            onNavigate: ({ pathname: nextPathname }) => {
                // To avoid infinite loop if you're already showing
                // a pathname and tried to acces it again
                const { pathname } = history.location
                if (pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            },
            onSignIn
        });

        // used to update child's router with
        // container's router info
        history.listen(onParentNavigate)
    }, []);

    return <div ref={ref} />;
};
