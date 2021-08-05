import React from 'react';
import StarRating from './StarRating';

function Evaluate({ evaluates }) {
    const moreImg = (evaluate) => {
        if (!evaluate.eva_imgs) {
            return <span></span>;
        }
        return (
            evaluate.eva_imgs.split(';').map((url, index) =>
                <img key={index} src={"https://vcdn.tikicdn.com/ts/review/" + url + ".jpg"} alt="" />

            )
        );
    }
    return (
        <>
            {evaluates.map((evaluate) => {
                return (
                    <>
                        <div class="evaluate__item">
                            <div class="evaluate__avatar d-flex align-items-center">
                                <img className="evaluate__avatar__img" src="//tiki.vn/assets/img/avatar.png" alt="" />
                                <div class="evaluate__info">
                                    <div class="evaluate__info__content">
                                        <span class="evaluate__info__name">{evaluate.cus_name}</span>
                                        <span class="evaluate__info__bought">
                                            <span class="ico-tick"></span>
                                            Đã mua hàng ở Tiki
                                        </span>
                                    </div>
                                    <div class="evaluate__info__content">
                                        <span class="evaluate__date">Nhận xét vào {new Date(evaluate.eva_date).toLocaleDateString('vi-VN', { year: 'numeric', month: '2-digit', day: '2-digit' })}</span>
                                        <span class="evaluate__seller"> Mua từ nhà bán {evaluate.shop_name}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="evaluate__rate">
                                <StarRating rating={evaluate.eva_rate} />
                            </div>
                            <div class="evaluate__title">
                                {evaluate.eva_title}
                            </div>
                            <div class="evaluate__content">
                                {evaluate.eva_content}
                            </div>
                            <div class="evaluate__images">
                                {moreImg(evaluate)}
                            </div>
                            <span class="evaluate__thank"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 20 20">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0H20V20H0z"></path>
                                    <path fill="#0d5cb6" fill-rule="nonzero"
                                        d="M14.252 17.063c.465 0 .863-.056 1.195-.167.443-.143.8-.387 1.071-.73.271-.343.429-.747.473-1.212.022-.254.006-.503-.05-.747.277-.443.404-.908.382-1.395-.01-.132-.038-.265-.083-.398.266-.398.393-.819.382-1.262 0-.166-.028-.332-.083-.498.155-.232.266-.481.332-.747l.067-.083v-.73l-.034-.083v-.05c-.022-.033-.033-.055-.033-.066-.166-.642-.531-1.069-1.096-1.279-.265-.088-.542-.133-.83-.133h-2.888c.044-.298.083-.525.116-.68.144-.742.116-1.4-.083-1.976-.078-.221-.21-.586-.399-1.096l-.149-.398c-.177-.443-.476-.753-.896-.93-.321-.144-.648-.216-.98-.216-.376 0-.742.095-1.096.283-.564.287-.84.747-.83 1.378.011.254.017.453.017.597.01.454.022.797.033 1.03 0 .055-.011.105-.033.149-.033.066-.091.172-.174.315l-.191.332c-.388.676-.681 1.174-.88 1.495-.133.199-.313.365-.54.498-.227.132-.423.215-.59.249l-.248.05H4.258c-.332 0-.614.116-.847.348-.232.233-.349.515-.349.847v6.11c0 .331.117.613.35.846.232.232.514.349.846.349h9.994zm0-1.196h-6.94l.017-6.441c.51-.244.908-.587 1.195-1.03V8.38c.21-.332.504-.836.88-1.51l.017-.017c.022-.034.1-.166.232-.399.011-.011.034-.044.067-.1.033-.055.055-.094.066-.116.155-.265.221-.548.2-.846-.012-.244-.023-.56-.034-.947v-.63c-.01-.067 0-.122.033-.167.022-.044.072-.088.15-.132.177-.089.354-.133.531-.133.166 0 .338.039.515.116.11.044.193.127.249.249.077.232.127.365.15.398.165.454.292.808.38 1.063.134.387.145.841.034 1.361-.033.188-.072.426-.116.714l-.232 1.395h4.3c.143 0 .287.022.431.066.166.067.277.216.332.448.011 0 .02.011.025.034.005.022.008.038.008.05v.232l-.033.133c-.033.121-.083.238-.15.348l-.315.465.15.531c.022.067.033.139.033.216.01.188-.05.37-.183.548l-.299.465.15.531c.01.055.022.105.033.15.011.22-.055.442-.2.664l-.265.415.1.415v.05c.033.143.044.282.033.414v.017c-.022.221-.094.404-.216.548-.122.155-.288.271-.498.349-.21.066-.487.1-.83.1zm-8.135 0h-1.86v-6.11h1.86v6.11z">
                                    </path>
                                </g>
                            </svg><span>Hữu ích</span></span><span class="evaluate__reply">Gửi trả lời</span>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default Evaluate
