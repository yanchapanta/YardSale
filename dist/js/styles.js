(()=>{
    //ENTRRADAS
    const svgHtml = `
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d_0_99)">
            <circle cx="24" cy="24" r="20" fill="white"/>
            </g>
            <ellipse cx="20.0968" cy="35.2733" rx="1.73498" ry="1.7267" fill="#C4C4C4"/>
            <ellipse cx="27.6149" cy="35.2733" rx="1.73498" ry="1.7267" fill="#C4C4C4"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.6809 17.9487C33.0896 17.9895 33.4627 18.1981 33.7103 18.5243C33.9524 18.8407 34.049 19.2441 33.9764 19.6351L32.4264 27.2154C32.289 27.8854 31.6967 28.3666 31.0095 28.3665H18.9862L18.4078 30.0932H30.1941C30.6732 30.0932 31.0616 30.4797 31.0616 30.9565C31.0616 31.4334 30.6732 31.8199 30.1941 31.8199H17.9914C17.5368 31.8181 17.109 31.6052 16.8348 31.2443C16.5507 30.8663 16.4727 30.3729 16.6266 29.9263L17.6329 26.9679L15.0651 15.727H12.8675C12.3884 15.727 12 15.3405 12 14.8637C12 14.3869 12.3884 14.0003 12.8675 14.0003H15.9847C16.2603 13.9936 16.5024 14.1816 16.563 14.4493L17.0661 16.6307L32.6809 17.9487ZM19.3447 26.6398H30.7724L32.1835 19.6179L17.4536 18.3746L19.3447 26.6398Z" fill="#C4C4C4"/>
            <circle cx="33" cy="19" r="6" fill="#ACD9B2"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M35.5228 17.2423C35.2877 17.0319 34.9261 17.0514 34.7157 17.2872L32.1181 20.1904L30.9786 19.0354C30.7569 18.8107 30.3949 18.8083 30.1701 19.0301C29.9455 19.2519 29.9429 19.614 30.1648 19.8388L31.7316 21.4266C31.8391 21.5356 31.9858 21.5966 32.1387 21.5966C32.1432 21.5966 32.1478 21.5966 32.1528 21.5966C32.3105 21.5928 32.4596 21.5238 32.5646 21.406L35.5678 18.0492C35.7782 17.8142 35.7579 17.4525 35.5228 17.2423Z" fill="white" stroke="white" stroke-width="0.8"/>
            <defs>
            <filter id="filter0_d_0_99" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_99"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_99" result="shape"/>
            </filter>
            </defs>
            </svg>
    
    `;
    const svgHtmlShopping = `
            <svg width="49" height="48"
                                                    
                viewBox="0 0 49 48" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_0_121)">
                        <circle  class="card-icon-shopping-hover"
                            cx="24.5" cy="24" r="20" fill="#ACD9B2" />
                        <path
                        
                            d="M13.5 14C12.9477 14 12.5 14.4477 12.5 15C12.5 15.5523 12.9477 16 13.5 16V14ZM15.7222 15L16.7026 14.8029C16.6087 14.3359 16.1985 14 15.7222 14V15ZM15.1863 17.4076C15.2952 17.9491 15.8223 18.2997 16.3638 18.1909C16.9052 18.082 17.2559 17.5548 17.147 17.0134L15.1863 17.4076ZM17.9444 25.0525C17.3922 25.0525 16.9444 25.5002 16.9444 26.0525C16.9444 26.6048 17.3922 27.0525 17.9444 27.0525V25.0525ZM29.0556 26.0525V27.0525C29.4336 27.0525 29.7793 26.8394 29.949 26.5016L29.0556 26.0525ZM33.5 17.2105L34.3935 17.6596C34.5493 17.3496 34.5333 16.981 34.3512 16.6857C34.1691 16.3903 33.847 16.2105 33.5 16.2105V17.2105ZM16.1667 16.2105C15.6144 16.2105 15.1667 16.6582 15.1667 17.2105C15.1667 17.7628 15.6144 18.2105 16.1667 18.2105V16.2105ZM16.9641 26.2496C17.0729 26.7911 17.6001 27.1418 18.1416 27.0329C18.683 26.924 19.0337 26.3969 18.9248 25.8554L16.9641 26.2496ZM17.147 17.0134C17.0382 16.4719 16.511 16.1213 15.9696 16.2301C15.4281 16.339 15.0774 16.8662 15.1863 17.4076L17.147 17.0134ZM18.6497 26.7615C19.0412 26.372 19.0429 25.7388 18.6534 25.3473C18.2639 24.9557 17.6308 24.9541 17.2392 25.3436L18.6497 26.7615ZM15.3967 28.5869L14.6914 27.8779L15.3967 28.5869ZM29.0556 31.4735C29.6078 31.4735 30.0556 31.0258 30.0556 30.4735C30.0556 29.9213 29.6078 29.4735 29.0556 29.4735V31.4735ZM29.0556 30.4735H28.0556C28.0556 30.7397 28.1616 30.9948 28.3503 31.1825L29.0556 30.4735ZM31.2778 32.684L30.5725 33.393C30.7599 33.5794 31.0135 33.684 31.2778 33.684V32.684ZM20.1667 32.684L19.3018 32.1821C19.2133 32.3345 19.1667 32.5077 19.1667 32.684H20.1667ZM20.1667 34.8945H19.1667C19.1667 35.0709 19.2133 35.244 19.3018 35.3965L20.1667 34.8945ZM13.5 16H15.7222V14H13.5V16ZM14.7418 15.1971L15.1863 17.4076L17.147 17.0134L16.7026 14.8029L14.7418 15.1971ZM17.9444 27.0525H29.0556V25.0525H17.9444V27.0525ZM29.949 26.5016L34.3935 17.6596L32.6065 16.7614L28.1621 25.6034L29.949 26.5016ZM33.5 16.2105H16.1667V18.2105H33.5V16.2105ZM18.9248 25.8554L17.147 17.0134L15.1863 17.4076L16.9641 26.2496L18.9248 25.8554ZM17.2392 25.3436L14.6914 27.8779L16.1019 29.2958L18.6497 26.7615L17.2392 25.3436ZM14.6914 27.8779C13.3511 29.2111 14.311 31.4735 16.1822 31.4735V29.4735C16.1421 29.4735 16.1255 29.4635 16.1173 29.4578C16.1047 29.4489 16.0894 29.4322 16.0789 29.407C16.0684 29.3817 16.0678 29.3602 16.07 29.3471C16.0714 29.3395 16.0748 29.3228 16.1019 29.2958L14.6914 27.8779ZM16.1822 31.4735H29.0556V29.4735H16.1822V31.4735ZM30.0556 30.4735C30.0556 29.81 30.5978 29.263 31.2778 29.263V27.263C29.5032 27.263 28.0556 28.6954 28.0556 30.4735H30.0556ZM31.2778 29.263C31.9578 29.263 32.5 29.81 32.5 30.4735H34.5C34.5 28.6954 33.0524 27.263 31.2778 27.263V29.263ZM32.5 30.4735C32.5 31.1371 31.9578 31.684 31.2778 31.684V33.684C33.0524 33.684 34.5 32.2516 34.5 30.4735H32.5ZM31.983 31.9751L29.7608 29.7646L28.3503 31.1825L30.5725 33.393L31.983 31.9751ZM21.0315 33.186C21.3068 32.7119 21.8711 32.4771 22.4088 32.6204L22.9239 30.6878C21.5185 30.3133 20.0324 30.9233 19.3018 32.1821L21.0315 33.186ZM22.4088 32.6204C22.9456 32.7635 23.3134 33.2451 23.3134 33.7893H25.3134C25.3134 32.3325 24.3301 31.0627 22.9239 30.6878L22.4088 32.6204ZM23.3134 33.7893C23.3134 34.3335 22.9456 34.8151 22.4088 34.9582L22.9239 36.8907C24.3301 36.5159 25.3134 35.2461 25.3134 33.7893H23.3134ZM22.4088 34.9582C21.8711 35.1015 21.3068 34.8667 21.0315 34.3926L19.3018 35.3965C20.0324 36.6553 21.5185 37.2653 22.9239 36.8907L22.4088 34.9582ZM21.1667 34.8945V32.684H19.1667V34.8945H21.1667Z"
                            fill="white" />
                        <circle  cx="33.5" cy="17" r="6" fill="white" />
                        <path
                        class="card-icon-shopping-hover"
                            d="M36.0263 16.5263H33.9737V14.4737C33.9737 14.2147 33.7653 14 33.5 14C33.2411 14 33.0263 14.2084 33.0263 14.4737V16.5263H30.9737C30.7147 16.5263 30.5 16.7347 30.5 17C30.5 17.1326 30.5505 17.2463 30.6389 17.3347C30.7274 17.4232 30.8411 17.4737 30.9737 17.4737H33.0263V19.5263C33.0263 19.6589 33.0768 19.7726 33.1653 19.8611C33.2537 19.9495 33.3674 20 33.5 20C33.7589 20 33.9737 19.7916 33.9737 19.5263V17.4737H36.0263C36.2853 17.4737 36.5 17.2653 36.5 17C36.5 16.7411 36.2916 16.5263 36.0263 16.5263Z"
                            fill="#ACD9B2" stroke="#ACD9B2" />
                    </g>
                    <defs>
                        <filter id="filter0_d_0_121" x="0.5" y="0" width="48" height="48"
                            filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha" />
                            <feOffset />
                            <feGaussianBlur stdDeviation="2" />
                            <feColorMatrix type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix"
                                result="effect1_dropShadow_0_121" />
                            <feBlend mode="normal" in="SourceGraphic"
                                in2="effect1_dropShadow_0_121" result="shape" />
                        </filter>
                    </defs>
                </svg>
    
    `;
    // BOTON SHOPPING ACTIVA Y CHECKED
    
    setTimeout(() => {
        const cardIconEnabled = document.querySelectorAll('.card-icon-shopping');
        
        cardIconEnabled.forEach((item) => {
            item.addEventListener('click', (e) => {            
                item.classList.toggle('checked');            
                if (!item.classList.contains('checked')) {
                    console.log('yes checked');
                    item.innerHTML = svgHtmlShopping; 
                }else{
                    item.innerHTML = svgHtml;    
                }        
            });
        });
        
    }, 3000);
   
})(),(()=>{    
     const idCardProducts = document.querySelector('#idCardProducts');
     //BASE DE DATOS DE INGRESO DE IMAGENES A  LAS TARGETAS
	 const arrayProducts = [
         { id: '001', image: 'pro1', name: 'Roberto Morales', price: '$120,00' },
	 	{ id: '001', image: 'pro1', name: 'Round shelf', price: '$120,00' },
	 	{ id: '002', image: 'pro2', name: 'Arnol shelf', price: '$150,00' },
	 	{ id: '003', image: 'pro3', name: 'Rebeca shelf', price: '$220,00' },
	 	{ id: '003', image: 'pro4', name: 'Rebeca shelf', price: '$220,00' },
	 	{ id: '003', image: 'pro5', name: 'Rebeca shelf', price: '$220,00' },
	 	{ id: '004', image: 'pro5', name: 'Marco yanchapanta', price: '$160,00' }
	 ];
     arrayProducts.forEach((product) => {
	 	console.log(product.price);
	 	idCardProducts.innerHTML += `
             <div class="card">
                 <div class="card-img">
                     <a class="btn-remove" href="#">Removed from cart</a>
                     <img src="../img/product/${product.image}.jpg" alt="product">
                 </div>
                 <div class="card-flex">
                     <div>
                         <p class="card-price">${product.price}</p>
                         <p class="card-name">${product.name}</p>
                     </div>
                     <div class="card-icon-shopping">
                         <svg width="49" height="48"
                      
                         viewBox="0 0 49 48" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                             <g filter="url(#filter0_d_0_121)">
                                 <circle  class="card-icon-shopping-hover"
                                 cx="24.5" cy="24" r="20" fill="#ACD9B2" />
                                 <path
                          
                                     d="M13.5 14C12.9477 14 12.5 14.4477 12.5 15C12.5 15.5523 12.9477 16 13.5 16V14ZM15.7222 15L16.7026 14.8029C16.6087 14.3359 16.1985 14 15.7222 14V15ZM15.1863 17.4076C15.2952 17.9491 15.8223 18.2997 16.3638 18.1909C16.9052 18.082 17.2559 17.5548 17.147 17.0134L15.1863 17.4076ZM17.9444 25.0525C17.3922 25.0525 16.9444 25.5002 16.9444 26.0525C16.9444 26.6048 17.3922 27.0525 17.9444 27.0525V25.0525ZM29.0556 26.0525V27.0525C29.4336 27.0525 29.7793 26.8394 29.949 26.5016L29.0556 26.0525ZM33.5 17.2105L34.3935 17.6596C34.5493 17.3496 34.5333 16.981 34.3512 16.6857C34.1691 16.3903 33.847 16.2105 33.5 16.2105V17.2105ZM16.1667 16.2105C15.6144 16.2105 15.1667 16.6582 15.1667 17.2105C15.1667 17.7628 15.6144 18.2105 16.1667 18.2105V16.2105ZM16.9641 26.2496C17.0729 26.7911 17.6001 27.1418 18.1416 27.0329C18.683 26.924 19.0337 26.3969 18.9248 25.8554L16.9641 26.2496ZM17.147 17.0134C17.0382 16.4719 16.511 16.1213 15.9696 16.2301C15.4281 16.339 15.0774 16.8662 15.1863 17.4076L17.147 17.0134ZM18.6497 26.7615C19.0412 26.372 19.0429 25.7388 18.6534 25.3473C18.2639 24.9557 17.6308 24.9541 17.2392 25.3436L18.6497 26.7615ZM15.3967 28.5869L14.6914 27.8779L15.3967 28.5869ZM29.0556 31.4735C29.6078 31.4735 30.0556 31.0258 30.0556 30.4735C30.0556 29.9213 29.6078 29.4735 29.0556 29.4735V31.4735ZM29.0556 30.4735H28.0556C28.0556 30.7397 28.1616 30.9948 28.3503 31.1825L29.0556 30.4735ZM31.2778 32.684L30.5725 33.393C30.7599 33.5794 31.0135 33.684 31.2778 33.684V32.684ZM20.1667 32.684L19.3018 32.1821C19.2133 32.3345 19.1667 32.5077 19.1667 32.684H20.1667ZM20.1667 34.8945H19.1667C19.1667 35.0709 19.2133 35.244 19.3018 35.3965L20.1667 34.8945ZM13.5 16H15.7222V14H13.5V16ZM14.7418 15.1971L15.1863 17.4076L17.147 17.0134L16.7026 14.8029L14.7418 15.1971ZM17.9444 27.0525H29.0556V25.0525H17.9444V27.0525ZM29.949 26.5016L34.3935 17.6596L32.6065 16.7614L28.1621 25.6034L29.949 26.5016ZM33.5 16.2105H16.1667V18.2105H33.5V16.2105ZM18.9248 25.8554L17.147 17.0134L15.1863 17.4076L16.9641 26.2496L18.9248 25.8554ZM17.2392 25.3436L14.6914 27.8779L16.1019 29.2958L18.6497 26.7615L17.2392 25.3436ZM14.6914 27.8779C13.3511 29.2111 14.311 31.4735 16.1822 31.4735V29.4735C16.1421 29.4735 16.1255 29.4635 16.1173 29.4578C16.1047 29.4489 16.0894 29.4322 16.0789 29.407C16.0684 29.3817 16.0678 29.3602 16.07 29.3471C16.0714 29.3395 16.0748 29.3228 16.1019 29.2958L14.6914 27.8779ZM16.1822 31.4735H29.0556V29.4735H16.1822V31.4735ZM30.0556 30.4735C30.0556 29.81 30.5978 29.263 31.2778 29.263V27.263C29.5032 27.263 28.0556 28.6954 28.0556 30.4735H30.0556ZM31.2778 29.263C31.9578 29.263 32.5 29.81 32.5 30.4735H34.5C34.5 28.6954 33.0524 27.263 31.2778 27.263V29.263ZM32.5 30.4735C32.5 31.1371 31.9578 31.684 31.2778 31.684V33.684C33.0524 33.684 34.5 32.2516 34.5 30.4735H32.5ZM31.983 31.9751L29.7608 29.7646L28.3503 31.1825L30.5725 33.393L31.983 31.9751ZM21.0315 33.186C21.3068 32.7119 21.8711 32.4771 22.4088 32.6204L22.9239 30.6878C21.5185 30.3133 20.0324 30.9233 19.3018 32.1821L21.0315 33.186ZM22.4088 32.6204C22.9456 32.7635 23.3134 33.2451 23.3134 33.7893H25.3134C25.3134 32.3325 24.3301 31.0627 22.9239 30.6878L22.4088 32.6204ZM23.3134 33.7893C23.3134 34.3335 22.9456 34.8151 22.4088 34.9582L22.9239 36.8907C24.3301 36.5159 25.3134 35.2461 25.3134 33.7893H23.3134ZM22.4088 34.9582C21.8711 35.1015 21.3068 34.8667 21.0315 34.3926L19.3018 35.3965C20.0324 36.6553 21.5185 37.2653 22.9239 36.8907L22.4088 34.9582ZM21.1667 34.8945V32.684H19.1667V34.8945H21.1667Z"
                                     fill="white" />
                                 <circle  cx="33.5" cy="17" r="6" fill="white" />
                                 <path
                                 class="card-icon-shopping-hover"
                                     d="M36.0263 16.5263H33.9737V14.4737C33.9737 14.2147 33.7653 14 33.5 14C33.2411 14 33.0263 14.2084 33.0263 14.4737V16.5263H30.9737C30.7147 16.5263 30.5 16.7347 30.5 17C30.5 17.1326 30.5505 17.2463 30.6389 17.3347C30.7274 17.4232 30.8411 17.4737 30.9737 17.4737H33.0263V19.5263C33.0263 19.6589 33.0768 19.7726 33.1653 19.8611C33.2537 19.9495 33.3674 20 33.5 20C33.7589 20 33.9737 19.7916 33.9737 19.5263V17.4737H36.0263C36.2853 17.4737 36.5 17.2653 36.5 17C36.5 16.7411 36.2916 16.5263 36.0263 16.5263Z"
                                     fill="#ACD9B2" stroke="#ACD9B2" />
                             </g>
                             <defs>
                                 <filter id="filter0_d_0_121" x="0.5" y="0" width="48" height="48"
                                     filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                     <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                     <feColorMatrix in="SourceAlpha" type="matrix"
                                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                         result="hardAlpha" />
                                     <feOffset />
                                     <feGaussianBlur stdDeviation="2" />
                                     <feColorMatrix type="matrix"
                                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                     <feBlend mode="normal" in2="BackgroundImageFix"
                                         result="effect1_dropShadow_0_121" />
                                     <feBlend mode="normal" in="SourceGraphic"
                                         in2="effect1_dropShadow_0_121" result="shape" />
                                 </filter>
                             </defs>
                         </svg>
      
                     </div>
                 </div>
             </div>
         `;
	 });
})()
