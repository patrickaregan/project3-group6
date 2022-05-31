import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_STORIES } from '../utils/queries';
import StoryList from '../components/StoryList';

const Home = () => {
    const { loading, data } = useQuery(QUERY_STORIES);
    const stories = data?.stories || [];

    return (
        <main>
            <div>
                <p>Home Page</p>
            </div>
            <div>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <StoryList stories={stories} title="Some stories to browse..." />
                )}
            </div>
        </main>
        
    );

};

export default Home;