import React from "react";

const RestaurantManagement = () => {
    return (
        <>
            <div className="restaurent-management-system-page-wrapper">
                <div className="custom-model-main">
                    <div className="custom-model-inner">
                        <div className="close-btn">×</div>
                        <div className="custom-model-wrap">
                            <div className="pop-up-content-wrap">
                                <div className="loader hide-loader" id="loader">
                                </div>
                                <section className="development-form-section" id="fill_form">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="service-section-title text-center">
                                                    <h6 className=" text-black fw-regular position-relative mb-3 fs-24">Schedule A Expert Call</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row contact-form-row">
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 ms-auto me-auto web-development-form">
                                                <div className="contact-form-details">
                                                    <form id="contactus_form" name="contactus_form" novalidate="novalidate" className="row">

                                                        <input type="hidden" name="csrf_test_name" value="3d3d88a244b81b4721b9b0eb22ab4915" />
                                                        <input type="hidden" name="source" value="Restaurant Management System" />

                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div className="form-group contact-form-fild">

                                                                <label for="name_contact" className="control-label">Full Name</label>
                                                                <input type="text" id="name_contact" name="name_contact" className="form-control" placeholder="Your Full Name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div className="form-group contact-form-fild">
                                                                <label for="email_contact" className="control-label">Email Id</label>
                                                                <input type="email" id="email_contact" name="email_contact" className="form-control" placeholder="Your Email" />
                                                            </div>
                                                        </div>
                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div className="form-group contact-form-fild multi-filds position-relative">
                                                                {/* <div className="contery-fleg">
                            <select className="form-country-select countrycodeselect select2-hidden-accessible" name="country" id="country" data-select2-id="country" tabindex="-1" aria-hidden="true">
                              <option value="" data-select2-id="248">Select Country</option>
                            <option value="+91" data-select2-id="249">India (+91)</option><option value="+971" data-select2-id="250">United Arab Emirates (+971)</option><option value="+44" data-select2-id="251">United Kingdom (+44)</option><option value="+1" data-select2-id="252">United States (+1)</option><option value="+93" data-select2-id="253">Afghanistan (+93)</option><option value="+355" data-select2-id="254">Albania (+355)</option><option value="+213" data-select2-id="255">Algeria (+213)</option><option value="+1-684" data-select2-id="256">American Samoa (+1-684)</option><option value="+376" data-select2-id="257">Andorra (+376)</option><option value="+244" data-select2-id="258">Angola (+244)</option><option value="+1-264" data-select2-id="259">Anguilla (+1-264)</option><option value="+672" data-select2-id="260">Antarctica (+672)</option><option value="+1-268" data-select2-id="261">Antigua and Barbuda (+1-268)</option><option value="+54" data-select2-id="262">Argentina (+54)</option><option value="+374" data-select2-id="263">Armenia (+374)</option><option value="+297" data-select2-id="264">Aruba (+297)</option><option value="+61" data-select2-id="265">Australia (+61)</option><option value="+43" data-select2-id="266">Austria (+43)</option><option value="+994" data-select2-id="267">Azerbaijan (+994)</option><option value="+1-242" data-select2-id="268">Bahamas (+1-242)</option><option value="+973" data-select2-id="269">Bahrain (+973)</option><option value="+880" data-select2-id="270">Bangladesh (+880)</option><option value="+1-246" data-select2-id="271">Barbados (+1-246)</option><option value="+375" data-select2-id="272">Belarus (+375)</option><option value="+32" data-select2-id="273">Belgium (+32)</option><option value="+501" data-select2-id="274">Belize (+501)</option><option value="+229" data-select2-id="275">Benin (+229)</option><option value="+1-441" data-select2-id="276">Bermuda (+1-441)</option><option value="+975" data-select2-id="277">Bhutan (+975)</option><option value="+591" data-select2-id="278">Bolivia (+591)</option><option value="+387" data-select2-id="279">Bosnia and Herzegovina (+387)</option><option value="+267" data-select2-id="280">Botswana (+267)</option><option value="+55" data-select2-id="281">Brazil (+55)</option><option value="+246" data-select2-id="282">British Indian Ocean Territory (+246)</option><option value="+1-284" data-select2-id="283">British Virgin Islands (+1-284)</option><option value="+673" data-select2-id="284">Brunei (+673)</option><option value="+359" data-select2-id="285">Bulgaria (+359)</option><option value="+226" data-select2-id="286">Burkina Faso (+226)</option><option value="+257" data-select2-id="287">Burundi (+257)</option><option value="+855" data-select2-id="288">Cambodia (+855)</option><option value="+237" data-select2-id="289">Cameroon (+237)</option><option value="+1" data-select2-id="290">Canada (+1)</option><option value="+238" data-select2-id="291">Cape Verde (+238)</option><option value="+1-345" data-select2-id="292">Cayman Islands (+1-345)</option><option value="+236" data-select2-id="293">Central African Republic (+236)</option><option value="+235" data-select2-id="294">Chad (+235)</option><option value="+56" data-select2-id="295">Chile (+56)</option><option value="+86" data-select2-id="296">China (+86)</option><option value="+61" data-select2-id="297">Christmas Island (+61)</option><option value="+61" data-select2-id="298">Cocos (Keeling) Islands (+61)</option><option value="+57" data-select2-id="299">Colombia (+57)</option><option value="+269" data-select2-id="300">Comoros (+269)</option><option value="+682" data-select2-id="301">Cook Islands (+682)</option><option value="+506" data-select2-id="302">Costa Rica (+506)</option><option value="+385" data-select2-id="303">Croatia (+385)</option><option value="+53" data-select2-id="304">Cuba (+53)</option><option value="+599" data-select2-id="305">Curaçao (+599)</option><option value="+357" data-select2-id="306">Cyprus (+357)</option><option value="+420" data-select2-id="307">Czech Republic (+420)</option><option value="+243" data-select2-id="308">Democratic Republic of the Congo (+243)</option><option value="+45" data-select2-id="309">Denmark (+45)</option><option value="+253" data-select2-id="310">Djibouti (+253)</option><option value="+1-767" data-select2-id="311">Dominica (+1-767)</option><option value="+1-809, +1-829, +1-849" data-select2-id="312">Dominican Republic (+1-809)</option><option value="+670" data-select2-id="313">East Timor (+670)</option><option value="+593" data-select2-id="314">Ecuador (+593)</option><option value="+20" data-select2-id="315">Egypt (+20)</option><option value="+503" data-select2-id="316">El Salvador (+503)</option><option value="+240" data-select2-id="317">Equatorial Guinea (+240)</option><option value="+291" data-select2-id="318">Eritrea (+291)</option><option value="+372" data-select2-id="319">Estonia (+372)</option><option value="+251" data-select2-id="320">Ethiopia (+251)</option><option value="+500" data-select2-id="321">Falkland Islands (+500)</option><option value="+298" data-select2-id="322">Faroe Islands (+298)</option><option value="+679" data-select2-id="323">Fiji (+679)</option><option value="+358" data-select2-id="324">Finland (+358)</option><option value="+33" data-select2-id="325">France (+33)</option><option value="+594" data-select2-id="326">French Guiana (+594)</option><option value="+689" data-select2-id="327">French Polynesia (+689)</option><option value="+241" data-select2-id="328">Gabon (+241)</option><option value="+220" data-select2-id="329">Gambia (+220)</option><option value="+995" data-select2-id="330">Georgia (+995)</option><option value="+49" data-select2-id="331">Germany (+49)</option><option value="+233" data-select2-id="332">Ghana (+233)</option><option value="+350" data-select2-id="333">Gibraltar (+350)</option><option value="+30" data-select2-id="334">Greece (+30)</option><option value="+299" data-select2-id="335">Greenland (+299)</option><option value="+1-473" data-select2-id="336">Grenada (+1-473)</option><option value="+590" data-select2-id="337">Guadeloupe (+590)</option><option value="+1-671" data-select2-id="338">Guam (+1-671)</option><option value="+502" data-select2-id="339">Guatemala (+502)</option><option value="+44-1481" data-select2-id="340">Guernsey (+44-1481)</option><option value="+224" data-select2-id="341">Guinea (+224)</option><option value="+245" data-select2-id="342">Guinea-Bissau (+245)</option><option value="+592" data-select2-id="343">Guyana (+592)</option><option value="+509" data-select2-id="344">Haiti (+509)</option><option value="+504" data-select2-id="345">Honduras (+504)</option><option value="+852" data-select2-id="346">Hong Kong (+852)</option><option value="+36" data-select2-id="347">Hungary (+36)</option><option value="+354" data-select2-id="348">Iceland (+354)</option><option value="+62" data-select2-id="349">Indonesia (+62)</option><option value="+98" data-select2-id="350">Iran (+98)</option><option value="+964" data-select2-id="351">Iraq (+964)</option><option value="+353" data-select2-id="352">Ireland (+353)</option><option value="+44-1624" data-select2-id="353">Isle of Man (+44-1624)</option><option value="+972" data-select2-id="354">Israel (+972)</option><option value="+39" data-select2-id="355">Italy (+39)</option><option value="+225" data-select2-id="356">Ivory Coast (+225)</option><option value="+1-876" data-select2-id="357">Jamaica (+1-876)</option><option value="+81" data-select2-id="358">Japan (+81)</option><option value="+44-1534" data-select2-id="359">Jersey (+44-1534)</option><option value="+962" data-select2-id="360">Jordan (+962)</option><option value="+7" data-select2-id="361">Kazakhstan (+7)</option><option value="+254" data-select2-id="362">Kenya (+254)</option><option value="+686" data-select2-id="363">Kiribati (+686)</option><option value="+383" data-select2-id="364">Kosovo (+383)</option><option value="+965" data-select2-id="365">Kuwait (+965)</option><option value="+996" data-select2-id="366">Kyrgyzstan (+996)</option><option value="+856" data-select2-id="367">Laos (+856)</option><option value="+371" data-select2-id="368">Latvia (+371)</option><option value="+961" data-select2-id="369">Lebanon (+961)</option><option value="+266" data-select2-id="370">Lesotho (+266)</option><option value="+231" data-select2-id="371">Liberia (+231)</option><option value="+218" data-select2-id="372">Libya (+218)</option><option value="+423" data-select2-id="373">Liechtenstein (+423)</option><option value="+370" data-select2-id="374">Lithuania (+370)</option><option value="+352" data-select2-id="375">Luxembourg (+352)</option><option value="+853" data-select2-id="376">Macau (+853)</option><option value="+389" data-select2-id="377">Macedonia (+389)</option><option value="+261" data-select2-id="378">Madagascar (+261)</option><option value="+265" data-select2-id="379">Malawi (+265)</option><option value="+60" data-select2-id="380">Malaysia (+60)</option><option value="+960" data-select2-id="381">Maldives (+960)</option><option value="+223" data-select2-id="382">Mali (+223)</option><option value="+356" data-select2-id="383">Malta (+356)</option><option value="+692" data-select2-id="384">Marshall Islands (+692)</option><option value="+596" data-select2-id="385">Martinique (+596)</option><option value="+222" data-select2-id="386">Mauritania (+222)</option><option value="+230" data-select2-id="387">Mauritius (+230)</option><option value="+262" data-select2-id="388">Mayotte (+262)</option><option value="+52" data-select2-id="389">Mexico (+52)</option><option value="+691" data-select2-id="390">Micronesia (+691)</option><option value="+373" data-select2-id="391">Moldova (+373)</option><option value="+377" data-select2-id="392">Monaco (+377)</option><option value="+976" data-select2-id="393">Mongolia (+976)</option><option value="+382" data-select2-id="394">Montenegro (+382)</option><option value="+1-664" data-select2-id="395">Montserrat (+1-664)</option><option value="+212" data-select2-id="396">Morocco (+212)</option><option value="+258" data-select2-id="397">Mozambique (+258)</option><option value="+95" data-select2-id="398">Myanmar (+95)</option><option value="+264" data-select2-id="399">Namibia (+264)</option><option value="+674" data-select2-id="400">Nauru (+674)</option><option value="+977" data-select2-id="401">Nepal (+977)</option><option value="+31" data-select2-id="402">Netherlands (+31)</option><option value="+599" data-select2-id="403">Netherlands Antilles (+599)</option><option value="+687" data-select2-id="404">New Caledonia (+687)</option><option value="+64" data-select2-id="405">New Zealand (+64)</option><option value="+505" data-select2-id="406">Nicaragua (+505)</option><option value="+227" data-select2-id="407">Niger (+227)</option><option value="+234" data-select2-id="408">Nigeria (+234)</option><option value="+683" data-select2-id="409">Niue (+683)</option><option value="+672" data-select2-id="410">Norfolk Island (+672)</option><option value="+850" data-select2-id="411">North Korea (+850)</option><option value="+1-670" data-select2-id="412">Northern Mariana Islands (+1-670)</option><option value="+47" data-select2-id="413">Norway (+47)</option><option value="+968" data-select2-id="414">Oman (+968)</option><option value="+92" data-select2-id="415">Pakistan (+92)</option><option value="+680" data-select2-id="416">Palau (+680)</option><option value="+970" data-select2-id="417">Palestine (+970)</option><option value="+507" data-select2-id="418">Panama (+507)</option><option value="+675" data-select2-id="419">Papua New Guinea (+675)</option><option value="+595" data-select2-id="420">Paraguay (+595)</option><option value="+51" data-select2-id="421">Peru (+51)</option><option value="+63" data-select2-id="422">Philippines (+63)</option><option value="+64" data-select2-id="423">Pitcairn (+64)</option><option value="+48" data-select2-id="424">Poland (+48)</option><option value="+351" data-select2-id="425">Portugal (+351)</option><option value="+1-787, +1-939" data-select2-id="426">Puerto Rico (+1-787)</option><option value="+974" data-select2-id="427">Qatar (+974)</option><option value="+242" data-select2-id="428">Republic of the Congo (+242)</option><option value="+262" data-select2-id="429">Reunion (+262)</option><option value="+40" data-select2-id="430">Romania (+40)</option><option value="+7" data-select2-id="431">Russia (+7)</option><option value="+250" data-select2-id="432">Rwanda (+250)</option><option value="+590" data-select2-id="433">Saint Barthelemy (+590)</option><option value="+290" data-select2-id="434">Saint Helena (+290)</option><option value="+1-869" data-select2-id="435">Saint Kitts and Nevis (+1-869)</option><option value="+1-758" data-select2-id="436">Saint Lucia (+1-758)</option><option value="+590" data-select2-id="437">Saint Martin (+590)</option><option value="+508" data-select2-id="438">Saint Pierre and Miquelon (+508)</option><option value="+1-784" data-select2-id="439">Saint Vincent and the Grenadines (+1-784)</option><option value="+685" data-select2-id="440">Samoa (+685)</option><option value="+378" data-select2-id="441">San Marino (+378)</option><option value="+239" data-select2-id="442">Sao Tome and Principe (+239)</option><option value="+966" data-select2-id="443">Saudi Arabia (+966)</option><option value="+221" data-select2-id="444">Senegal (+221)</option><option value="+381" data-select2-id="445">Serbia (+381)</option><option value="+248" data-select2-id="446">Seychelles (+248)</option><option value="+232" data-select2-id="447">Sierra Leone (+232)</option><option value="+65" data-select2-id="448">Singapore (+65)</option><option value="+1-721" data-select2-id="449">Sint Maarten (+1-721)</option><option value="+421" data-select2-id="450">Slovakia (+421)</option><option value="+386" data-select2-id="451">Slovenia (+386)</option><option value="+677" data-select2-id="452">Solomon Islands (+677)</option><option value="+252" data-select2-id="453">Somalia (+252)</option><option value="+27" data-select2-id="454">South Africa (+27)</option><option value="+82" data-select2-id="455">South Korea (+82)</option><option value="+211" data-select2-id="456">South Sudan (+211)</option><option value="+34" data-select2-id="457">Spain (+34)</option><option value="+94" data-select2-id="458">Sri Lanka (+94)</option><option value="+249" data-select2-id="459">Sudan (+249)</option><option value="+597" data-select2-id="460">Suriname (+597)</option><option value="+47" data-select2-id="461">Svalbard and Jan Mayen (+47)</option><option value="+268" data-select2-id="462">Swaziland (+268)</option><option value="+46" data-select2-id="463">Sweden (+46)</option><option value="+41" data-select2-id="464">Switzerland (+41)</option><option value="+963" data-select2-id="465">Syria (+963)</option><option value="+886" data-select2-id="466">Taiwan (+886)</option><option value="+992" data-select2-id="467">Tajikistan (+992)</option><option value="+255" data-select2-id="468">Tanzania (+255)</option><option value="+66" data-select2-id="469">Thailand (+66)</option><option value="+228" data-select2-id="470">Togo (+228)</option><option value="+690" data-select2-id="471">Tokelau (+690)</option><option value="+676" data-select2-id="472">Tonga (+676)</option><option value="+1-868" data-select2-id="473">Trinidad and Tobago (+1-868)</option><option value="+216" data-select2-id="474">Tunisia (+216)</option><option value="+90" data-select2-id="475">Turkey (+90)</option><option value="+993" data-select2-id="476">Turkmenistan (+993)</option><option value="+1-649" data-select2-id="477">Turks and Caicos Islands (+1-649)</option><option value="+688" data-select2-id="478">Tuvalu (+688)</option><option value="+1-340" data-select2-id="479">U.S. Virgin Islands (+1-340)</option><option value="+256" data-select2-id="480">Uganda (+256)</option><option value="+380" data-select2-id="481">Ukraine (+380)</option><option value="+598" data-select2-id="482">Uruguay (+598)</option><option value="+998" data-select2-id="483">Uzbekistan (+998)</option><option value="+678" data-select2-id="484">Vanuatu (+678)</option><option value="+379" data-select2-id="485">Vatican (+379)</option><option value="+58" data-select2-id="486">Venezuela (+58)</option><option value="+84" data-select2-id="487">Vietnam (+84)</option><option value="+681" data-select2-id="488">Wallis and Futuna (+681)</option><option value="+212" data-select2-id="489">Western Sahara (+212)</option><option value="+967" data-select2-id="490">Yemen (+967)</option><option value="+260" data-select2-id="491">Zambia (+260)</option><option value="+263" data-select2-id="492">Zimbabwe (+263)</option></select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="247" style="width: 90px;"><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-country-container"><span className="select2-selection__rendered" id="select2-country-container" role="textbox" aria-readonly="true"><span className="select2-selection__placeholder">Select a country</span></span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                          </div> */}
                                                                <label for="phone_contact" className="control-label">Contact Number</label>
                                                                <input type="text" id="phone_contact" name="phone_contact" className="form-control phone_number" placeholder="Your Contact Number" maxlength="10" oninput="this.value = this.value.replace(/[^0-9.+]/g, ''); this.value = 
                                 this.value.replace(/(\..*)\./g, '$1'); "/>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div className="form-group contact-form-fild">
                                                                <label for="business_type" className="control-label">Restaurent Name</label>
                                                                <input type="text" id="business_type" name="business_type" className="form-control" placeholder="Restaurent Name*" />
                                                            </div>
                                                        </div>

                                                        <input type="hidden" id="amount" name="amount" className="range__amount" oninput="this.value = this.value.replace(/[^0-9.+]/g, ''); this.value = 
                                 this.value.replace(/(\..*)\./g, '$1');slider.value=amount.value" value="N/A" maxlength="10" />

                                                        <input className="price_input w-100 mt-4" id="slider" type="hidden" value="N/A" max="100000000" min="10000" oninput="amount.value=slider.value" />

                                                        <div className="col-xl-12 col-lg-12 col-md-12">
                                                            <div className="form-group contact-form-fild">
                                                                <label for="message_contact" className="control-label">Message</label>
                                                                <textarea type="message" id="message_contact" name="message_contact" className="form-control contact_message_fild" placeholder="Message" minlength="15" maxlength="500" rows="2"></textarea>
                                                            </div>
                                                        </div>

                                                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                                                            <div className="btn-box btn-gradistion text-center">
                                                                <button type="submit" className="form-submit-btn restaurant-form-submit-btn contact-form-submit" id="loginBtn" aria-label="submit">Submit</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="bg-overlay"></div>
                </div>

                <div className="restaurant-banner" id="home">
                    <section className="banner bg-dark mt-5">
                        <div className="container ">
                            <div className="row align-items-center">
                                <div className="col-lg-10 mx-auto col-md-12 col-sm-12">
                                    <div className="banner-content text-center pt-5">
                                        <h1 className="fw-semibold text-white fs-48 mt-5">India’s Trusted Custom Restaurant Management Software
                                        </h1>
                                        <p className="fw-regular text-white fs-18 mt-3">Get a 100% customised Restaurant Management System for your business. Embrace a digital solution that scales your user base and resonates with your brand image. Get assured of: </p>

                                        <ul className="">
                                            <li className="d-inline-block mx-2">
                                                <p className="fw-regular text-white fs-18 mt-2"><i className="fa-solid fa-check"></i> Code from Scratch
                                                </p>
                                            </li>
                                            <li className="d-inline-block mx-2">
                                                <p className="fw-regular text-white fs-18 mt-2"><i className="fa-solid fa-check"></i> Scalable and Secure Solution</p>
                                            </li>
                                            <li className="d-inline-block mx-2">
                                                <p className="fw-regular text-white fs-18 mt-2"><i className="fa-solid fa-check"></i> Cloud-Based Technology </p>
                                            </li>
                                            <li className="d-inline-block mx-2">
                                                <p className="fw-regular text-white fs-18 mt-2"><i className="fa-solid fa-check"></i> SaaS Model </p>
                                            </li>
                                        </ul>
                                        <div className="position-relative mt-5">
                                            <a className="get-btn text-white" href="#"  onClick={(e) => e.preventDefault()}>Request A Free Demo</a>
                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </section>
                </div>
                <section className="info section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mx-auto">
                                <div className="cta-wraper position-relative">
                                    <div className="row  align-items-center">
                                        <div className="col-lg-7 pe-lg-5">
                                            <h2 className="fw-semibold text-black position-relative mb-3 fs-38"> Cherry on the Top with Restaurant Management System</h2>
                                            <ul>
                                                <li>

                                                    <p className="text-black fs-18 fw-regular"> <img src="https://ezulix.com/assets/image/landing-page/restaurant/dot.png" width="20px" alt="" /> To keep you carefree, we have developed a custom Restaurant Management app.</p>
                                                </li>
                                                <li>
                                                    <p className="text-black fs-18 fw-regular "><img src="https://ezulix.com/assets/image/landing-page/restaurant/dot.png" width="20px" alt="" /> No heavy software installation is required. Only uninterrupted services. </p>
                                                </li>
                                                <li>
                                                    <p className="text-black fs-18 fw-regular"><img src="https://ezulix.com/assets/image/landing-page/restaurant/dot.png" width="20px" alt="" /> Get an IoT-like digital transformation without having to invest in expensive IoT infrastructure.</p>
                                                </li>
                                                <li>
                                                    <p className="text-black fs-18 fw-regular"><img src="https://ezulix.com/assets/image/landing-page/restaurant/dot.png" width="20px" alt="" /> Want to know more? Let’s scroll down! </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-5 text-center mt-3">
                                            <div className="dashboard-img">
                                                <img src="https://ezulix.com/assets/image/landing-page/restaurant/restaurant.png" alt="Dashboard Image" loading="lazy" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="cta-1 section-padding">
                    <div className="container">
                        <div className="row ">
                            <div className="col-lg-12 mx-auto">
                                <div className="cta-wraper position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 text-center mt-3">
                                            <div className="dashboard-img">
                                                <img src="https://ezulix.com/assets/image/landing-page/restaurant/restaurant-app.webp" alt="Dashboard Image" loading="lazy" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 pe-lg-5">
                                            <h2 className="fw-semibold text-black position-relative mb-3 fs-38"> A Restaurant POS System Which is A Unique Combination of Manual Work &amp; Automation</h2>
                                            <ul>
                                                <li>

                                                    <p className="text-black fs-18 fw-regular">
                                                        <img src="https://ezulix.com/assets/image/landing-page/restaurant/dot.png" width="20px" alt="" /> For the first time ever, a Restaurant Management System that combines human and artificial intelligence is coming your way. </p>
                                                </li>
                                                <li>
                                                    <p className="text-black fs-18 fw-regular">
                                                        <img src="https://ezulix.com/assets/image/landing-page/restaurant/dot.png" width="20px" alt="" /> Let the diners place an order without a waiter by scanning a QR code </p>
                                                </li>
                                                <li>
                                                    <p className="text-black fs-18 fw-regular">
                                                        <img src="https://ezulix.com/assets/image/landing-page/restaurant/dot.png" width="20px" alt="" /> The RMS will notify the restaurant managers and they will confirm the customer’s order. </p>
                                                </li>
                                                <li>
                                                    <p className="text-black fs-18 fw-regular">
                                                        <img src="https://ezulix.com/assets/image/landing-page/restaurant/dot.png" width="20px" alt="" /> As soon as the confirmation, the manager would send the same to the kitchen. </p>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="restaurant-sign-up section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto text-center">
                                <h2 className="fw-semibold position-relative mb-3 fs-38">Leverage the Power of SaaS-Based Restaurant Management Software for Your Business!
                                </h2>
                                <p className="fs-18 text-white fw-regular">No Heavy Installations, Enjoy Only Uninterrupted Restaurant Management. Managing Orders and controlling the staff at Your Restaurant is Just a Sign Up Away. Do it Today!
                                </p>
                                <div className="position-relative mt-3">
                                    <a href="#"  onClick={(e) => e.preventDefault()} className="get-btn text-white Click-here">Sign Up Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="process-step section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 mb-3">
                                <h2 className="fw-semibold text-black position-relative  fs-38"> Here Are The Business Processes You Can Automate with RMS
                                </h2>

                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-12  mt-3">
                                    <div className="process-wrap">
                                        <div className="process-icon">
                                            <img src="https://ezulix.com/assets/image/landing-page/restaurant/meeting.webp" width="60" alt="Table Management Icon" loading="lazy" />
                                        </div>
                                        <div className="process-content">
                                            <h3 className="fw-semibold text-black  position-relative mt-3 fs-22"> Table Management
                                            </h3>
                                            <p className="text-black fw-regular mt-2 fs-18">Stay aware of the table availability and occupancy and streamline diner sitting effortlessly. Uplift customer experience by eradicating chaos.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12  mt-3">
                                    <div className="process-wrap">
                                        <div className="process-icon">
                                            <img src="https://ezulix.com/assets/image/landing-page/restaurant/paper.webp" width="60" alt="Menu Management  Icon" loading="lazy" />
                                        </div>
                                        <div className="process-content">
                                            <h3 className="fw-semibold text-black  position-relative mt-3 fs-22"> Menu Management
                                            </h3>
                                            <p className="text-black fw-regular mt-2 fs-18">Keep the diners well-informed on the new, special, available and discounted food items on your menu with a smart menu management function.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12  mt-3">
                                    <div className="process-wrap">
                                        <div className="process-icon">
                                            <img src="https://ezulix.com/assets/image/landing-page/restaurant/recipe.webp" width="60" alt="Recipe Management Icon" loading="lazy" />
                                        </div>
                                        <div className="process-content">
                                            <h3 className="fw-semibold text-black  position-relative mt-3 fs-22"> Recipe Management </h3>
                                            <p className="text-black fw-regular mt-2 fs-18">Maintain a consistent taste across different franchises, chains and outlets of your restaurant brand with a recipe management feature.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12  mt-3">
                                    <div className="process-wrap">
                                        <div className="process-icon">
                                            <img src="https://ezulix.com/assets/image/landing-page/restaurant/in-stock.webp" width="60" alt="Stock &amp; Inventory Management Icon" loading="lazy" />
                                        </div>
                                        <div className="process-content">
                                            <h3 className="fw-semibold text-black  position-relative mt-3 fs-22"> Stock &amp; Inventory Management
                                            </h3>
                                            <p className="text-black fw-regular mt-2 fs-18">Estimate the accurate order execution time with an inventory management feature that keeps you informed on ready-to-serve and prepared ingredients.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12  mt-3">
                                    <div className="process-wrap">
                                        <div className="process-icon">
                                            <img src="https://ezulix.com/assets/image/landing-page/restaurant/point-of-sale.webp" width="60" alt="Restaurant Billing System &amp; GST Calculation  Icon" loading="lazy" />
                                        </div>
                                        <div className="process-content">
                                            <h3 className="fw-semibold text-black  position-relative mt-3 fs-22"> Restaurant Billing System &amp; GST Calculation
                                            </h3>
                                            <p className="text-black fw-regular mt-2 fs-18">Calculate customer bills with GST much faster with more accuracy. Get the best restaurant billing software included in the RMS solution.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12  mt-3">
                                    <div className="process-wrap">
                                        <div className="process-icon">
                                            <img src="https://ezulix.com/assets/image/landing-page/restaurant/insight.webp" width="60" alt="Data Insights Icon" loading="lazy" />
                                        </div>
                                        <div className="process-content">
                                            <h3 className="fw-semibold text-black  position-relative mt-3 fs-24"> Data Insights
                                            </h3>
                                            <p className="text-black fw-regular mt-2 fs-18">Get key customer data that helps you formulate personalised offers for them and forecast demand for your dishes for strategic planning.

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <div className="step-booking section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12  text-center mb-3">
                                <h2 className="fw-semibold text-black position-relative fs-38"> How Our RMS <span className="text-gradient">Streamlines Your Restaurant Processes
                                </span> </h2>
                                <p className="text-black fw-regular mt-2 fs-18">Get ready for a creamy-smooth restaurant journey. Let your hair down and streamline your restaurant processes with our smart Restaurant Software services. Enjoy
                                </p>
                            </div>
                            <div className="col-lg-5 text-center">
                                <div className="step-img">
                                    <img src="https://ezulix.com/assets/image/landing-page/restaurant/order-details.webp" alt="Food Delivery App image" loading="lazy" className="restaurant-image" />
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-lg-12 my-2">
                                        <div className="">
                                            <div className="">
                                                <img src="https://ezulix.com/assets/image/landing-page/restaurant/Hassle-Free.png" width="80" alt="search icon" loading="lazy" />
                                            </div>
                                            <h3 className="fw-semibold text-black  position-relative mt-3 fs-22"> Hassle-Free Order Placement </h3>
                                            <p className="text-black fw-regular fs-18 mt-2">Throw away those confusing paper slips! Let the customers take advantage of Menu Scanner technology. Get a unique Scanner for each table. Let your menu be just a scan away.
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="col-lg-12 my-2">
                                        <div className="">
                                            <div className="">
                                                <img src="https://ezulix.com/assets/image/landing-page/restaurant/real-time.png" width="80" alt="Add-to-Cart Icon" loading="lazy" />
                                            </div>
                                            <h3 className="fw-semibold text-black  position-relative mt-3 fs-22"> Real-Time Order Receiving
                                            </h3>
                                            <p className="text-black fw-regular fs-18 mt-2">A handful of waiters handling so many tables at your restaurant will suffer confusion, fatigue, and delayed order reporting. No worries! Receive immediate notification in real-time with RMS.
                                            </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="col-lg-12 my-2">
                                        <div className="">
                                            <div className="">
                                                <img src="https://ezulix.com/assets/image/landing-page/restaurant/tracking.png" width="80" alt="Coupon Code Image" loading="lazy" />
                                            </div>
                                            <h3 className="fw-semibold text-black  position-relative mt-3 fs-22"> Live Order Updates </h3>
                                            <p className="text-black fw-regular fs-18 mt-2">As soon as your restaurant management staff verifies and confirms the order, help your customers with live order updates. The kitchen staff may update the order status in a few clicks.</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="col-lg-12 my-2">
                                        <div className="">
                                            <div className="">
                                                <img src="https://ezulix.com/assets/image/landing-page/food/order.webp" width="80" alt="Place Order Image" loading="lazy" />
                                            </div>
                                            <h3 className="fw-semibold text-black  position-relative mt-3  fs-22"> Effortless Order Execution
                                            </h3>
                                            <p className="text-black fw-regular fs-18 mt-2">The serving staff also receive real-time order updates. As soon as the order of a table is prepared, the serving staff is notified of the table number to deliver it at the right time and place. </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="col-lg-12 my-2">
                                        <div className="">
                                            <div className="">
                                                <img src="https://ezulix.com/assets/image/landing-page/food/tracking.png" width="80" alt="Track Order Image" loading="lazy" />
                                            </div>
                                            <h3 className="fw-semibold text-black  position-relative mt-3  fs-22">Inventory Status Tracking </h3>
                                            <p className="text-black fw-regular fs-18 mt-2">Estimate accurate order preparation time by tracking your inventory status. Check the food/dish availability. Get the best Restaurant Inventory Software For Restaurants embedded. </p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="col-lg-12 my-2">
                                        <div className="">
                                            <div className="">
                                                <img src="https://ezulix.com/assets/image/landing-page/restaurant/auto-bill-generate.png" width="80" alt="auto bill generate" />
                                            </div>
                                            <h3 className="fw-semibold text-black  position-relative mt-3 fs-22"> Auto-Bill Generation
                                            </h3>
                                            <p className="text-black fw-regular fs-18 mt-2">The menu scanner is not just for order placement. This system also calculates bills with GST and service charges to save you time. Get accurate bill calculations.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 text-center mb-3">
                                <h2 className="fw-semibold text-black position-relative  fs-38"> Proactive Features: <span className="text-gradient">Icing on the Cake!</span> </h2>
                                <p className="text-black fw-regular mt-2  fs-18">Order management and staff management can be the common features of every RMS. Then, what makes our RMS noteworthy?</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 my-2">
                                <div className="proactive-feature">
                                    <h3 className="fw-semibold fs-22">Receive Payments Direct-to-Seller Account</h3>
                                    <p className="text-black mt-3 fs-18 fw-regular">We have not integrated a payment gateway into our RMS. Why so? Payment gateway integration adds the service provider (‘us’ in this case) as a middleman in the payment, resulting in payment transfer delays. Therefore, you can enjoy direct payment to the seller account with our RMS as you already do.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 my-2">
                                <div className="proactive-feature">
                                    <h3 className="fw-semibold fs-22">No More Fake Orders</h3>
                                    <p className="text-black mt-3 fs-18 fw-regular">Even if a customer plays extra smart and takes a snapshot of your menu scanner to place an order way before arriving by scanning it through the mobile gallery. The order waits for confirmation to be prepared until the hotel staff checks the table. Human Intelligence peaks in to win over the drawbacks of AI.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 my-2">
                                <div className="proactive-feature">
                                    <h3 className="fw-semibold fs-22">No Heavy App Installation</h3>
                                    <p className="text-black mt-3 fs-18 fw-regular">Being SaaS-based, there is no need to buy the latest device to efficiently run a large-sized software program. Get Facebook and Netflix-like service access with Software as a Service technology. Take your user ID and create a password for your account. Automating your restaurant was this easy!</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 my-2">
                                <div className="proactive-feature">
                                    <h3 className="fw-semibold fs-22">IoT Services without Expensive IoT Infrastructure
                                    </h3>
                                    <p className="text-black mt-3 fs-18 fw-regular">Certainly, you are getting an IoT-like advance and robust experience. But worry not! We will not ask you to invest in overtly expensive smart screens and devices. You can access all of our SaaS services on your mobile, laptop, desktop, and tablet devices. Enjoy the Internet of Things (IoT) without too many things.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="restaurant-testimonials section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 col-xl-10 mx-auto col-md-12 col-sm-12 text-center mb-3">
                                <h2 className="fw-semibold position-relative fs-38"> The Delicious Journey of Our Clients In a Nutshell</h2>
                                <p className="fw-regular text-white mt-2 fs-18">Want genuine proof of success? Hear it from our clients. See what made our clients so happy with our Restaurant Management Software System.</p>
                            </div>
                            <div className="col-lg-12">
                                <div className="home-demo">
                                    <div className="owl-carousel test-carousel owl-theme owl-loaded owl-drag">




                                        <div className="owl-stage-outer"><div className="owl-stage" style={{transform: 'translate3d(-692px, 0px, 0px)', transition: 'all', width: '2768px'}}>
                                            <div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="item">
                                            <div className="quote-wrapper">
                                                <div className="quote">
                                                    <p className="text-white fw-regular mt-2  fs-18">During the weekends, I usually have a huge crowd quite difficult to handle. Being located on the highway, I deal with an impatient crowd. Therefore, it used to get very hectic to handle them. Now, my diners get live order updates and I am saved. Thank you Qmax!
                                                    </p>
                                                </div>
                                                <div className="author">
                                                    <div className="author-name">
                                                        <h3 className="text-white fw-semibold fs-18">Kunika Bajaj</h3>
                                                        <p className="text-white fw-regular">Moti Mehel Deluxe Manager </p>
                                                    </div>
                                                    <div className="rating">
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="item">
                                            <div className="quote-wrapper">
                                                <div className="quote">
                                                    <p className="text-white fw-regular mt-2  fs-18">Being a Bar owner, I wanted a payment system where payment directly comes either in cash or straight to my account. Sometimes, the customers at my bar are not even in a condition to pay online. Other RMS did not fulfil my criteria, but Qmax RMS did. So thankful!
                                                    </p>
                                                </div>
                                                <div className="author">
                                                    <div className="author-name">
                                                        <h3 className="text-white fw-semibold fs-18">Rishabh Kumawat</h3>
                                                        <p className="text-white fw-regular">Hóng’s Kitchen &amp; Bar Manager
                                                        </p>
                                                    </div>
                                                    <div className="rating">
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item active" style={{width: '336px', marginRight: '10px'}}><div className="item">
                                            <div className="quote-wrapper">
                                                <div className="quote">
                                                    <p className="fw-regular text-white mt-2  fs-18">I have just started a small bakery and since I have a limited operation budget I could neither hire too many waiters nor invest in a branded RMS. Qmax gave me the perfect solution based on a subscription model. I am enjoying the perfect kind of automation. Thank you Qmax. </p>
                                                </div>
                                                <div className="author">
                                                    <div className="author-name">
                                                        <h3 className="fw-semibold fs-18">Akshay Mehta</h3>
                                                        <p className="fw-regular text-white">Tortaê Manager
                                                        </p>
                                                    </div>
                                                    <div className="rating">
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="item">
                                            <div className="quote-wrapper">
                                                <div className="quote">
                                                    <p className="text-white fw-regular mt-2  fs-18">I have a mid-sized cafe near a campus area. Usually, students come here during their free time and my cafe is often too crowded. We used to find it too hectic to deal with the young crowd. Especially, when they edit their order so many times. But thanks Qmax for this amazing RMS.</p>
                                                </div>
                                                <div className="author">
                                                    <div className="author-name">
                                                        <h3 className="text-white fw-semibold fs-18">Dorothey Irani</h3>
                                                        <p className="text-white fw-regular">Apni Haveli Cafe Owner </p>
                                                    </div>
                                                    <div className="rating">
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="item">
                                            <div className="quote-wrapper">
                                                <div className="quote">
                                                    <p className="text-white fw-regular mt-2  fs-18">During the weekends, I usually have a huge crowd quite difficult to handle. Being located on the highway, I deal with an impatient crowd. Therefore, it used to get very hectic to handle them. Now, my diners get live order updates and I am saved. Thank you Qmax!
                                                    </p>
                                                </div>
                                                <div className="author">
                                                    <div className="author-name">
                                                        <h3 className="text-white fw-semibold fs-18">Kunika Bajaj</h3>
                                                        <p className="text-white fw-regular">Moti Mehel Deluxe Manager </p>
                                                    </div>
                                                    <div className="rating">
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item" style={{width: '336px', marginRight: '10px'}}><div className="item">
                                            <div className="quote-wrapper">
                                                <div className="quote">
                                                    <p className="text-white fw-regular mt-2  fs-18">Being a Bar owner, I wanted a payment system where payment directly comes either in cash or straight to my account. Sometimes, the customers at my bar are not even in a condition to pay online. Other RMS did not fulfil my criteria, but Qmax RMS did. So thankful!
                                                    </p>
                                                </div>
                                                <div className="author">
                                                    <div className="author-name">
                                                        <h3 className="text-white fw-semibold fs-18">Rishabh Kumawat</h3>
                                                        <p className="text-white fw-regular">Hóng’s Kitchen &amp; Bar Manager
                                                        </p>
                                                    </div>
                                                    <div className="rating">
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="item">
                                            <div className="quote-wrapper">
                                                <div className="quote">
                                                    <p className="fw-regular text-white mt-2  fs-18">I have just started a small bakery and since I have a limited operation budget I could neither hire too many waiters nor invest in a branded RMS. Qmax gave me the perfect solution based on a subscription model. I am enjoying the perfect kind of automation. Thank you Qmax. </p>
                                                </div>
                                                <div className="author">
                                                    <div className="author-name">
                                                        <h3 className="fw-semibold fs-18">Akshay Mehta</h3>
                                                        <p className="fw-regular text-white">Tortaê Manager
                                                        </p>
                                                    </div>
                                                    <div className="rating">
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div><div className="owl-item cloned" style={{width: '336px', marginRight: '10px'}}><div className="item">
                                            <div className="quote-wrapper">
                                                <div className="quote">
                                                    <p className="text-white fw-regular mt-2  fs-18">I have a mid-sized cafe near a campus area. Usually, students come here during their free time and my cafe is often too crowded. We used to find it too hectic to deal with the young crowd. Especially, when they edit their order so many times. But thanks Qmax for this amazing RMS.</p>
                                                </div>
                                                <div className="author">
                                                    <div className="author-name">
                                                        <h3 className="text-white fw-semibold fs-18">Dorothey Irani</h3>
                                                        <p className="text-white fw-regular">Apni Haveli Cafe Owner </p>
                                                    </div>
                                                    <div className="rating">
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                        <span><i className="fa fa-star" aria-hidden="true"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div></div></div><div className="owl-nav"><button type="button" aria-label="navigation" className="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" aria-label="navigation" className="owl-next"><span aria-label="Next">›</span></button></div><div className="owl-dots disabled"></div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <h2 className="fw-semibold mb-3 fs-38">What Are You Waiting for Now?</h2>
                                <p className="fs-18 fw-regular text-black">Join the Group of Our Happy Customers by Signing Up for India’s First Ever SaaS-based Restaurant Management Software System. Enjoy Leisure At Your Own Restaurant!</p>
                                <div className="position-relative mt-3">
                                    <a href="#"  onClick={(e) => e.preventDefault()} className="get-btn text-white">Get in Touch Now!</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <figure className="text-end">
                                    <img src="https://ezulix.com/assets/image/landing-page/restaurant/enquiry.png" width="350px" alt="Enquire Now" />
                                </figure>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-lg-11 col-xl-10 mx-auto text-center">
                                <h3 className="fw-semibold mb-2 fs-22">Also Avail of</h3>
                                <p className="fs-18 fw-regular text-black">We’re not limited to crafting the best POS System for Restaurants. Rather, we’re a 360-degree software development company ready to provide custom software development services like: </p>
                            </div>
                            <hr />
                            <div className="col-lg-3 my-2">
                                <div className="">
                                    <h4 className="fs-22 mb-3 fw-semibold">Food Delivery App Development</h4>
                                    <p className="fs-18 fw-regular text-black">Get customized <a href="https://ezulix.com/food-delivery-software">food ordering app development</a> services. Own a Swiggy and Zomato-like business today. </p>
                                </div>
                            </div>
                            <div className="col-lg-3 my-2">
                                <div className="">
                                    <h4 className="fs-22 mb-3 fw-semibold">10-Minute Grocery App Development</h4>
                                    <p className="fs-18 fw-regular text-black">Grocery, medicines, cosmetics, or any other product. Get a 10-minute delivery app like Blinkit and Zepto.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 my-2">
                                <div className="">
                                    <h4 className="fs-22 mb-3 fw-semibold">Restaurant Inventory Management Software Development </h4>
                                    <p className="fs-18 fw-regular text-black">Why limit inventory tracking to food items? Get full automation from the warehouse to the outlet with <a href="https://ezulix.com/inventory-management-software-development-company">inventory management software.</a></p>
                                </div>
                            </div>
                            <div className="col-lg-3 my-2">
                                <div className="">
                                    <h4 className="fs-22 mb-3 fw-semibold">CRM Software Development</h4>
                                    <p className="fs-18 fw-regular text-black">Run your enterprise even smoother by elevating the customer experience with faster query resolvance. Try <a href="https://ezulix.com/crm-development-company">CRM software development.</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="makesus section-padding">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="mb-3">
                                    <h2 className="fw-semibold position-relative  fs-38">Why Choose Qmax for <span className="text-gradient">Restaurant Management Software Development ?</span></h2>
                                    <p className="text-black fw-regular text-justify mt-2 fs-18">RMS developers are many. However, Qmax believes that the restaurant managers already have a lot on their plates. Therefore, we have developed an assistive tool after a year of research and observation. Here is what makes us a reliable choice for your software development needs.
                                    </p>
                                    <figure className="mt-5">
                                        <img src="https://ezulix.com/assets/image/landing-page/restaurant/restaurant-service.jpg" alt="restaurant food" style={{borderRadius: '20px'}} />
                                    </figure>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="row">
                                    <div className="col-md-6 col-sm-12 my-2">
                                        <div className="makesus-wrap restaurant-makesus-wrap">
                                            <figure>
                                                <img src="https://ezulix.com/assets/image/landing-page/restaurant/experience.png" width="80" alt=" Food Delivery App Development Icon" />
                                            </figure>
                                            <h3 className="fw-semibold position-relative my-2 fs-22"> 10-Years of Service </h3>
                                            <p className="text-black fw-regular fs-18">We have almost a decade old experience in custom software development. Thus, we combined our years of experience with the innermost dedication in each of our products. Enjoy top-notch services and work uninterrupted.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 my-2">
                                        <div className="makesus-wrap restaurant-makesus-wrap">
                                            <figure>
                                                <img src="https://ezulix.com/assets/image/landing-page/restaurant/client-centric.png" width="80" alt="Grocery Delivery App Development Icon" />
                                            </figure>
                                            <h3 className="fw-semibold position-relative my-2 fs-22"> Client-Centric Approach</h3>
                                            <p className="text-black fw-regular fs-18">We at Qmax do not work only for revenue, but for the client satisfaction. Our team believes that our services go futile if the customer lacks satisfaction. Therefore, we follow a client-centric approach where our client gets an active role in product development.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 my-2">
                                        <div className="makesus-wrap restaurant-makesus-wrap">
                                            <figure>
                                                <img src="https://ezulix.com/assets/image/landing-page/restaurant/tech-service.png" width="80" alt="Medicine Delivery App Development Icon" />
                                            </figure>
                                            <h3 className="fw-semibold position-relative my-2 fs-22">Latest Technology Stack</h3>
                                            <p className="text-black fw-regular fs-18">We house the most robust, timeless, and flexible technology stack that stays highly compatible in a long run. Enjoy regular updates and leverage the most updated technology stack. From the top-notch programming languages to the latest development framekworks, find everything.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-12 my-2">
                                        <div className="makesus-wrap restaurant-makesus-wrap">
                                            <figure>
                                                <img src="https://ezulix.com/assets/image/landing-page/restaurant/light-solution.png" width="70" alt="Cake &amp; Gift Delivery App Development Icon" />
                                            </figure>
                                            <h3 className="fw-semibold position-relative my-2 fs-22"> Light Solutions for PC &amp; Pocket </h3>
                                            <p className="text-black fw-regular fs-18">We craft lightweight solutions that can perform heavy business tasks seamlessly. Also, we make sure that our solutions are light not only the PC, but also on your pockets. Find customised yet affordable solutions with us.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto restaurant-subscribe-wrapper text-center mb-3">
                                <h2 className="fw-semibold position-relative mb-2 fs-35">Contact Today! </h2>
                                <p className="text-black fw-regular fs-18">
                                    Stop running out of stock and avoid blunders. Get a bespoke restaurant stock management software for your business and manage your stock judiciously.

                                </p>
                                <div className="position-relative mt-2">
                                    <a href="#"  onClick={(e) => e.preventDefault()} className="get-btn text-white Click-here">Book A Demo Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
};

export default RestaurantManagement;