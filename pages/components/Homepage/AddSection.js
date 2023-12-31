import styles from '../../../styles/AddSection/AddSection.module.css'

export default function AddSection() {
    return (
        <>
            <div className={`${styles.ContainerWidth}`}>
                <div className={`row`}>
                    <div className={`col-md-5 order-lg-2`} style={{ margin: 'auto' }}>
                        <img src="https://jep-asset.akamaized.net/cms/assets/jfs/home/come-be-part-of-this-v4.webp" alt="#ImgNotFound" className='w-100' />
                    </div>
                    <div className={`col-md-7 text-white`} style={{ margin: 'auto' }}>
                        <div className={`${styles.rightSide} py-5 px-3`}>
                            <div>
                                <h1 className={styles.mainHeading}><b>Come, be part of this transition to India's evolving financial life</b></h1>
                                <h5>Leveraging the latest technology, we empower you to manage your finances in an informed way.</h5>
                                <div className="row mt-3">
                                    <div className="col-md-6 mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" fill="none">
                                            <circle cx="32" cy="32" r="32" fill="#6B420C"></circle>
                                            <path d="M31.9082 55C30.8193 55 29.749 54.8088 28.7275 54.4324C23.8858 52.6466 19.9078 49.8329 17.2236 46.2954C14.3196 42.4682 12.984 37.8897 13.3614 33.0553L14.1445 22.0068C14.295 19.8831 15.5035 18.0113 17.3769 16.9999L28.9692 10.7425C29.8691 10.2566 30.8855 10 31.908 10C32.9305 10 33.9468 10.2569 34.8467 10.7425L46.4387 16.9999C48.3124 18.0113 49.5209 19.8831 49.6714 22.0068L50.4567 33.0844C50.8324 37.8944 49.4965 42.4679 46.5926 46.2952C43.9083 49.8327 39.9303 52.6461 35.0891 54.4317C34.0676 54.8088 32.9971 55 31.9082 55Z" fill="#FFB300"></path>
                                            <path d="M31.9084 52.9582C31.0613 52.9582 30.229 52.8095 29.4343 52.5165C24.9589 50.8659 21.2992 48.2878 18.8508 45.0612C16.254 41.6388 15.06 37.5424 15.3979 33.2149L16.1819 22.1517C16.2828 20.7291 17.0922 19.4753 18.3475 18.7978L29.9398 12.5404C30.5426 12.215 31.2234 12.043 31.9084 12.043C32.5935 12.043 33.2743 12.215 33.8771 12.5404L45.4692 18.7978C46.7242 19.4753 47.5338 20.7291 47.6347 22.1517L48.4199 33.2293C48.7569 37.5424 47.5628 41.6388 44.9661 45.0612C42.5177 48.2878 38.8582 50.8659 34.383 52.5163C33.5879 52.8095 32.7554 52.9582 31.9084 52.9582Z" fill="white"></path>
                                            <path d="M19.3177 20.5956L30.91 14.3381C31.5332 14.0019 32.2837 14.0019 32.9068 14.3381L44.4991 20.5956C45.1322 20.9373 45.5464 21.5791 45.5975 22.2967L46.3827 33.3743C47.0023 41.3067 41.882 47.574 33.6763 50.6007C32.5354 51.0215 31.2817 51.0215 30.1409 50.6007C21.9348 47.5743 16.8148 41.3069 17.4344 33.3743L18.2196 22.2967C18.2704 21.5791 18.6847 20.9373 19.3177 20.5956Z" fill="url(#paint0_linear_1339_111694)"></path>
                                            <path d="M31.9083 49.859C31.4281 49.859 30.9562 49.7746 30.5055 49.6085C22.4212 46.6268 17.9276 40.5877 18.4848 33.4531L19.2705 22.368C19.2961 22.0083 19.5007 21.6912 19.8183 21.5196L31.4104 15.2624C31.5628 15.1802 31.7351 15.1367 31.9083 15.1367C32.0815 15.1367 32.2537 15.1802 32.4062 15.2624L43.9985 21.5198C44.3158 21.6912 44.5205 22.0083 44.546 22.368L45.3312 33.4456C45.8889 40.5875 41.3953 46.6268 33.3112 49.6083C32.8606 49.7746 32.3884 49.859 31.9083 49.859Z" fill="url(#paint1_linear_1339_111694)"></path>
                                            <path d="M35.875 23.75H27.125C26.4288 23.75 25.7611 24.0266 25.2688 24.5188C24.7766 25.0111 24.5 25.6788 24.5 26.375V38.625C24.5 39.3212 24.7766 39.9889 25.2688 40.4812C25.7611 40.9734 26.4288 41.25 27.125 41.25H35.875C36.5712 41.25 37.2389 40.9734 37.7312 40.4812C38.2234 39.9889 38.5 39.3212 38.5 38.625V26.375C38.5 25.6788 38.2234 25.0111 37.7312 24.5188C37.2389 24.0266 36.5712 23.75 35.875 23.75ZM29.3125 27.25H33.6875C33.9196 27.25 34.1421 27.3422 34.3062 27.5063C34.4703 27.6704 34.5625 27.8929 34.5625 28.125C34.5625 28.3571 34.4703 28.5796 34.3062 28.7437C34.1421 28.9078 33.9196 29 33.6875 29H33.53C33.7115 29.5103 33.7308 30.0642 33.5851 30.5859C33.4394 31.1075 33.1359 31.5714 32.7163 31.9137L34.0812 32.5962C34.2873 32.7011 34.4435 32.8834 34.5157 33.1031C34.5878 33.3228 34.57 33.5621 34.4663 33.7687C34.3935 33.913 34.2823 34.0344 34.1448 34.1193C34.0074 34.2043 33.8491 34.2495 33.6875 34.25C33.5502 34.2516 33.4148 34.2185 33.2938 34.1538L29.7938 32.4038C29.6194 32.3144 29.48 32.1691 29.398 31.9912C29.316 31.8132 29.2961 31.6129 29.3415 31.4223C29.3869 31.2317 29.4949 31.0619 29.6483 30.94C29.8017 30.818 29.9916 30.7512 30.1875 30.75H31.0625C31.2946 30.75 31.5171 30.6578 31.6812 30.4937C31.8453 30.3296 31.9375 30.1071 31.9375 29.875C31.9375 29.6429 31.8453 29.4204 31.6812 29.2563C31.5171 29.0922 31.2946 29 31.0625 29H29.3125C29.0804 29 28.8579 28.9078 28.6938 28.7437C28.5297 28.5796 28.4375 28.3571 28.4375 28.125C28.4375 27.8929 28.5297 27.6704 28.6938 27.5063C28.8579 27.3422 29.0804 27.25 29.3125 27.25V27.25ZM34.125 38.625H28.875C28.6429 38.625 28.4204 38.5328 28.2563 38.3687C28.0922 38.2046 28 37.9821 28 37.75C28 37.5179 28.0922 37.2954 28.2563 37.1313C28.4204 36.9672 28.6429 36.875 28.875 36.875H34.125C34.3571 36.875 34.5796 36.9672 34.7437 37.1313C34.9078 37.2954 35 37.5179 35 37.75C35 37.9821 34.9078 38.2046 34.7437 38.3687C34.5796 38.5328 34.3571 38.625 34.125 38.625Z" fill="#491400"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_1339_111694" x1="23.0379" y1="18.7749" x2="42.6455" y2="46.28" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFB300"></stop>
                                                    <stop offset="0.1628" stop-color="#FDA60A"></stop>
                                                    <stop offset="0.2847" stop-color="#FC9914"></stop>
                                                    <stop offset="0.3445" stop-color="#FCA01A"></stop>
                                                    <stop offset="0.4309" stop-color="#FCB32B"></stop>
                                                    <stop offset="0.5173" stop-color="#FDCD41"></stop>
                                                    <stop offset="0.554" stop-color="#FDC034"></stop>
                                                    <stop offset="0.652" stop-color="#FCA418"></stop>
                                                    <stop offset="0.7372" stop-color="#FB9206"></stop>
                                                    <stop offset="0.7995" stop-color="#FB8C00"></stop>
                                                    <stop offset="0.8426" stop-color="#FC9700"></stop>
                                                    <stop offset="0.9321" stop-color="#FDA700"></stop>
                                                    <stop offset="1" stop-color="#FFB300"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1339_111694" x1="23.6284" y1="19.5914" x2="42.0084" y2="45.3743" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.0272" stop-color="#FFB300"></stop>
                                                    <stop offset="0.5173" stop-color="#FFE082"></stop>
                                                    <stop offset="1" stop-color="#FFB300"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <h5 style={{ marginLeft: '60px', marginTop: '-35px' }}>Real-time Transactions</h5>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" fill="none">
                                            <circle cx="32" cy="32" r="32" fill="#6B420C"></circle>
                                            <path d="M31.9082 55C30.8193 55 29.749 54.8088 28.7275 54.4324C23.8858 52.6466 19.9078 49.8329 17.2236 46.2954C14.3196 42.4682 12.984 37.8897 13.3614 33.0553L14.1445 22.0068C14.295 19.8831 15.5035 18.0113 17.3769 16.9999L28.9692 10.7425C29.8691 10.2566 30.8855 10 31.908 10C32.9305 10 33.9468 10.2569 34.8467 10.7425L46.4387 16.9999C48.3124 18.0113 49.5209 19.8831 49.6714 22.0068L50.4567 33.0844C50.8324 37.8944 49.4965 42.4679 46.5926 46.2952C43.9083 49.8327 39.9303 52.6461 35.0891 54.4317C34.0676 54.8088 32.9971 55 31.9082 55Z" fill="#FFB300"></path>
                                            <path d="M31.9084 52.9582C31.0613 52.9582 30.229 52.8095 29.4343 52.5165C24.9589 50.8659 21.2992 48.2878 18.8508 45.0612C16.254 41.6388 15.06 37.5424 15.3979 33.2149L16.1819 22.1517C16.2828 20.7291 17.0922 19.4753 18.3475 18.7978L29.9398 12.5404C30.5426 12.215 31.2234 12.043 31.9084 12.043C32.5935 12.043 33.2743 12.215 33.8771 12.5404L45.4692 18.7978C46.7242 19.4753 47.5338 20.7291 47.6347 22.1517L48.4199 33.2293C48.7569 37.5424 47.5628 41.6388 44.9661 45.0612C42.5177 48.2878 38.8582 50.8659 34.383 52.5163C33.5879 52.8095 32.7554 52.9582 31.9084 52.9582Z" fill="white"></path>
                                            <path d="M19.3177 20.5956L30.91 14.3381C31.5332 14.0019 32.2837 14.0019 32.9068 14.3381L44.4991 20.5956C45.1322 20.9373 45.5464 21.5791 45.5975 22.2967L46.3827 33.3743C47.0023 41.3067 41.882 47.574 33.6763 50.6007C32.5354 51.0215 31.2817 51.0215 30.1409 50.6007C21.9348 47.5743 16.8148 41.3069 17.4344 33.3743L18.2196 22.2967C18.2704 21.5791 18.6847 20.9373 19.3177 20.5956Z" fill="url(#paint0_linear_1339_111694)"></path>
                                            <path d="M31.9083 49.859C31.4281 49.859 30.9562 49.7746 30.5055 49.6085C22.4212 46.6268 17.9276 40.5877 18.4848 33.4531L19.2705 22.368C19.2961 22.0083 19.5007 21.6912 19.8183 21.5196L31.4104 15.2624C31.5628 15.1802 31.7351 15.1367 31.9083 15.1367C32.0815 15.1367 32.2537 15.1802 32.4062 15.2624L43.9985 21.5198C44.3158 21.6912 44.5205 22.0083 44.546 22.368L45.3312 33.4456C45.8889 40.5875 41.3953 46.6268 33.3112 49.6083C32.8606 49.7746 32.3884 49.859 31.9083 49.859Z" fill="url(#paint1_linear_1339_111694)"></path>
                                            <path d="M35.875 23.75H27.125C26.4288 23.75 25.7611 24.0266 25.2688 24.5188C24.7766 25.0111 24.5 25.6788 24.5 26.375V38.625C24.5 39.3212 24.7766 39.9889 25.2688 40.4812C25.7611 40.9734 26.4288 41.25 27.125 41.25H35.875C36.5712 41.25 37.2389 40.9734 37.7312 40.4812C38.2234 39.9889 38.5 39.3212 38.5 38.625V26.375C38.5 25.6788 38.2234 25.0111 37.7312 24.5188C37.2389 24.0266 36.5712 23.75 35.875 23.75ZM29.3125 27.25H33.6875C33.9196 27.25 34.1421 27.3422 34.3062 27.5063C34.4703 27.6704 34.5625 27.8929 34.5625 28.125C34.5625 28.3571 34.4703 28.5796 34.3062 28.7437C34.1421 28.9078 33.9196 29 33.6875 29H33.53C33.7115 29.5103 33.7308 30.0642 33.5851 30.5859C33.4394 31.1075 33.1359 31.5714 32.7163 31.9137L34.0812 32.5962C34.2873 32.7011 34.4435 32.8834 34.5157 33.1031C34.5878 33.3228 34.57 33.5621 34.4663 33.7687C34.3935 33.913 34.2823 34.0344 34.1448 34.1193C34.0074 34.2043 33.8491 34.2495 33.6875 34.25C33.5502 34.2516 33.4148 34.2185 33.2938 34.1538L29.7938 32.4038C29.6194 32.3144 29.48 32.1691 29.398 31.9912C29.316 31.8132 29.2961 31.6129 29.3415 31.4223C29.3869 31.2317 29.4949 31.0619 29.6483 30.94C29.8017 30.818 29.9916 30.7512 30.1875 30.75H31.0625C31.2946 30.75 31.5171 30.6578 31.6812 30.4937C31.8453 30.3296 31.9375 30.1071 31.9375 29.875C31.9375 29.6429 31.8453 29.4204 31.6812 29.2563C31.5171 29.0922 31.2946 29 31.0625 29H29.3125C29.0804 29 28.8579 28.9078 28.6938 28.7437C28.5297 28.5796 28.4375 28.3571 28.4375 28.125C28.4375 27.8929 28.5297 27.6704 28.6938 27.5063C28.8579 27.3422 29.0804 27.25 29.3125 27.25V27.25ZM34.125 38.625H28.875C28.6429 38.625 28.4204 38.5328 28.2563 38.3687C28.0922 38.2046 28 37.9821 28 37.75C28 37.5179 28.0922 37.2954 28.2563 37.1313C28.4204 36.9672 28.6429 36.875 28.875 36.875H34.125C34.3571 36.875 34.5796 36.9672 34.7437 37.1313C34.9078 37.2954 35 37.5179 35 37.75C35 37.9821 34.9078 38.2046 34.7437 38.3687C34.5796 38.5328 34.3571 38.625 34.125 38.625Z" fill="#491400"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_1339_111694" x1="23.0379" y1="18.7749" x2="42.6455" y2="46.28" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFB300"></stop>
                                                    <stop offset="0.1628" stop-color="#FDA60A"></stop>
                                                    <stop offset="0.2847" stop-color="#FC9914"></stop>
                                                    <stop offset="0.3445" stop-color="#FCA01A"></stop>
                                                    <stop offset="0.4309" stop-color="#FCB32B"></stop>
                                                    <stop offset="0.5173" stop-color="#FDCD41"></stop>
                                                    <stop offset="0.554" stop-color="#FDC034"></stop>
                                                    <stop offset="0.652" stop-color="#FCA418"></stop>
                                                    <stop offset="0.7372" stop-color="#FB9206"></stop>
                                                    <stop offset="0.7995" stop-color="#FB8C00"></stop>
                                                    <stop offset="0.8426" stop-color="#FC9700"></stop>
                                                    <stop offset="0.9321" stop-color="#FDA700"></stop>
                                                    <stop offset="1" stop-color="#FFB300"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1339_111694" x1="23.6284" y1="19.5914" x2="42.0084" y2="45.3743" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.0272" stop-color="#FFB300"></stop>
                                                    <stop offset="0.5173" stop-color="#FFE082"></stop>
                                                    <stop offset="1" stop-color="#FFB300"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <h5 style={{ marginLeft: '60px', marginTop: '-35px' }}>Robust Security</h5>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" fill="none">
                                            <circle cx="32" cy="32" r="32" fill="#6B420C"></circle>
                                            <path d="M31.9082 55C30.8193 55 29.749 54.8088 28.7275 54.4324C23.8858 52.6466 19.9078 49.8329 17.2236 46.2954C14.3196 42.4682 12.984 37.8897 13.3614 33.0553L14.1445 22.0068C14.295 19.8831 15.5035 18.0113 17.3769 16.9999L28.9692 10.7425C29.8691 10.2566 30.8855 10 31.908 10C32.9305 10 33.9468 10.2569 34.8467 10.7425L46.4387 16.9999C48.3124 18.0113 49.5209 19.8831 49.6714 22.0068L50.4567 33.0844C50.8324 37.8944 49.4965 42.4679 46.5926 46.2952C43.9083 49.8327 39.9303 52.6461 35.0891 54.4317C34.0676 54.8088 32.9971 55 31.9082 55Z" fill="#FFB300"></path>
                                            <path d="M31.9084 52.9582C31.0613 52.9582 30.229 52.8095 29.4343 52.5165C24.9589 50.8659 21.2992 48.2878 18.8508 45.0612C16.254 41.6388 15.06 37.5424 15.3979 33.2149L16.1819 22.1517C16.2828 20.7291 17.0922 19.4753 18.3475 18.7978L29.9398 12.5404C30.5426 12.215 31.2234 12.043 31.9084 12.043C32.5935 12.043 33.2743 12.215 33.8771 12.5404L45.4692 18.7978C46.7242 19.4753 47.5338 20.7291 47.6347 22.1517L48.4199 33.2293C48.7569 37.5424 47.5628 41.6388 44.9661 45.0612C42.5177 48.2878 38.8582 50.8659 34.383 52.5163C33.5879 52.8095 32.7554 52.9582 31.9084 52.9582Z" fill="white"></path>
                                            <path d="M19.3177 20.5956L30.91 14.3381C31.5332 14.0019 32.2837 14.0019 32.9068 14.3381L44.4991 20.5956C45.1322 20.9373 45.5464 21.5791 45.5975 22.2967L46.3827 33.3743C47.0023 41.3067 41.882 47.574 33.6763 50.6007C32.5354 51.0215 31.2817 51.0215 30.1409 50.6007C21.9348 47.5743 16.8148 41.3069 17.4344 33.3743L18.2196 22.2967C18.2704 21.5791 18.6847 20.9373 19.3177 20.5956Z" fill="url(#paint0_linear_1339_111694)"></path>
                                            <path d="M31.9083 49.859C31.4281 49.859 30.9562 49.7746 30.5055 49.6085C22.4212 46.6268 17.9276 40.5877 18.4848 33.4531L19.2705 22.368C19.2961 22.0083 19.5007 21.6912 19.8183 21.5196L31.4104 15.2624C31.5628 15.1802 31.7351 15.1367 31.9083 15.1367C32.0815 15.1367 32.2537 15.1802 32.4062 15.2624L43.9985 21.5198C44.3158 21.6912 44.5205 22.0083 44.546 22.368L45.3312 33.4456C45.8889 40.5875 41.3953 46.6268 33.3112 49.6083C32.8606 49.7746 32.3884 49.859 31.9083 49.859Z" fill="url(#paint1_linear_1339_111694)"></path>
                                            <path d="M35.875 23.75H27.125C26.4288 23.75 25.7611 24.0266 25.2688 24.5188C24.7766 25.0111 24.5 25.6788 24.5 26.375V38.625C24.5 39.3212 24.7766 39.9889 25.2688 40.4812C25.7611 40.9734 26.4288 41.25 27.125 41.25H35.875C36.5712 41.25 37.2389 40.9734 37.7312 40.4812C38.2234 39.9889 38.5 39.3212 38.5 38.625V26.375C38.5 25.6788 38.2234 25.0111 37.7312 24.5188C37.2389 24.0266 36.5712 23.75 35.875 23.75ZM29.3125 27.25H33.6875C33.9196 27.25 34.1421 27.3422 34.3062 27.5063C34.4703 27.6704 34.5625 27.8929 34.5625 28.125C34.5625 28.3571 34.4703 28.5796 34.3062 28.7437C34.1421 28.9078 33.9196 29 33.6875 29H33.53C33.7115 29.5103 33.7308 30.0642 33.5851 30.5859C33.4394 31.1075 33.1359 31.5714 32.7163 31.9137L34.0812 32.5962C34.2873 32.7011 34.4435 32.8834 34.5157 33.1031C34.5878 33.3228 34.57 33.5621 34.4663 33.7687C34.3935 33.913 34.2823 34.0344 34.1448 34.1193C34.0074 34.2043 33.8491 34.2495 33.6875 34.25C33.5502 34.2516 33.4148 34.2185 33.2938 34.1538L29.7938 32.4038C29.6194 32.3144 29.48 32.1691 29.398 31.9912C29.316 31.8132 29.2961 31.6129 29.3415 31.4223C29.3869 31.2317 29.4949 31.0619 29.6483 30.94C29.8017 30.818 29.9916 30.7512 30.1875 30.75H31.0625C31.2946 30.75 31.5171 30.6578 31.6812 30.4937C31.8453 30.3296 31.9375 30.1071 31.9375 29.875C31.9375 29.6429 31.8453 29.4204 31.6812 29.2563C31.5171 29.0922 31.2946 29 31.0625 29H29.3125C29.0804 29 28.8579 28.9078 28.6938 28.7437C28.5297 28.5796 28.4375 28.3571 28.4375 28.125C28.4375 27.8929 28.5297 27.6704 28.6938 27.5063C28.8579 27.3422 29.0804 27.25 29.3125 27.25V27.25ZM34.125 38.625H28.875C28.6429 38.625 28.4204 38.5328 28.2563 38.3687C28.0922 38.2046 28 37.9821 28 37.75C28 37.5179 28.0922 37.2954 28.2563 37.1313C28.4204 36.9672 28.6429 36.875 28.875 36.875H34.125C34.3571 36.875 34.5796 36.9672 34.7437 37.1313C34.9078 37.2954 35 37.5179 35 37.75C35 37.9821 34.9078 38.2046 34.7437 38.3687C34.5796 38.5328 34.3571 38.625 34.125 38.625Z" fill="#491400"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_1339_111694" x1="23.0379" y1="18.7749" x2="42.6455" y2="46.28" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFB300"></stop>
                                                    <stop offset="0.1628" stop-color="#FDA60A"></stop>
                                                    <stop offset="0.2847" stop-color="#FC9914"></stop>
                                                    <stop offset="0.3445" stop-color="#FCA01A"></stop>
                                                    <stop offset="0.4309" stop-color="#FCB32B"></stop>
                                                    <stop offset="0.5173" stop-color="#FDCD41"></stop>
                                                    <stop offset="0.554" stop-color="#FDC034"></stop>
                                                    <stop offset="0.652" stop-color="#FCA418"></stop>
                                                    <stop offset="0.7372" stop-color="#FB9206"></stop>
                                                    <stop offset="0.7995" stop-color="#FB8C00"></stop>
                                                    <stop offset="0.8426" stop-color="#FC9700"></stop>
                                                    <stop offset="0.9321" stop-color="#FDA700"></stop>
                                                    <stop offset="1" stop-color="#FFB300"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1339_111694" x1="23.6284" y1="19.5914" x2="42.0084" y2="45.3743" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.0272" stop-color="#FFB300"></stop>
                                                    <stop offset="0.5173" stop-color="#FFE082"></stop>
                                                    <stop offset="1" stop-color="#FFB300"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <h5 style={{ marginLeft: '60px', marginTop: '-35px' }}>Partner Network</h5>
                                    </div>
                                    <div className="col-md-6 mt-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 64 64" fill="none">
                                            <circle cx="32" cy="32" r="32" fill="#6B420C"></circle>
                                            <path d="M31.9082 55C30.8193 55 29.749 54.8088 28.7275 54.4324C23.8858 52.6466 19.9078 49.8329 17.2236 46.2954C14.3196 42.4682 12.984 37.8897 13.3614 33.0553L14.1445 22.0068C14.295 19.8831 15.5035 18.0113 17.3769 16.9999L28.9692 10.7425C29.8691 10.2566 30.8855 10 31.908 10C32.9305 10 33.9468 10.2569 34.8467 10.7425L46.4387 16.9999C48.3124 18.0113 49.5209 19.8831 49.6714 22.0068L50.4567 33.0844C50.8324 37.8944 49.4965 42.4679 46.5926 46.2952C43.9083 49.8327 39.9303 52.6461 35.0891 54.4317C34.0676 54.8088 32.9971 55 31.9082 55Z" fill="#FFB300"></path>
                                            <path d="M31.9084 52.9582C31.0613 52.9582 30.229 52.8095 29.4343 52.5165C24.9589 50.8659 21.2992 48.2878 18.8508 45.0612C16.254 41.6388 15.06 37.5424 15.3979 33.2149L16.1819 22.1517C16.2828 20.7291 17.0922 19.4753 18.3475 18.7978L29.9398 12.5404C30.5426 12.215 31.2234 12.043 31.9084 12.043C32.5935 12.043 33.2743 12.215 33.8771 12.5404L45.4692 18.7978C46.7242 19.4753 47.5338 20.7291 47.6347 22.1517L48.4199 33.2293C48.7569 37.5424 47.5628 41.6388 44.9661 45.0612C42.5177 48.2878 38.8582 50.8659 34.383 52.5163C33.5879 52.8095 32.7554 52.9582 31.9084 52.9582Z" fill="white"></path>
                                            <path d="M19.3177 20.5956L30.91 14.3381C31.5332 14.0019 32.2837 14.0019 32.9068 14.3381L44.4991 20.5956C45.1322 20.9373 45.5464 21.5791 45.5975 22.2967L46.3827 33.3743C47.0023 41.3067 41.882 47.574 33.6763 50.6007C32.5354 51.0215 31.2817 51.0215 30.1409 50.6007C21.9348 47.5743 16.8148 41.3069 17.4344 33.3743L18.2196 22.2967C18.2704 21.5791 18.6847 20.9373 19.3177 20.5956Z" fill="url(#paint0_linear_1339_111694)"></path>
                                            <path d="M31.9083 49.859C31.4281 49.859 30.9562 49.7746 30.5055 49.6085C22.4212 46.6268 17.9276 40.5877 18.4848 33.4531L19.2705 22.368C19.2961 22.0083 19.5007 21.6912 19.8183 21.5196L31.4104 15.2624C31.5628 15.1802 31.7351 15.1367 31.9083 15.1367C32.0815 15.1367 32.2537 15.1802 32.4062 15.2624L43.9985 21.5198C44.3158 21.6912 44.5205 22.0083 44.546 22.368L45.3312 33.4456C45.8889 40.5875 41.3953 46.6268 33.3112 49.6083C32.8606 49.7746 32.3884 49.859 31.9083 49.859Z" fill="url(#paint1_linear_1339_111694)"></path>
                                            <path d="M35.875 23.75H27.125C26.4288 23.75 25.7611 24.0266 25.2688 24.5188C24.7766 25.0111 24.5 25.6788 24.5 26.375V38.625C24.5 39.3212 24.7766 39.9889 25.2688 40.4812C25.7611 40.9734 26.4288 41.25 27.125 41.25H35.875C36.5712 41.25 37.2389 40.9734 37.7312 40.4812C38.2234 39.9889 38.5 39.3212 38.5 38.625V26.375C38.5 25.6788 38.2234 25.0111 37.7312 24.5188C37.2389 24.0266 36.5712 23.75 35.875 23.75ZM29.3125 27.25H33.6875C33.9196 27.25 34.1421 27.3422 34.3062 27.5063C34.4703 27.6704 34.5625 27.8929 34.5625 28.125C34.5625 28.3571 34.4703 28.5796 34.3062 28.7437C34.1421 28.9078 33.9196 29 33.6875 29H33.53C33.7115 29.5103 33.7308 30.0642 33.5851 30.5859C33.4394 31.1075 33.1359 31.5714 32.7163 31.9137L34.0812 32.5962C34.2873 32.7011 34.4435 32.8834 34.5157 33.1031C34.5878 33.3228 34.57 33.5621 34.4663 33.7687C34.3935 33.913 34.2823 34.0344 34.1448 34.1193C34.0074 34.2043 33.8491 34.2495 33.6875 34.25C33.5502 34.2516 33.4148 34.2185 33.2938 34.1538L29.7938 32.4038C29.6194 32.3144 29.48 32.1691 29.398 31.9912C29.316 31.8132 29.2961 31.6129 29.3415 31.4223C29.3869 31.2317 29.4949 31.0619 29.6483 30.94C29.8017 30.818 29.9916 30.7512 30.1875 30.75H31.0625C31.2946 30.75 31.5171 30.6578 31.6812 30.4937C31.8453 30.3296 31.9375 30.1071 31.9375 29.875C31.9375 29.6429 31.8453 29.4204 31.6812 29.2563C31.5171 29.0922 31.2946 29 31.0625 29H29.3125C29.0804 29 28.8579 28.9078 28.6938 28.7437C28.5297 28.5796 28.4375 28.3571 28.4375 28.125C28.4375 27.8929 28.5297 27.6704 28.6938 27.5063C28.8579 27.3422 29.0804 27.25 29.3125 27.25V27.25ZM34.125 38.625H28.875C28.6429 38.625 28.4204 38.5328 28.2563 38.3687C28.0922 38.2046 28 37.9821 28 37.75C28 37.5179 28.0922 37.2954 28.2563 37.1313C28.4204 36.9672 28.6429 36.875 28.875 36.875H34.125C34.3571 36.875 34.5796 36.9672 34.7437 37.1313C34.9078 37.2954 35 37.5179 35 37.75C35 37.9821 34.9078 38.2046 34.7437 38.3687C34.5796 38.5328 34.3571 38.625 34.125 38.625Z" fill="#491400"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_1339_111694" x1="23.0379" y1="18.7749" x2="42.6455" y2="46.28" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FFB300"></stop>
                                                    <stop offset="0.1628" stop-color="#FDA60A"></stop>
                                                    <stop offset="0.2847" stop-color="#FC9914"></stop>
                                                    <stop offset="0.3445" stop-color="#FCA01A"></stop>
                                                    <stop offset="0.4309" stop-color="#FCB32B"></stop>
                                                    <stop offset="0.5173" stop-color="#FDCD41"></stop>
                                                    <stop offset="0.554" stop-color="#FDC034"></stop>
                                                    <stop offset="0.652" stop-color="#FCA418"></stop>
                                                    <stop offset="0.7372" stop-color="#FB9206"></stop>
                                                    <stop offset="0.7995" stop-color="#FB8C00"></stop>
                                                    <stop offset="0.8426" stop-color="#FC9700"></stop>
                                                    <stop offset="0.9321" stop-color="#FDA700"></stop>
                                                    <stop offset="1" stop-color="#FFB300"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_1339_111694" x1="23.6284" y1="19.5914" x2="42.0084" y2="45.3743" gradientUnits="userSpaceOnUse">
                                                    <stop offset="0.0272" stop-color="#FFB300"></stop>
                                                    <stop offset="0.5173" stop-color="#FFE082"></stop>
                                                    <stop offset="1" stop-color="#FFB300"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <h5 style={{ marginLeft: '60px', marginTop: '-35px' }}>Latest Technology</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
