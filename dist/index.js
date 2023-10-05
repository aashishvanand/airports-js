(()=>{var e={138:(e,r,t)=>{const o=t(231),i=t(884);let n=[];function a(e,r,t){if(!e.match(r))throw new Error(t)}!function(){if(n.length)return;const e=o.readFileSync("./src/airports.gz"),r=i.gunzipSync(e).toString();n=JSON.parse(r)}(),e.exports={getAirportByIata:function(e){return a(e,/^[A-Z]{3}$/,"Invalid IATA format. Please provide a 3-letter uppercase code, e.g., 'AAA'."),n.filter((r=>r.iata===e))},getAirportByIcao:function(e){return a(e,/^[A-Z0-9]{4}$/,"Invalid ICAO format. Please provide a 4-character uppercase code, e.g., 'NTGA'."),n.filter((r=>r.icao===e))},getAirportByCityCode:function(e){return a(e,/^[A-Z]{3}$/,"Invalid City Code format. Please provide a 3-letter uppercase code, e.g., 'NYC'."),n.filter((r=>r.city_code===e))},getAirportByCountryCode:function(e){return a(e,/^[A-Z]{2}$/,"Invalid Country Code format. Please provide a 2-letter uppercase code, e.g., 'US'."),n.filter((r=>r.country_code===e))},getAirportByContinent:function(e){return a(e,/^[A-Z]{2}$/,"Invalid Continent Code format. Please provide a 2-letter uppercase code, e.g., 'AS'."),n.filter((r=>r.continent_code===e))}}},231:e=>{"use strict";e.exports=require("fs")},884:e=>{"use strict";e.exports=require("zlib")}},r={},t=function t(o){var i=r[o];if(void 0!==i)return i.exports;var n=r[o]={exports:{}};return e[o](n,n.exports,t),n.exports}(138);module.exports=t})();