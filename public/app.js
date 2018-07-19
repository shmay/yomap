!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var t={},n={},r={},o={}.hasOwnProperty,i=/^\.\.?(\/|$)/,s=function(e,t){for(var n,r=[],o=(i.test(t)?e+"/"+t:t).split("/"),s=0,a=o.length;s<a;s++)n=o[s],".."===n?r.pop():"."!==n&&""!==n&&r.push(n);return r.join("/")},a=function(e){return e.split("/").slice(0,-1).join("/")},u=function(t){return function(n){var r=s(a(t),n);return e.require(r,t)}},c=function(e,t){var r=w&&w.createHot(e),o={id:e,exports:{},hot:r};return n[e]=o,t(o.exports,u(e),o),o.exports},d=function(e){return r[e]?d(r[e]):e},l=function(e,t){return d(s(a(e),t))},f=function(e,r){null==r&&(r="/");var i=d(e);if(o.call(n,i))return n[i].exports;if(o.call(t,i))return c(i,t[i]);throw new Error("Cannot find module '"+e+"' from '"+r+"'")};f.alias=function(e,t){r[t]=e};var p=/\.[^.\/]+$/,h=/\/index(\.[^\/]+)?$/,v=function(e){if(p.test(e)){var t=e.replace(p,"");o.call(r,t)&&r[t].replace(p,"")!==t+"/index"||(r[t]=e)}if(h.test(e)){var n=e.replace(h,"");o.call(r,n)||(r[n]=e)}};f.register=f.define=function(e,r){if(e&&"object"==typeof e)for(var i in e)o.call(e,i)&&f.register(i,e[i]);else t[e]=r,delete n[e],v(e)},f.list=function(){var e=[];for(var n in t)o.call(t,n)&&e.push(n);return e};var w=e._hmr&&new e._hmr(l,f,t,n);f._cache=n,f.hmr=w&&w.wrap,f.brunch=!0,e.require=f}}(),function(){var e;"undefined"==typeof window?this:window;require.register("helpers.js",function(e,t,n){"use strict"}),require.register("initialize.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=t("models/territory.js"),i=(r(o),t("views/search_view.js")),s=r(i),a=t("views/territory_view.js"),u=r(a),c=t("views/map_view.js"),d=r(c);document.addEventListener("DOMContentLoaded",function(){window.searchView=new s["default"],window.territoryView=new u["default"],window.mapView=new d["default"]})}),require.register("map_util.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0}),e.gmapifyPolygons=void 0;var o=t("lodash/reject"),i=r(o),s=t("lodash/map"),a=r(s),u=function(e){return(0,a["default"])(e,function(e){return new google.maps.LatLng(e[1],e[0])})},c=(e.gmapifyPolygons=function(e){return(0,a["default"])(e,function(e){var t,n,r,o,i,s;for(n=[],s=u(c(e.outerCoords)),o=(0,a["default"])(e.innerCoords,function(e){return u(c(e))}),n.push(s),r=0,i=o.length;r<i;r++)t=o[r],n.push(t);return n})},function(e){return(0,i["default"])(e,function(e){return e.length<2})})}),require.register("models/territory.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=t("lodash/find"),a=r(s),u=t("./../map_util.js"),c=function(){function e(t){o(this,e),this.polygons=[],this.mappedPolygons=[],Object.assign(this,t),this.id=this.getId()}return i(e,[{key:"getId",value:function(){return[this.type,this.abbrev||this.terse].join("-")}},{key:"friendlyName",value:function(){var e=this.name;return"city"==this.type?e+=" ("+this.state.toUpperCase()+")":"state"==this.type&&(e+=" ("+this.country.toUpperCase()+")"),e}},{key:"badgeClass",value:function(){switch(this.type){case"city":return"info";case"state":return"light";case"country":return"dark"}}},{key:"getURL",value:function(){var e,t="https://s3-us-west-2.amazonaws.com/yodap";return"country"==this.type?e=t+"/countries/"+this.abbrev+".json":"state"==this.type?e=t+"/states/"+this.abbrev+".json":"city"==this.type&&(e=t+"/cities/"+this.country+"/"+this.state+"/"+this.terse+".json"),e}},{key:"getCenter",value:function(){var e=new google.maps.LatLngBounds,t=this.polygons,n=t[0][0];return n.forEach(function(t){e.extend(t)}),e.getCenter()}},{key:"fetchPoints",value:function(){var e=this,t=this.getURL();$.getJSON({url:t,success:function(t){e.polygons=(0,u.gmapifyPolygons)(t.polygons),window.mapView.addTerritory(e)},error:function(e){}})}}],[{key:"findById",value:function(e){return(0,a["default"])(window.allTerritories,function(t){return t.id==e})}}]),e}();e["default"]=c}),require.register("views/map_view.js",function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){r(this,e),this.territories=[]}return o(e,[{key:"resetTerritory",value:function(e){this.removeTerritory(e),this.addTerritory(e)}},{key:"gotoTerritory",value:function(e){window.map.setCenter(e.getCenter());var t;switch(e.type){case"city":t=10;break;case"state":t=5;break;case"country":t=4}window.map.setZoom(t)}},{key:"removeTerritory",value:function(e){e.mappedPolygons.forEach(function(e){e.setMap(null)})}},{key:"addTerritory",value:function(e){var t=this;e.polygons.forEach(function(n){var r=t.addPolygon(n);e.mappedPolygons.push(r)})}},{key:"addPolygon",value:function(e){var t=new google.maps.Polygon({map:window.map,paths:e,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:1,fillColor:"#FF0000",fillOpacity:.35,draggable:!0,geodesic:!0});return t}}]),e}();e["default"]=i}),require.register("views/search_view.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=t("../models/territory.js"),a=r(s),u=t("lodash/flatten"),c=r(u),d=function(){function e(){var t=this;o(this,e),this.ele=$("#search-hold"),this.dropdownMenu=this.ele.find(".dropdown-menu");var n=$("#search-input");n.on("input",this.onInput.bind(this)),n.on("keydown",this.onKeydown.bind(this)),n.on("focus",this.onFocus.bind(this)),this.dropdownMenu.on("click","a.dropdown-item",this.clickDropdownItem.bind(this)),$.getJSON({url:"https://s3-us-west-2.amazonaws.com/yodap/places.json.gz",success:function(e){window.countries=e.filter(function(e){return"country"==e.type}).map(function(e){return new a["default"](e)}),window.states=e.filter(function(e){return"state"==e.type}).map(function(e){return new a["default"](e)}),window.cities=e.filter(function(e){return"city"==e.type}).map(function(e){return new a["default"](e)}),window.allTerritories=(0,c["default"])([countries,states,cities])}.bind(this)}),$(document).click(function(e){$(e.target).closest("#search-dropdown-hold").length||t.dropdownMenu.removeClass("show")})}return i(e,[{key:"addItem",value:function(e){var t=this;e.classList.add("active"),$("#search-input").val(""),setTimeout(function(){return t.closeDropdown()},5);var n=a["default"].findById(e.getAttribute("data-id"));n.fetchPoints(),window.territoryView.addTerritory(n)}},{key:"clickDropdownItem",value:function(e){this.dropdownMenu.find("a.active").removeClass("active"),this.addItem(e.currentTarget)}},{key:"openDropdown",value:function(){this.dropdownMenu.addClass("show")}},{key:"closeDropdown",value:function(){this.dropdownMenu.removeClass("show")}},{key:"onFocus",value:function(e){e.currentTarget.value.length&&this.openDropdown()}},{key:"moveSelection",value:function(e){var t=this.dropdownMenu.find(".active")[0],n=this.dropdownMenu.children(),r=t?n.index(t):-1,o=n[r+e];o||(o=e==-1?n.last()[0]:n.first()[0]),n.removeClass("active"),o&&o.classList.add("active")}},{key:"hitEnter",value:function(){var e=void 0;(e=this.dropdownMenu.find(".active")[0])&&this.addItem(e)}},{key:"hitEsc",value:function(){this.closeDropdown()}},{key:"goUp",value:function(){this.moveSelection(-1)}},{key:"goDown",value:function(){this.moveSelection(1)}},{key:"onKeydown",value:function(e){40==e.which?this.goDown():38==e.which?this.goUp():13==e.which?this.hitEnter():27==e.which&&this.hitEsc()}},{key:"onInput",value:function(e){var t=e.currentTarget.value,n=this.findMatches(t);n.length?(this.dropdownMenu[0].innerHTML=this.renderDropdownHtml(n),this.openDropdown()):this.closeDropdown()}},{key:"renderDropdownHtml",value:function(e){var t=[];return e.forEach(function(e){t.push("\n        <a class='dropdown-item' data-id='"+e.id+"' href='#'>\n          "+e.friendlyName()+'\n          <span class="badge badge-'+e.badgeClass()+'">'+e.type+"</span>\n        </a>\n      ")}),t.join("")}},{key:"findMatches",value:function(e){e=e.length>2?new RegExp(e.replace(/\s|\(|\)/,""),"i"):new RegExp("^"+e.replace(/\s|\(|\)/,""),"i");var t=[];return["countries","states","cities"].some(function(n){var r=window[n];return r.some(function(n){return e.test(n.terse)&&t.push(n),t.length>=20})}),t}}]),e}();e["default"]=d}),require.register("views/territory_view.js",function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=t("../models/territory.js"),a=r(s),u=function(){function e(){o(this,e),this.territoryDiv=$("#territory-hold"),this.territoryDiv.on("click","a.dropdown-item",this.clickTerritory.bind(this))}return i(e,[{key:"clickTerritory",value:function(e){e.preventDefault();var t=$(e.currentTarget),n=t.closest(".dropdown").attr("data-id"),r=a["default"].findById(n);if(t.hasClass("reset"))window.mapView.resetTerritory(r);else if(t.hasClass("goto"))window.mapView.gotoTerritory(r);else if(t.hasClass("remove")){var o=this.territoryDiv.find('div.dropdown[data-id="'+r.id+'"]');o.remove(),window.mapView.removeTerritory(r)}}},{key:"addTerritory",value:function(e){var t=this.renderTerritory(e);this.territoryDiv.append(t)}},{key:"renderTerritory",value:function(e){return'\n      <div class="dropdown pl-2" data-id=\''+e.id+'\'>\n        <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">\n          '+e.name+'\n        </button>\n        <div class="dropdown-menu">\n          <a class="dropdown-item reset" href="#">Reset</a>\n          <a class="dropdown-item goto" href="#">Go to</a>\n          <div class="dropdown-divider"></div>\n          <a class="dropdown-item remove" href="#">Remove</a>\n        </div>\n      </div>'}}]),e}();e["default"]=u}),require.alias("buffer/index.js","buffer"),require.alias("process/browser.js","process"),e=require("process"),require.register("___globals___",function(e,t,n){})}(),require("___globals___");