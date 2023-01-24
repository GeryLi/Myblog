import React, { memo } from 'react'

const Weibo = memo((props) => {
    const { width = 20, height = 20 } = props
    function gotoPage(){
        window.open("https://weibo.com/u/5337057835") 
    }

    return (

        <svg className="icon" width={width + 'px'} height={height + 'px'} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" onClick={gotoPage}><path fill="#f18723" d="M511.609097 961.619254" /><path fill="#f18723" d="M667.36858 154.068981c-12.06478 2.145873-39.007409 12.495592-39.23356 34.794457-0.222057 22.282492 23.642466 36.826743 35.690874 37.945217 44.469817 0 257.143545-11.540847 218.250746 193.656605-5.389754 22.50762-9.512654 56.965409 17.190521 64.216557 24.257473 6.098905 39.228443-19.243273 45.962821-38.536688C948.453397 423.690722 1046.811542 129.605823 667.36858 154.068981L667.36858 154.068981zM667.36858 154.068981" /><path fill="#f72420" d="M722.691583 497.509984c0 0-44.585451 9.640568-23.494087-23.527856 33.112142-64.869427-20.793582-171.319877-160.527067-100.577696-48.143487 25.65838-48.143487 7.477298-46.539966-24.611537 4.327562-175.22072-320.450383-50.290383-412.467099 177.524183-51.873438 138.245597 31.213909 257.673617 159.741167 309.807998 313.717028 111.985514 542.134321-73.336262 581.064982-193.119369C872.399233 463.018426 722.691583 497.509984 722.691583 497.509984L722.691583 497.509984zM421.853887 794.689361c-148.496056 20.399609-280.116769-44.862767-294.047036-145.678894-13.852496-100.876502 95.264691-199.234647 243.760746-219.630163 148.496056-20.417005 280.099373 44.784996 294.02964 145.661498C679.467129 675.896814 570.316174 774.179234 421.853887 794.689361L421.853887 794.689361zM421.853887 794.689361" /><path fill="#f18723" d="M793.487999 444.688965c14.937201 3.729951 20.753673-8.523117 22.39301-19.708877 1.532913-11.189853 27.318182-162.856112-138.312112-145.366785-12.530384 1.382487-20.979824 8.877181-19.524682 19.878746 1.37737 11.018961 10.663874 17.189498 17.73185 16.349363 7.067976-0.819668 117.695562-20.212344 108.631116 96.364745C786.066983 422.815795 778.611174 440.95799 793.487999 444.688965L793.487999 444.688965zM793.487999 444.688965" /><path fill="#161616" d="M373.466853 499.989455c-77.399811 14.843056-130.630153 76.69066-118.847805 138.167826 11.783371 61.476143 84.130096 99.233072 161.567769 84.372619 77.416184-14.821567 130.596384-76.69066 118.847805-138.129964C523.195993 522.945283 450.904527 485.150492 373.466853 499.989455L373.466853 499.989455zM364.278587 665.8459c-26.742061 0-48.425919-18.36323-48.425919-41.188074 0-22.730701 21.683858-41.188074 48.425919-41.188074 26.736944 0 48.405453 18.457374 48.405453 41.188074C412.68404 647.443785 390.994042 665.8459 364.278587 665.8459L364.278587 665.8459zM443.577654 610.262978c-9.974166 0-20.1182-12.026918-20.1182-26.830065 0-14.787798 10.144034-26.77583 20.1182-26.77583 9.978259 0 20.156062 11.988032 20.156062 26.77583C463.733717 598.253456 453.555913 610.262978 443.577654 610.262978L443.577654 610.262978zM443.577654 610.262978" /></svg>

    )
})

export default Weibo