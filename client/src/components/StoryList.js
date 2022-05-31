import React from 'react';

const StoryList = ({ stories, title }) => {

    return (
        <div>
            <h3>{title}</h3>
            <p>&nbsp;</p>
            <hr />
            <p>&nbsp;</p>
            {stories &&
                stories.map(story => (
                <div key={story._id} >
                    <p>{story.storyTitle}</p>
                    <p>Created on {story.createdAt} by {story.username}</p>
                    <p>Max lines: {story.lineCount}</p>
                    {story.lines.map(line => (
                        <p key={line._id}>{line.lineContent} by {line.username}</p>
                    ))}
                    <p>&nbsp;</p>
                    <hr />
                    <p>&nbsp;</p>
                </div>
            ))}
        </div>
    );

};

export default StoryList;