import React from 'react';
import NavbarOpen from './NavbarOpen';

function Navbar() {
  return (
    <div
      style={{maxWidth: '414px'}}
      className='mx-auto fixed z-50 bg-white w-full top-0'
    >
      {/* Navabar */}
      <div className='h-[72px] flex items-center shadow-sm '>
        <NavbarOpen />
        <div className='flex mx-auto justify-center items-center '>
          <svg
            width='190'
            height='24'
            viewBox='0 0 190 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M121.016 6.57812H122.953L118.953 18H116.984L113 6.57812H114.922L117.305 13.6797C117.43 14.0182 117.562 14.4557 117.703 14.9922C117.844 15.5234 117.935 15.9193 117.977 16.1797C118.044 15.7839 118.148 15.3255 118.289 14.8047C118.43 14.2839 118.544 13.8984 118.633 13.6484L121.016 6.57812ZM131.93 13.6641C131.93 15.0755 131.568 16.1771 130.844 16.9688C130.12 17.7604 129.112 18.1562 127.82 18.1562C127.013 18.1562 126.299 17.974 125.68 17.6094C125.06 17.2448 124.583 16.7214 124.25 16.0391C123.917 15.3568 123.75 14.5651 123.75 13.6641C123.75 12.263 124.109 11.1693 124.828 10.3828C125.547 9.59635 126.56 9.20312 127.867 9.20312C129.117 9.20312 130.107 9.60677 130.836 10.4141C131.565 11.2161 131.93 12.2995 131.93 13.6641ZM125.641 13.6641C125.641 15.6589 126.378 16.6562 127.852 16.6562C129.31 16.6562 130.039 15.6589 130.039 13.6641C130.039 11.6901 129.305 10.7031 127.836 10.7031C127.065 10.7031 126.505 10.9583 126.156 11.4688C125.812 11.9792 125.641 12.7109 125.641 13.6641ZM135.883 18H134.047V5.84375H135.883V18ZM144.609 18L144.352 16.8672H144.258C144.003 17.2682 143.638 17.5833 143.164 17.8125C142.695 18.0417 142.159 18.1562 141.555 18.1562C140.508 18.1562 139.727 17.8958 139.211 17.375C138.695 16.8542 138.438 16.0651 138.438 15.0078V9.35938H140.289V14.6875C140.289 15.349 140.424 15.8464 140.695 16.1797C140.966 16.5078 141.391 16.6719 141.969 16.6719C142.74 16.6719 143.305 16.4427 143.664 15.9844C144.029 15.5208 144.211 14.7474 144.211 13.6641V9.35938H146.055V18H144.609ZM156.273 18H154.43V12.6875C154.43 12.0208 154.294 11.5234 154.023 11.1953C153.758 10.8672 153.333 10.7031 152.75 10.7031C151.974 10.7031 151.406 10.9323 151.047 11.3906C150.688 11.849 150.508 12.6172 150.508 13.6953V18H148.672V9.35938H150.109L150.367 10.4922H150.461C150.721 10.0807 151.091 9.76302 151.57 9.53906C152.049 9.3151 152.581 9.20312 153.164 9.20312C155.237 9.20312 156.273 10.2578 156.273 12.3672V18ZM162.047 16.6719C162.495 16.6719 162.943 16.6016 163.391 16.4609V17.8438C163.188 17.9323 162.924 18.0052 162.602 18.0625C162.284 18.125 161.953 18.1562 161.609 18.1562C159.87 18.1562 159 17.2396 159 15.4062V10.75H157.82V9.9375L159.086 9.26562L159.711 7.4375H160.844V9.35938H163.305V10.75H160.844V15.375C160.844 15.8177 160.953 16.1458 161.172 16.3594C161.396 16.5677 161.688 16.6719 162.047 16.6719ZM168.898 18.1562C167.555 18.1562 166.503 17.7656 165.742 16.9844C164.987 16.1979 164.609 15.1172 164.609 13.7422C164.609 12.3307 164.961 11.2214 165.664 10.4141C166.367 9.60677 167.333 9.20312 168.562 9.20312C169.703 9.20312 170.604 9.54948 171.266 10.2422C171.927 10.9349 172.258 11.888 172.258 13.1016V14.0938H166.5C166.526 14.9323 166.753 15.5781 167.18 16.0312C167.607 16.4792 168.208 16.7031 168.984 16.7031C169.495 16.7031 169.969 16.6562 170.406 16.5625C170.849 16.4635 171.323 16.3021 171.828 16.0781V17.5703C171.38 17.7839 170.927 17.9349 170.469 18.0234C170.01 18.112 169.487 18.1562 168.898 18.1562ZM168.562 10.5938C167.979 10.5938 167.51 10.7786 167.156 11.1484C166.807 11.5182 166.599 12.0573 166.531 12.7656H170.453C170.443 12.0521 170.271 11.513 169.938 11.1484C169.604 10.7786 169.146 10.5938 168.562 10.5938ZM178.117 18.1562C176.773 18.1562 175.721 17.7656 174.961 16.9844C174.206 16.1979 173.828 15.1172 173.828 13.7422C173.828 12.3307 174.18 11.2214 174.883 10.4141C175.586 9.60677 176.552 9.20312 177.781 9.20312C178.922 9.20312 179.823 9.54948 180.484 10.2422C181.146 10.9349 181.477 11.888 181.477 13.1016V14.0938H175.719C175.745 14.9323 175.971 15.5781 176.398 16.0312C176.826 16.4792 177.427 16.7031 178.203 16.7031C178.714 16.7031 179.188 16.6562 179.625 16.5625C180.068 16.4635 180.542 16.3021 181.047 16.0781V17.5703C180.599 17.7839 180.146 17.9349 179.688 18.0234C179.229 18.112 178.706 18.1562 178.117 18.1562ZM177.781 10.5938C177.198 10.5938 176.729 10.7786 176.375 11.1484C176.026 11.5182 175.818 12.0573 175.75 12.7656H179.672C179.661 12.0521 179.49 11.513 179.156 11.1484C178.823 10.7786 178.365 10.5938 177.781 10.5938ZM187.945 9.20312C188.315 9.20312 188.62 9.22917 188.859 9.28125L188.68 10.9922C188.419 10.9297 188.148 10.8984 187.867 10.8984C187.133 10.8984 186.536 11.138 186.078 11.6172C185.625 12.0964 185.398 12.7188 185.398 13.4844V18H183.562V9.35938H185L185.242 10.8828H185.336C185.622 10.3672 185.995 9.95833 186.453 9.65625C186.917 9.35417 187.414 9.20312 187.945 9.20312Z'
              fill='black'
            />
            <path
              d='M11.9593 0.087562C18.5773 0.142514 23.8955 5.51144 23.8548 12.0963C23.8145 18.6117 18.38 23.9562 11.8466 23.9055C5.25722 23.8543 -0.0669315 18.437 0.000636072 11.8523C0.0672628 5.36296 5.4843 0.0337645 11.9593 0.087562Z'
              fill='#E6523B'
            />
            <path
              d='M105.368 12.6962C105.368 14.3864 105.431 16.0796 105.35 17.7661C105.269 19.4771 104.986 21.1509 103.615 22.4116C102.7 23.2524 101.579 23.5786 100.406 23.8024C98.292 24.2055 96.268 24.051 94.4459 22.785C93.8247 22.3533 93.3627 21.7887 93.5628 20.9617C93.793 20.0095 94.6043 19.6365 95.6997 19.9674C96.6627 20.2581 97.585 20.686 98.6404 20.582C99.2812 20.5188 99.8914 20.3729 100.479 20.1338C100.857 19.9797 101.159 19.7082 101.361 19.3408C101.5 19.0875 101.673 18.7862 101.515 18.5441C101.346 18.2869 101.099 18.5898 100.891 18.6359C98.2915 19.2112 95.5199 18.3076 94.3281 16.2331C93.841 15.3854 93.6208 14.4637 93.5825 13.5022C93.4939 11.2672 93.3736 9.02758 93.653 6.7996C93.7821 5.77044 94.5426 5.21001 95.5111 5.29062C96.4874 5.37191 97.0616 6.04443 97.1514 7.08078C97.3231 9.05777 97.1496 11.0392 97.2616 13.0139C97.3609 14.7644 99.0255 15.6495 100.581 14.8269C101.39 14.3992 101.693 13.6847 101.699 12.8255C101.714 10.9897 101.698 9.15365 101.71 7.31778C101.714 6.59044 101.951 5.97121 102.588 5.53301C103.598 4.83873 105.336 5.36469 105.362 7.36332C105.386 9.14065 105.367 10.9185 105.368 12.6962Z'
              fill='#222121'
              fillOpacity='0.9'
            />
            <path
              d='M85.052 12.1419C85.0527 13.6857 85.043 15.2295 85.0566 16.7731C85.0635 17.5542 84.8272 18.1913 84.1109 18.5796C83.3925 18.9692 82.6894 18.8644 82.1013 18.3524C81.8278 18.1142 81.6555 18.2167 81.4295 18.3106C79.3181 19.1883 77.2881 18.9264 75.4197 17.7122C73.9813 16.7775 73.3862 15.2797 73.3329 13.6216C73.2656 11.5264 73.306 9.42769 73.3153 7.33057C73.3207 6.10041 74.0298 5.21528 75.0568 5.27891C76.2737 5.35418 76.7514 5.76176 76.9515 7.2101C77.0424 7.86778 76.972 8.54786 76.9727 9.21772C76.9738 10.412 76.9663 11.6062 76.9751 12.8004C76.9854 14.18 77.9058 15.1321 79.2248 15.1452C80.4327 15.1571 81.3898 14.157 81.3967 12.8508C81.406 11.1032 81.3825 9.35537 81.4069 7.60803C81.4178 6.81723 81.5907 6.04692 82.2883 5.55042C82.8454 5.15383 83.4971 5.11803 84.0865 5.43385C84.7455 5.78687 85.0514 6.40592 85.0514 7.16114C85.0514 8.82142 85.0514 10.4817 85.052 12.1419Z'
              fill='#222121'
              fillOpacity='0.9'
            />
            <path
              d='M87.515 9.31901C87.5159 6.93344 87.4955 4.54767 87.5235 2.16245C87.541 0.675147 88.3863 -0.106071 89.6708 0.089276C90.5829 0.227961 91.113 0.922838 91.1564 2.13414C91.1919 3.12203 91.1671 4.11211 91.1672 5.10125C91.1677 8.76679 91.163 12.4324 91.1726 16.098C91.1738 16.5684 91.1314 17.0274 90.9933 17.4721C90.7641 18.2089 90.1411 18.632 89.3527 18.6443C88.5173 18.6574 87.9808 18.2468 87.6932 17.4954C87.5369 17.0871 87.507 16.6545 87.509 16.2138C87.5193 13.9155 87.5139 11.6173 87.515 9.31901Z'
              fill='#222121'
              fillOpacity='0.9'
            />
            <path
              d='M7.16146 11.9206C7.16146 11.1344 7.15488 10.3482 7.16407 9.56214C7.16933 9.11247 7.18836 8.6117 7.81554 8.64313C8.41843 8.67332 8.42241 9.16866 8.42314 9.61824C8.42545 10.9869 8.41497 12.3555 8.42617 13.724C8.44443 15.9423 9.88135 17.4578 11.9438 17.4506C13.9958 17.4434 15.4487 15.8961 15.4622 13.701C15.4664 13.0313 15.4666 12.3615 15.4638 11.6919C15.4621 11.2827 15.642 10.9863 16.0602 10.9823C16.4721 10.9784 16.6956 11.2719 16.6881 11.6721C16.6668 12.8041 16.7985 13.9421 16.5395 15.0656C16.0141 17.3451 13.9076 18.8331 11.4437 18.6533C9.26743 18.4946 7.40304 16.6573 7.23848 14.4501C7.17596 13.6113 7.2283 12.7639 7.2283 11.9205C7.20607 11.9206 7.18374 11.9206 7.16146 11.9206Z'
              fill='#FFFDFD'
            />
            <path
              d='M14.5987 10.4642C14.5987 11.5404 14.6078 12.6168 14.5966 13.6929C14.5801 15.2792 13.476 16.4602 11.979 16.5109C10.5124 16.5607 9.25698 15.3895 9.22474 13.8242C9.17859 11.5853 9.21135 9.34479 9.21221 7.10501C9.21238 6.66527 9.30171 6.24973 9.84277 6.23776C10.4152 6.22514 10.4533 6.66672 10.4537 7.09535C10.4555 8.98609 10.4548 10.8768 10.4549 12.7675C10.4549 12.9712 10.4521 13.1748 10.4555 13.3784C10.4761 14.5926 11.0024 15.2804 11.9103 15.2822C12.8153 15.2839 13.36 14.5779 13.3627 13.3866C13.3675 11.3504 13.3635 9.31422 13.3725 7.27804C13.3745 6.83064 13.2495 6.2369 13.9522 6.23173C14.6925 6.22625 14.5942 6.83616 14.597 7.3226C14.6029 8.36981 14.5988 9.41698 14.5987 10.4642Z'
              fill='white'
            />
            <path
              d='M11.2835 9.81028C11.2835 8.61673 11.2862 7.42322 11.2821 6.22967C11.2806 5.79831 11.3042 5.36134 11.8652 5.33731C12.4957 5.3102 12.5129 5.77637 12.5121 6.24195C12.5081 8.59988 12.5041 10.9579 12.5155 13.3158C12.5177 13.7794 12.413 14.1831 11.8945 14.1777C11.3795 14.1724 11.2732 13.7635 11.2788 13.3036C11.2932 12.1391 11.2836 10.9747 11.2835 9.81028Z'
              fill='#FFFDFD'
            />
            <path
              d='M40.3088 10.0036C39.2355 6.38451 35.2588 4.33328 31.5973 5.54291C30.8564 5.78765 30.1612 6.28282 29.4829 5.45075C29.4241 5.37874 29.2717 5.3748 29.1599 5.35479C27.8395 5.11804 26.8988 5.97406 26.8901 7.46828C26.8741 10.2363 26.8849 13.0045 26.8848 15.7725C26.8848 17.7831 26.8734 19.7936 26.89 21.8041C26.9011 23.1537 27.4862 23.8598 28.5583 23.8864C29.8266 23.9178 30.5062 23.3043 30.539 22.0198C30.5718 20.7399 30.5462 19.4584 30.5462 18.1015C33.3964 18.8959 34.1198 18.9605 35.5415 18.5659C39.2634 17.5328 41.4024 13.6912 40.3088 10.0036ZM33.6683 15.171C32.2123 15.1901 30.5576 14.0091 30.5622 11.9399C30.5664 10.1103 31.978 8.79586 33.8487 8.8148C35.6888 8.8334 36.933 10.1345 36.9173 12.0237C36.9015 13.9108 35.5898 15.1461 33.6683 15.171Z'
              fill='#212121'
              fillOpacity='0.9'
            />
            <path
              d='M71.0339 8.87736C71.0338 6.5181 71.0499 4.15858 71.027 1.79949C71.0139 0.459558 69.9224 -0.297241 68.662 0.110345C67.8488 0.373303 67.4083 1.12399 67.3905 2.34816C67.3735 3.50985 67.3868 4.67201 67.3868 5.91876C67.1598 5.85068 67.0767 5.8349 67.0013 5.8018C64.2434 4.59123 61.6942 5.05992 59.5466 7.04654C57.4612 8.97551 56.8551 11.4534 57.7498 14.18C58.9988 17.9865 63.3938 19.8202 67.0867 18.1432C67.3432 18.0268 67.6148 17.7335 67.9408 18.0849C68.5501 18.742 69.3019 18.8422 70.0722 18.4545C70.8634 18.0561 71.0442 17.3131 71.0393 16.4796C71.0246 13.9455 71.034 11.4115 71.0339 8.87736ZM67.3709 11.9475C67.3773 13.8395 66.0744 15.1615 64.2032 15.1614C62.3951 15.1612 61.1125 13.8127 61.0152 12.0029C60.9288 10.3935 62.5118 8.74116 64.2283 8.77849C66.014 8.81736 67.4652 10.2861 67.3709 11.9475Z'
              fill='#212121'
              fillOpacity='0.9'
            />
            <path
              d='M53.7808 13.2151C55.076 13.2105 55.9701 12.1904 55.7546 10.9382C54.9168 6.06972 49.7318 3.57429 45.4139 6.24475C42.9659 7.75874 41.964 10.1201 42.3301 12.9388C42.6792 15.6259 44.2786 17.4691 46.8031 18.3967C49.3899 19.3473 52.1328 18.6468 53.823 16.8307C54.3853 16.2264 54.5079 15.4422 54.0907 14.8541C53.6197 14.1901 52.9727 14.1629 52.2343 14.3956C51.7051 14.5624 51.2437 14.8525 50.7393 15.059C48.951 15.7906 46.94 15.1835 46.2792 13.2178C48.8324 13.2178 51.3067 13.2241 53.7808 13.2151ZM49.3459 8.84833C50.3835 8.95062 51.2329 9.39712 51.8309 10.45H46.2867C47.0547 9.28936 48.0305 8.71862 49.3459 8.84833Z'
              fill='#222121'
              fillOpacity='0.9'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
