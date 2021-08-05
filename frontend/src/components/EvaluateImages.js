import React from 'react'

function EvaluateImages({ eva_images }) {
    const moreImg = (img) => {
        if (!img.eva_imgs) {
            return <span></span>;
        }
        return (
            img.eva_imgs.split(';').map((url, index) =>
                <img key={index} src={"https://vcdn.tikicdn.com/ts/review/" + url + ".jpg"} alt="" />

            )
        );
    }

    return (
        <>
            <div className="evaluate__imgs">
                <p className="evaluate__title">
                    Tất cả hình ảnh
                </p>
                {eva_images.map((img) => {
                    return (
                        moreImg(img)
                    );
                })}
                <hr />

            </div>

            <div className="evaluate__filter"></div>
        </>
    )
}

export default EvaluateImages
