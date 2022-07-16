import Vue from "vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import * as fa from "@fortawesome/free-solid-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(...fa);
library.add(...fb);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
