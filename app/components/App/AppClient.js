import React from 'react';
import { hot } from 'react-hot-loader'
import { useAuth0 } from '@hosamshahin/auth0-react';
import { Loading } from './../Auth';
import AppLayout from './../../layout/default';
import { RoutedContent } from './../../routes';

const AppClient = () => {
    const { isLoading } = useAuth0();

    if (isLoading) {
        return <Loading />;
    }

    return (
        <AppLayout>
            <RoutedContent />
        </AppLayout>

    );
}

export default hot(module)(AppClient);