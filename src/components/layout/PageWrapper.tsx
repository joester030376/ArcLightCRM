import React, { ReactNode, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { setAppState } from '../../redux/features/appStateSlice';

type Props = {
    state?: string, 
    children: ReactNode
};

const PageWrapper = (props: Props) => {
    const dispatch = useDispatch()

    useEffect(() => { 
        if (props.state) {
            dispatch(setAppState(props.state));
        }
    }, [dispatch, props])

    return (
        <>{props.children}</>
    );
}

export default PageWrapper;