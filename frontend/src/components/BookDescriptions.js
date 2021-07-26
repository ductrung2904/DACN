import React from 'react'

function UnsafeComponent({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function BookDescriptions({ article }) {
    return (
        <div class="content">
            <UnsafeComponent html={article} />
        </div>
    )
}

export default BookDescriptions
