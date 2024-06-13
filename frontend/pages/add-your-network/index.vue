<template>
  <Head>
    <Title>Post Your Website in our Affiliate Directory List</Title>
  </Head>
  <div>
    <UContainer>
      <div
        class="flex 2xl:flex-row xl:flex-row md:flex-row lg:flex-row flex-col gap-4 w-full"
      >
        <!-- =========== Left Side Main Content ========= -->
        <div class="w-full xl:w-[73%] lg:w-[73%] md:w-[73%] flex flex-col gap-10 py-6">
          <img src="/images/sellhealth_728x90-1.gif" alt="" />
          <h3 class="text-left text-2xl font-bold">ADD YOUR NETWORK</h3>
          <div class="2xl:max-w-md xl:max-w-md md:max-w-md lg:max-w-md max-w-full">
            <div class="grid gap-6 items-center grid-cols-2">
              <div class="w-full">
                <label for="" class="font-medium">Date</label>
                <input
                  type="text"
                  class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
                />
              </div>
              <div class="w-full">
                <label for="" class="font-medium">Time</label>
                <input
                  type="text"
                  class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
                />
              </div>
              <div class="col-span-2">
                <div class="w-full">
                  <label for="" class="font-medium">Your Full Name </label>
                  <input
                    type="text"
                    class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
                  />
                </div>
              </div>
              <div class="col-span-2">
                <div class="w-full">
                  <label for="" class="font-medium"
                    >Email <span class="text-red-500">*</span></label
                  >
                  <input
                    type="text"
                    class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
                  />
                </div>
              </div>
              <div class="col-span-2">
                <label for="" class="font-medium">Phone</label>
                <vue-tel-input
                  v-model="phone"
                  inputClasses="h-8"
                  placeholder="0301 2345678"
                  mode="international"
                ></vue-tel-input>
              </div>
              <div class="col-span-2">
                <div class="w-full">
                  <label for="" class="font-medium">Address (Optional)</label>
                  <input
                    type="text"
                    class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
                  />
                  <small class="text-xs">Address Line 1</small>
                </div>
              </div>
              <div class="w-full">
                <input
                  type="text"
                  class="w-full py-2 mt-1 text-sm px-3 outline-none border border-solid border-slate-300"
                />
                <small class="text-xs">City</small>
              </div>
              <div class="w-full">
                <input
                  type="text"
                  class="w-full py-2 mt-1 text-sm px-3 outline-none border border-solid border-slate-300"
                />
                <small class="text-xs">State / Province / Region</small>
              </div>
              <select
                id="country"
                name="country"
                class="border border-solid border-slate-300 outline-none py-2"
              >
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">
                  Congo, The Democratic Republic of The
                </option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">
                  Falkland Islands (Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">
                  Heard Island and Mcdonald Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Holy See (Vatican City State)
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">
                  Iran, Islamic Republic of
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">
                  Korea, Democratic People's Republic of
                </option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">
                  Lao People's Democratic Republic
                </option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">
                  Macedonia, The Former Yugoslav Republic of
                </option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">
                  Micronesia, Federated States of
                </option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">
                  Palestinian Territory, Occupied
                </option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">
                  Saint Pierre and Miquelon
                </option>
                <option value="Saint Vincent and The Grenadines">
                  Saint Vincent and The Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">
                  South Georgia and The South Sandwich Islands
                </option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">
                  Tanzania, United Republic of
                </option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              <div class="col-span-2">
                <div class="w-full">
                  <label for="" class="font-medium">Website / URL</label>
                  <input
                    type="text"
                    class="w-full py-2 mt-1 text-sm px-3 outline-none border border-solid border-slate-300"
                  />
                </div>
              </div>
              <div class="col-span-2">
                <div class="w-full">
                  <label for="" class="font-medium text-sm"
                    >Choose Best Ads (We will email you best advertisement Rates)
                    <span class="text-red-500">*</span></label
                  >
                  <div
                    class="flex 2xl:flex-row mt-4 xl:flex-row md:flex-row lg:flex-row flex-col justify-between"
                  >
                    <div class="flex flex-col gap-2">
                      <div class="flex items-center gap-2">
                        <input type="radio" name="radio" id="radio1" />
                        <label for="radio1" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Top Header</span>
                        </label>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="radio" name="radio" id="radio2" />
                        <label for="radio2" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Footer</span>
                        </label>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="radio" name="radio" id="radio3" />
                        <label for="radio3" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Sponsored Network</span>
                        </label>
                      </div>
                    </div>
                    <div class="flex flex-col gap-2">
                      <div class="flex items-center gap-2">
                        <input type="radio" name="radio" id="radio4" />
                        <label for="radio4" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Sidebar</span>
                        </label>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="radio" name="radio" id="radio5" />
                        <label for="radio5" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Sponsored Homepage</span>
                        </label>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="radio" name="radio" id="radio6" />
                        <label for="radio6" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Sponsored Top Offers</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-2">
                <div class="w-full">
                  <label for="" class="font-medium text-sm"
                    >Best Days to Meet (check all that apply)</label
                  >
                  <div
                    class="flex 2xl:flex-row mt-4 xl:flex-row md:flex-row lg:flex-row flex-col items-center"
                  >
                    <div class="flex flex-row gap-6">
                      <div class="flex items-center gap-2">
                        <input type="checkbox" name="checkbox" id="checkbox1" />
                        <label for="checkbox1" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Monday</span>
                        </label>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="checkbox" name="checkbox" id="checkbox2" />
                        <label for="checkbox2" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Tuesday</span>
                        </label>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="checkbox" name="checkbox" id="checkbox3" />
                        <label for="checkbox3" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Wednesday</span>
                        </label>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="checkbox" name="checkbox" id="checkbox3" />
                        <label for="checkbox3" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Thursday</span>
                        </label>
                      </div>
                      <div class="flex items-center gap-2">
                        <input type="checkbox" name="checkbox" id="checkbox3" />
                        <label for="checkbox3" class="font-normal text-sm text-gray-600">
                          <span class="text-gray-600 text-sm">Friday</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="w-full">
            <label for="" class="font-medium"
              >Paste Here your Requirement (Optional)</label
            >
            <textarea
              type="text"
              cols="8"
              rows="8"
              class="w-full py-2 mt-2 text-sm px-3 outline-none border border-solid border-slate-300"
            />
          </div>
          <button
            type="button"
            class="px-5 w-fit py-2 bg-slate-100 border border-solid border-slate-300 text-sm"
          >
            Submit
          </button>
          <div
            class="w-full mt-4 border-2 border-solid border-[#E7E4DF] px-4 relative py-4"
          >
            <div
              class="absolute left-2 -top-4 uppercase font-bold text-[#E7E4DF] bg-white px-2"
            >
              Contact Us
            </div>
            <p>Our email id is: info@affwebsite.com or aff.website.info@gmail.com</p>
          </div>
        </div>
        <!-- =========== Right Side Main Content ========= -->
        <div class="w-full xl:w-1/3 lg:w-1/3 md:w-1/3 flex flex-col gap-3 p-3">
          <h4 class="text-lg">Search Best Network</h4>
          <div
            class="border-b border-solid border-slate-200 dark:border-white/10 relative"
          >
            <div class="w-24 left-0 top-1 h-0.5 bg-blue-500"></div>
          </div>
          <!-- ========= Search theBest Network form Input ========== -->
          <form class="relative w-full mt-3 mb-4">
            <input
              type="text"
              placeholder="Search"
              class="w-full h-9 px-3 rounded border border-solid dark:bg-transparent border-slate-200 dark:border-white/10 outline-none text-sm"
            />
            <UButton
              square="{false}"
              class="absolute right-0 top-0.5 dark:bg-black bg-white/30"
              icon="i-heroicons-magnifying-glass"
              color="black"
              variant="solid"
            />
          </form>
          <h4 class="text-lg">Premium Top Network</h4>
          <div
            class="border-b border-solid border-slate-200 dark:border-white/10 relative"
          >
            <div class="w-24 left-0 top-1 h-0.5 bg-blue-500"></div>
          </div>
          <img src="/images/sellhealth_300x300-1.gif" class="w-full h-auto mb-4" alt="" />
          <h4 class="text-lg">Earn CPA upto 300$ (50% Reveshare)</h4>
          <div
            class="border-b border-solid border-slate-200 dark:border-white/10 relative"
          >
            <div class="w-24 left-0 top-1 h-0.5 bg-blue-500"></div>
          </div>
          <router-link
            to="http://qjgsn.bemobtrcks.com/go/31f6d858-16bc-4410-b38b-8c5e567c3d13"
            class="text-sm text-blue-500 hover:text-black tracking-wide px-2 h-9 flex flex-row items-center"
            >Live Chat on Telegrham</router-link
          >
          <router-link
            to="http://7l8t0.bemobtrk.com/go/8d78c62e-5455-4c81-b459-82178c77bc07"
            class="text-sm text-blue-500 hover:text-black tracking-wide px-2 h-9 flex flex-row items-center"
            >Live Chat on Skype</router-link
          >

          <img src="/images/300х300-300x300.gif" class="w-full h-auto mb-4" alt="" />
          <img src="/images/300x300_affter.gif" class="w-full h-auto mb-4" alt="" />
          <img src="/images/d-white.gif" class="w-full h-auto mb-4" alt="" />
          <button
            class="bg-[#747373] text-white dark:bg-black cursor-default w-full rounded-md py-3 flex items-center justify-center"
          >
            ∇ Top10 Verified & Reviews Rated Affiliate Websites
          </button>
          <ul>
            <li
              class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
            >
              <div
                class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
              >
                <img src="/images/vavada.png" alt="" />
              </div>
              <div class="flex flex-col items-center">
                <span class="tracking-wide text-sm font-medium">Vavada Asino</span>
                <small class="text-slate-400">♦Betting ♦Casino</small>
              </div>
              <router-link
                to="/"
                class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
              >
                <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
              </router-link>
            </li>
            <li
              class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
            >
              <div
                class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
              >
                <img src="/images/Lemonad.jpg" alt="" />
              </div>
              <div class="flex flex-col items-center">
                <span class="tracking-wide text-sm font-medium">Limonad</span>
                <small class="text-slate-400">♦Health ♦ Adult</small>
              </div>
              <router-link
                to="/"
                class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
              >
                <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
              </router-link>
            </li>
            <li
              class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
            >
              <div
                class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
              >
                <img src="/images/alfaleads.png" alt="" />
              </div>
              <div class="flex flex-col items-center">
                <span class="tracking-wide text-sm font-medium">AlfaLeads</span>
                <small class="text-slate-400">♦Gambling ♦ Dating</small>
              </div>
              <router-link
                to="/"
                class="px-6 py-2 bg-[#FF8200] text-white text-sm flex items-center"
              >
                <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
              </router-link>
            </li>
            <li
              class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
            >
              <div
                class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
              >
                <img src="/images/processed.jpeg" alt="" />
              </div>
              <div class="flex flex-col items-center">
                <span class="tracking-wide text-sm font-medium">Profit Nxt</span>
                <small class="text-slate-400">♦Health ♦Financial </small>
              </div>
              <router-link
                to="/"
                class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
              >
                <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
              </router-link>
            </li>
            <li
              class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
            >
              <div
                class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
              >
                <img src="/images/Untitleda.png" alt="" />
              </div>
              <div class="flex flex-col items-center">
                <span class="tracking-wide text-sm font-medium">Vavada Asino</span>
                <small class="text-slate-400">♦Betting ♦Casino</small>
              </div>
              <router-link
                to="/"
                class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
              >
                <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
              </router-link>
            </li>
            <li
              class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
            >
              <div
                class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
              >
                <img src="/images/procft.png" alt="" />
              </div>
              <div class="flex flex-col items-center">
                <span class="tracking-wide text-sm font-medium">Ambalaya Affiliates</span>
                <small class="text-slate-400">♦Biz Opp ♦Sweeps</small>
              </div>
              <router-link
                to="/"
                class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
              >
                <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
              </router-link>
            </li>
            <li
              class="flex items-center justify-between border-t border-solid border-slate-200 dark:border-white/10 py-3"
            >
              <div
                class="w-10 h-10 border-2 border-solid border-black p-0.5 hover:border-black cursor-pointer"
              >
                <img src="/images/alfaleads-01.png" alt="" />
              </div>
              <div class="flex flex-col items-center">
                <span class="tracking-wide text-sm font-medium">Profit Pixels</span>
                <small class="text-slate-400">♦All in One Offers</small>
              </div>
              <router-link
                to="/"
                class="px-7 py-2 bg-[#FF8200] text-white text-sm flex items-center"
              >
                <img src="/svg/arrow-right.svg" class="w-4 h-4 invert" alt="" /> Join
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </UContainer>
  </div>
</template>

<script lang="ts">
import Table from "~/components/Table.vue";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

export default {
  components: { Table, VueTelInput },

  setup() {
    const phone = ref(null);

    return {};
  },
};
</script>
