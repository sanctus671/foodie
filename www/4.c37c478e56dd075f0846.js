(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"9zNo":function(t,o,n){"use strict";n.d(o,"a",(function(){return v}));var i=n("mrSG"),e=n("AytR"),a=n("fXoL"),r=n("tyNb"),l=n("B7Rs"),c=n("a/9d"),s=n("TEn/"),p=n("ri4K"),u=n("BEPN"),g=n("P12i"),d=n("itIa"),b=n("3Pt+"),f=n("ofXK");function m(t,o){1&t&&a.Ib(0,"ion-icon",22)}function h(t,o){if(1&t&&(a.Kb(0,"ion-avatar",23),a.Ib(1,"img",24),a.Jb()),2&t){var n=a.Ub();a.xb(1),a.Xb("src",n.location.image,a.dc)}}function y(t,o){1&t&&a.Ib(0,"ion-icon",25)}function w(t,o){if(1&t&&(a.Kb(0,"ion-avatar",23),a.Ib(1,"img",24),a.Jb()),2&t){var n=a.Ub();a.xb(1),a.Xb("src",n.location.logo,a.dc)}}function N(t,o){if(1&t&&(a.Kb(0,"ion-select-option",26),a.gc(1),a.Jb()),2&t){var n=o.$implicit;a.Xb("value",n.city),a.xb(1),a.hc(n.city)}}function _(t,o){if(1&t&&(a.Kb(0,"ion-select-option",26),a.gc(1),a.Jb()),2&t){var n=o.$implicit;a.Xb("value",n.id),a.xb(1),a.hc(n.name)}}function Z(t,o){if(1&t&&(a.Kb(0,"p",27),a.gc(1),a.Jb()),2&t){var n=a.Ub();a.xb(1),a.hc(n.location.error)}}var v=function(){function t(t,o,n,e,a,r,l,c,s,p,u,g){var d,b;this.router=t,this.transfer=o,this.camera=n,this.loadingController=e,this.alertController=a,this.modalController=r,this.navController=l,this.authenticationService=c,this.navParams=s,this.cityService=p,this.locationService=u,this.nativeGeocoder=g;var f=this.navParams.get("location");f.categoriesIds=[];try{for(var m=Object(i.d)(f.categories),h=m.next();!h.done;h=m.next())f.categoriesIds.push(h.value.id)}catch(y){d={error:y}}finally{try{h&&!h.done&&(b=m.return)&&b.call(m)}finally{if(d)throw d.error}}this.location=Object.assign({},f),this.cities=[],this.setCities(),this.categories=[],this.getCategories()}return t.prototype.ngOnInit=function(){},t.prototype.dismiss=function(){this.modalController.dismiss()},t.prototype.getCategories=function(){var t=this;this.locationService.getCategories().then((function(o){t.categories=o,t.categories.unshift({name:"Any"})})).catch((function(){}))},t.prototype.changeImage=function(t){var o=this;this.camera.getPicture({sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,quality:25}).then((function(n){var i;o.loadingController.create({message:"Your image is being uploaded. Please wait...",duration:2e4}).then((function(t){i=t,t.present()}));var a=o.transfer.create(),r={fileKey:"media_file",fileName:Math.random().toString(36).substring(2),params:{},mimeType:"image/jpeg"};a.upload(n,encodeURI(e.a.apiUrl+"/upload"),r).then((function(n){if(n.response){var e=JSON.parse(n.response);o.location[t]=e.file}i.dismiss()}),(function(t){o.alertController.create({header:"Error",subHeader:"There was a problem uploading your image",message:JSON.stringify(t),buttons:[{text:"Dismiss",role:"cancel"}]}).then((function(t){t.present()})),i.dismiss()}))}),(function(t){}))},t.prototype.save=function(){this.location.categories=this.location.categoriesIds,this.modalController.dismiss({location:this.location})},t.prototype.cityChanged=function(){var t,o;if(this.location.latitude&&this.location.longitude)try{for(var n=Object(i.d)(this.cities),e=n.next();!e.done;e=n.next()){var a=e.value;a.city===this.location.city&&(this.location.latitude=a.lat,this.location.longitude=a.lng)}}catch(r){t={error:r}}finally{try{e&&!e.done&&(o=n.return)&&o.call(n)}finally{if(t)throw t.error}}},t.prototype.addressChanged=function(){var t=this;this.nativeGeocoder.forwardGeocode(this.location.address,{useLocale:!0,maxResults:1}).then((function(o){"NZ"===o[0].countryCode&&(t.location.latitude=o[0].latitude,t.location.longitude=o[0].longitude)})).catch((function(t){return console.log(t)}))},t.prototype.setCities=function(){this.cities=this.cityService.getCities()},t.\u0275fac=function(o){return new(o||t)(a.Hb(r.g),a.Hb(l.a),a.Hb(c.a),a.Hb(s.N),a.Hb(s.a),a.Hb(s.O),a.Hb(s.P),a.Hb(p.a),a.Hb(s.Q),a.Hb(u.a),a.Hb(g.a),a.Hb(d.a))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-edit-location"]],decls:57,vars:16,consts:[["color","primary"],["slot","start"],[3,"click"],["name","close"],[1,"edit-location"],[1,"edit-location__form"],["position","floating"],["clearInput","","type","email",3,"ngModel","ngModelChange"],[1,"edit-location__form__avatar"],["name","business-outline",4,"ngIf"],["item-start","",4,"ngIf"],["size","small","color","primary",3,"click"],["name","color-palette-outline",4,"ngIf"],["clearInput","","type","text",3,"ngModel","ngModelChange"],["clearInput","","type","text",3,"ngModel","ngModelChange","ionBlur"],[3,"ngModel","ngModelChange","ionChange"],[3,"value",4,"ngFor","ngForOf"],["multiple","true",3,"ngModel","ngModelChange"],["clearInput","",3,"ngModel","ngModelChange"],["class","signup__form__error",4,"ngIf"],[1,"signup-footer"],["color","primary","expand","full",1,"signup-footer__button",3,"disabled","click"],["name","business-outline"],["item-start",""],[3,"src"],["name","color-palette-outline"],[3,"value"],[1,"signup__form__error"]],template:function(t,o){1&t&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar",0),a.Kb(2,"ion-buttons",1),a.Kb(3,"ion-button",2),a.Sb("click",(function(){return o.dismiss()})),a.Ib(4,"ion-icon",3),a.Jb(),a.Jb(),a.Kb(5,"ion-title"),a.gc(6,"Edit Details"),a.Jb(),a.Jb(),a.Jb(),a.Kb(7,"ion-content",4),a.Kb(8,"ion-list",5),a.Kb(9,"ion-item"),a.Kb(10,"ion-label",6),a.gc(11,"Name"),a.Jb(),a.Kb(12,"ion-input",7),a.Sb("ngModelChange",(function(t){return o.location.name=t})),a.Jb(),a.Jb(),a.Kb(13,"ion-item",8),a.fc(14,m,1,0,"ion-icon",9),a.fc(15,h,2,1,"ion-avatar",10),a.Kb(16,"ion-button",11),a.Sb("click",(function(){return o.changeImage("image")})),a.gc(17,"Select Main Image"),a.Jb(),a.Jb(),a.Kb(18,"ion-item",8),a.fc(19,y,1,0,"ion-icon",12),a.fc(20,w,2,1,"ion-avatar",10),a.Kb(21,"ion-button",11),a.Sb("click",(function(){return o.changeImage("logo")})),a.gc(22,"Select Logo (optional)"),a.Jb(),a.Jb(),a.Kb(23,"ion-item"),a.Kb(24,"ion-label",6),a.gc(25,"Phone"),a.Jb(),a.Kb(26,"ion-input",13),a.Sb("ngModelChange",(function(t){return o.location.phone=t})),a.Jb(),a.Jb(),a.Kb(27,"ion-item"),a.Kb(28,"ion-label",6),a.gc(29,"Address"),a.Jb(),a.Kb(30,"ion-input",14),a.Sb("ngModelChange",(function(t){return o.location.address=t}))("ionBlur",(function(){return o.addressChanged()})),a.Jb(),a.Jb(),a.Kb(31,"ion-item"),a.Kb(32,"ion-label",6),a.gc(33,"City"),a.Jb(),a.Kb(34,"ion-select",15),a.Sb("ngModelChange",(function(t){return o.location.city=t}))("ionChange",(function(){return o.cityChanged()})),a.fc(35,N,2,2,"ion-select-option",16),a.Jb(),a.Jb(),a.Kb(36,"ion-item"),a.Kb(37,"ion-label",6),a.gc(38,"Keywords"),a.Jb(),a.Kb(39,"ion-select",17),a.Sb("ngModelChange",(function(t){return o.location.categoriesIds=t})),a.fc(40,_,2,2,"ion-select-option",16),a.Jb(),a.Jb(),a.Kb(41,"ion-item"),a.Kb(42,"ion-label",6),a.gc(43,"Description"),a.Jb(),a.Kb(44,"ion-textarea",18),a.Sb("ngModelChange",(function(t){return o.location.description=t})),a.Jb(),a.Jb(),a.Kb(45,"ion-item"),a.Kb(46,"ion-label",6),a.gc(47,"Website (e.g. for bookings)"),a.Jb(),a.Kb(48,"ion-input",13),a.Sb("ngModelChange",(function(t){return o.location.website=t})),a.Jb(),a.Jb(),a.Kb(49,"ion-item"),a.Kb(50,"ion-label",6),a.gc(51,"Link to Menu"),a.Jb(),a.Kb(52,"ion-input",13),a.Sb("ngModelChange",(function(t){return o.location.menu_url=t})),a.Jb(),a.Jb(),a.fc(53,Z,2,1,"p",19),a.Jb(),a.Jb(),a.Kb(54,"ion-footer",20),a.Kb(55,"ion-button",21),a.Sb("click",(function(){return o.save()})),a.gc(56," Save "),a.Jb(),a.Jb()),2&t&&(a.xb(12),a.Xb("ngModel",o.location.name),a.xb(2),a.Xb("ngIf",!o.location.image),a.xb(1),a.Xb("ngIf",o.location.image),a.xb(4),a.Xb("ngIf",!o.location.logo),a.xb(1),a.Xb("ngIf",o.location.logo),a.xb(6),a.Xb("ngModel",o.location.phone),a.xb(4),a.Xb("ngModel",o.location.address),a.xb(4),a.Xb("ngModel",o.location.city),a.xb(1),a.Xb("ngForOf",o.cities),a.xb(4),a.Xb("ngModel",o.location.categoriesIds),a.xb(1),a.Xb("ngForOf",o.categories),a.xb(4),a.Xb("ngModel",o.location.description),a.xb(4),a.Xb("ngModel",o.location.website),a.xb(4),a.Xb("ngModel",o.location.menu_url),a.xb(1),a.Xb("ngIf",o.location.error),a.xb(2),a.Xb("disabled",o.location.loading||!o.location.name))},directives:[s.l,s.K,s.i,s.h,s.m,s.I,s.j,s.s,s.q,s.r,s.p,s.U,b.d,b.g,f.j,s.A,s.T,f.i,s.G,s.k,s.e,s.B],styles:[".edit-location[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{font-size:12px;--padding-start:0.6em;--padding-end:0.6em;margin-left:15px}"]}),t}()},BEPN:function(t,o,n){"use strict";n.d(o,"a",(function(){return a}));var i=n("mrSG"),e=n("fXoL"),a=function(){function t(){}return t.prototype.getClosestCity=function(t,o,n){var e,a,r,l,c=this.getCities();try{for(var s=Object(i.d)(c),p=s.next();!p.done;p=s.next())if(t.indexOf((b=p.value).city)>-1)return b.city}catch(f){e={error:f}}finally{try{p&&!p.done&&(a=s.return)&&a.call(s)}finally{if(e)throw e.error}}var u="Auckland";try{for(var g=Object(i.d)(c),d=g.next();!d.done;d=g.next()){var b;this.latLngDist((b=d.value).lat,b.lng,o,n)<99999&&(u=b.city)}}catch(m){r={error:m}}finally{try{d&&!d.done&&(l=g.return)&&l.call(g)}finally{if(r)throw r.error}}return u},t.prototype.latLngDist=function(t,o,n,i){function e(t){return t*Math.PI/180}return function(t,o,n,i){t=e(t),n=e(n),o=e(o);var a=((i=e(i))-o)*Math.cos((t+n)/2),r=n-t;return 3959*Math.sqrt(a*a+r*r)}(t,o,n,i)},t.prototype.getCities=function(){return[{city:"Auckland",admin:"",country:"New Zealand",population_proper:"395982",iso2:"NZ",capital:"",lat:"-36.866667",lng:"174.766667",population:"1377200",image:"http://www.backpackerbus.co.nz/wp-content/uploads/Auckland-Harbour-at-night.jpg"},{city:"Wellington",admin:"",country:"New Zealand",population_proper:"393400",iso2:"NZ",capital:"primary",lat:"-41.3",lng:"174.783333",population:"393400",image:"https://img.theculturetrip.com/768x432/wp-content/uploads/2017/01/wellington_city_at_dusk.jpg"},{city:"Christchurch",admin:"Canterbury",country:"New Zealand",population_proper:"363200",iso2:"NZ",capital:"",lat:"-43.533333",lng:"172.633333",population:"363200",image:"https://live.staticflickr.com/4027/4708156945_4d948687de_b.jpg"},{city:"Waitakere",admin:"",country:"New Zealand",population_proper:"208100",iso2:"NZ",capital:"",lat:"-36.85",lng:"174.55",population:"208100",image:"https://www.newzealand.com/assets/Tourism-NZ/Auckland/3641051356/img-1536924181-5046-5833-44E76CBE-E486-BBC9-804410866EE48326__FocalPointCropWzQyNyw2NDAsNTYsNTAsODUsImpwZyIsNjUsMi41XQ.jpg"},{city:"Northcote",admin:"",country:"New Zealand",population_proper:"205605",iso2:"NZ",capital:"",lat:"-36.815278",lng:"174.745833",population:"205605",image:"https://www.northcote.school.nz/media/images/13717872918a66a079731248e792151869065398cb.jpg"},{city:"Hamilton",admin:"",country:"New Zealand",population_proper:"148200",iso2:"NZ",capital:"",lat:"-37.783333",lng:"175.283333",population:"148200",image:"https://www.lyndalee.co.nz/images/418423/hamilton-city-night.jpg"},{city:"Tauranga",admin:"",country:"New Zealand",population_proper:"121500",iso2:"NZ",capital:"",lat:"-37.686111",lng:"176.166667",population:"121500",image:"https://upload.wikimedia.org/wikipedia/commons/4/45/Tauranga_at_night.jpg"},{city:"Dunedin",admin:"Otago",country:"New Zealand",population_proper:"117700",iso2:"NZ",capital:"",lat:"-45.866667",lng:"170.5",population:"117700",image:"https://i.pinimg.com/originals/d6/79/41/d6794134ba5c30b2cb9a9129f647d464.jpg"},{city:"Lower Hutt",admin:"",country:"New Zealand",population_proper:"102400",iso2:"NZ",capital:"",lat:"-41.216667",lng:"174.916667",population:"102400",image:"http://gabisworld.com/data_images/top_cityes/lower-hutt/lower-hutt-01.jpg"},{city:"Palmerston North",admin:"",country:"New Zealand",population_proper:"82400",iso2:"NZ",capital:"",lat:"-40.35",lng:"175.616667",population:"82400",image:"https://pix10.agoda.net/hotelImages/108/108616/108616_14062508110020015006.jpg"},{city:"Nelson",admin:"Nelson",country:"New Zealand",population_proper:"60800",iso2:"NZ",capital:"",lat:"-41.273459",lng:"173.282347",population:"60800",image:"https://www.newzealand.com/assets/Tourism-NZ/Nelson/c3fb763d4a/img-1536011461-3107-3327-2724284081_c1802f9e75_o__FocalPointCropWzQyNyw2NDAsNjQsMzAsODUsImpwZyIsNjUsMi41XQ.jpg"},{city:"Napier",admin:"",country:"New Zealand",population_proper:"57800",iso2:"NZ",capital:"",lat:"-39.483333",lng:"176.916667",population:"57800",image:"https://cdn.newzealandnow.govt.nz/sites/default/files/styles/carousel_images/public/field-uploads/Hawke%27s-Bay-Napier-sound-shell.jpg?itok=DUKrxyr5"},{city:"Porirua",admin:"",country:"New Zealand",population_proper:"52500",iso2:"NZ",capital:"",lat:"-41.133333",lng:"174.833333",population:"52500",image:"https://www.aa.co.nz/assets/NEW-AA-TRAVELLER/EDITORIAL-LOCATIONS/Porirua/_resampled/ScaleWidthWyI3OTUiXQ/Looking-over-Porirua-at-sunset.jpg?m=1518187581?m=1518187581"},{city:"New Plymouth",admin:"",country:"New Zealand",population_proper:"52500",iso2:"NZ",capital:"",lat:"-39.066667",lng:"174.083333",population:"52500",image:"https://www.newzealand.com/assets/Tourism-NZ/Taranaki/d959ecee13/img-1536905168-3686-29020-A179AA59-FF95-B4A2-CC3356A1DE9B9492__FocalPointCropWzQyMCw5NjAsNDgsMzcsNzUsImpwZyIsNjUsMi41XQ.jpg"},{city:"Invercargill",admin:"Southland",country:"New Zealand",population_proper:"49200",iso2:"NZ",capital:"",lat:"-46.428681",lng:"168.361596",population:"49200",image:"https://icc.govt.nz/wp-content/uploads/2019/03/Invercargill-banner-560x250.jpg"},{city:"Wanganui",admin:"",country:"New Zealand",population_proper:"43200",iso2:"NZ",capital:"",lat:"-39.933333",lng:"175.05",population:"43200",image:"https://www.salvationarmy.org.nz/sites/default/files/styles/hero_image/public/city/image/20130710Wanganuiareapic.jpg?itok=iLigeEnq"},{city:"Gisborne",admin:"",country:"New Zealand",population_proper:"34300",iso2:"NZ",capital:"",lat:"-38.653333",lng:"178.004167",population:"34300",image:"https://farm1.staticflickr.com/763/32776550765_a6dc255a65_o.jpg"},{city:"Timaru",admin:"Canterbury",country:"New Zealand",population_proper:"27200",iso2:"NZ",capital:"",lat:"-44.398444",lng:"171.255194",population:"27200",image:"https://resources.stuff.co.nz/content/dam/images/1/q/m/x/2/d/image.related.StuffLandscapeSixteenByNine.710x400.1qi41a.png/1530592019629.jpg"},{city:"Pukekohe",admin:"",country:"New Zealand",population_proper:"26300",iso2:"NZ",capital:"",lat:"-37.2",lng:"174.95",population:"26300",image:"https://www.osbornerealty.co.nz/pages/237/userfiles/pukekohe%20aerial.jpg"},{city:"Paraparaumu",admin:"",country:"New Zealand",population_proper:"25263",iso2:"NZ",capital:"",lat:"-40.9",lng:"174.983333",population:"25263",image:"https://static2.stuff.co.nz/1346027988/474/7555474.jpg"},{city:"Taupo",admin:"",country:"New Zealand",population_proper:"22600",iso2:"NZ",capital:"",lat:"-38.683333",lng:"176.083333",population:"22600",image:"https://farmersweekly.co.nz/assets/uploaded-files/2019-07/Taupo-flat.jpg"},{city:"Masterton",admin:"",country:"New Zealand",population_proper:"20200",iso2:"NZ",capital:"",lat:"-40.959722",lng:"175.6575",population:"20200",image:"https://cdn.britannica.com/23/143923-050-6F0F239D/Masterton-North-Island-NZ.jpg"},{city:"Levin",admin:"",country:"New Zealand",population_proper:"19550",iso2:"NZ",capital:"",lat:"-40.633333",lng:"175.275",population:"19550",image:"http://www.nzonline.org.nz/images/uploaded/regions/1330302294_large.jpg"},{city:"Whakatane",admin:"",country:"New Zealand",population_proper:"18700",iso2:"NZ",capital:"",lat:"-37.983333",lng:"177.0",population:"18700",image:"https://i.pinimg.com/originals/91/c9/b3/91c9b39eb3aa369012ed9202060dedb3.jpg"},{city:"Tokoroa",admin:"",country:"New Zealand",population_proper:"13350",iso2:"NZ",capital:"",lat:"-38.233333",lng:"175.866667",population:"13350",image:"https://tokoroaweather.net/images/tokoroa_town.jpg"},{city:"Hawera",admin:"",country:"New Zealand",population_proper:"11100",iso2:"NZ",capital:"",lat:"-39.591667",lng:"174.283333",population:"11100",image:"https://www.southtaranaki.com/ProcessImage/uploaded_images/Community%20Development/Hawera%20Sunset%20And%20Mount.jpg?w=530"},{city:"Greymouth",admin:"West Coast",country:"New Zealand",population_proper:"10100",iso2:"NZ",capital:"",lat:"-42.451111",lng:"171.206778",population:"10100",image:"https://www.newzealand.com/assets/Tourism-NZ/Other/46d75c4f00/img-1536964234-1122-17411-p-B5895D9C-BCD8-3537-83CECEFBF310F29A-2544003__FocalPointCropWzQyNyw2NDAsNTAsNTAsODUsImpwZyIsNjUsMi41XQ.jpg"},{city:"Thames",admin:"",country:"New Zealand",population_proper:"6756",iso2:"NZ",capital:"",lat:"-37.133333",lng:"175.533333",population:"6756"},{city:"Kerikeri",admin:"",country:"New Zealand",population_proper:"5856",iso2:"NZ",capital:"",lat:"-35.216667",lng:"173.966667",population:"5856"},{city:"Wanaka",admin:"Otago",country:"New Zealand",population_proper:"5037",iso2:"NZ",capital:"",lat:"-44.709755",lng:"169.129417",population:"5037"},{city:"Westport",admin:"West Coast",country:"New Zealand",population_proper:"3900",iso2:"NZ",capital:"",lat:"-41.752685",lng:"171.583402",population:"3900"},{city:"Turangi",admin:"",country:"New Zealand",population_proper:"3240",iso2:"NZ",capital:"",lat:"-39.0",lng:"175.933333",population:"3240"},{city:"Hokitika",admin:"West Coast",country:"New Zealand",population_proper:"3078",iso2:"NZ",capital:"",lat:"-42.717214",lng:"170.963713",population:"3078"},{city:"Waioruarangi",admin:"",country:"New Zealand",population_proper:"2172",iso2:"NZ",capital:"",lat:"-42.4",lng:"173.683333",population:"2172"},{city:"Te Anau",admin:"Southland",country:"New Zealand",population_proper:"1857",iso2:"NZ",capital:"",lat:"-45.414649",lng:"167.715672",population:"1857"},{city:"Waitangi",admin:"",country:"New Zealand",population_proper:"300",iso2:"NZ",capital:"",lat:"-43.95",lng:"-176.533333",population:"300"}]},t.\u0275prov=e.Db({token:t,factory:t.\u0275fac=function(o){return new(o||t)},providedIn:"root"}),t}()},P12i:function(t,o,n){"use strict";n.d(o,"a",(function(){return c}));var i=n("AytR"),e=n("2Vo4"),a=n("fXoL"),r=n("tk/3"),l=n("e8h1"),c=function(){function t(t,o){this.http=t,this.storage=o,this.locationFilters=new e.a(!1)}return t.prototype.getLocationFilters=function(){return this.locationFilters.asObservable()},t.prototype.retreiveLocationFilters=function(){var t=this;this.storage.get("foodie_filters").then((function(o){if(o){var n=JSON.parse(o);t.locationFilters.next(n)}}))},t.prototype.setLocationFilters=function(t){this.storage.set("foodie_filters",JSON.stringify(t)),this.locationFilters.next(t)},t.prototype.getCategories=function(){var t=this;return new Promise((function(o,n){t.storage.get("foodie_token").then((function(e){e?t.http.get(i.a.apiUrl+"/categories?token="+e).subscribe((function(n){t.storage.set("foodie_categories",JSON.stringify(n)),o(n)}),(function(i){t.storage.get("foodie_categories").then((function(t){t?o(JSON.parse(t)):n(i)}))})):n()}))}))},t.prototype.getLocations=function(t,o,n,e,a){var r=this;return new Promise((function(l,c){r.storage.get("foodie_token").then((function(s){s?r.http.get(i.a.apiUrl+"/locations?token="+s+"&category_id="+t+"&latitude="+(o||"")+"&longitude="+(n||"")+"&radius="+(e||"")+"&show_further_away="+(a||"")).subscribe((function(o){r.storage.set("foodie_locations_"+t,JSON.stringify(o)),l(o)}),(function(o){r.storage.get("foodie_locations_"+t).then((function(t){t?l(JSON.parse(t)):c(o)}))})):c()}))}))},t.prototype.getLocationsAdmin=function(){var t=this;return new Promise((function(o,n){t.storage.get("foodie_token").then((function(e){e?t.http.get(i.a.apiUrl+"/locations?token="+e+"&admin=1").subscribe((function(n){t.storage.set("foodie_locations_admin",JSON.stringify(n)),o(n)}),(function(i){t.storage.get("foodie_locations_admin").then((function(t){t?o(JSON.parse(t)):n(i)}))})):n()}))}))},t.prototype.getLocation=function(t){var o=this;return new Promise((function(n,e){o.storage.get("foodie_token").then((function(a){a?o.http.get(i.a.apiUrl+"/locations/"+t+"?token="+a).subscribe((function(i){o.storage.set("foodie_location_"+t,JSON.stringify(i)),n(i)}),(function(i){o.storage.get("foodie_location_"+t).then((function(t){t?n(JSON.parse(t)):e(i)}))})):e()}))}))},t.prototype.createLocation=function(t){var o=this;return new Promise((function(n,e){o.storage.get("foodie_token").then((function(a){a?o.http.post(i.a.apiUrl+"/locations?token="+a,t).subscribe((function(t){n(t)}),(function(t){e(t)})):e()}))}))},t.prototype.updateLocation=function(t){var o=this;return new Promise((function(n,e){o.storage.get("foodie_token").then((function(a){a?o.http.put(i.a.apiUrl+"/locations/"+t.id+"?token="+a,t).subscribe((function(t){n(t)}),(function(t){e(t)})):e()}))}))},t.prototype.createUserLocation=function(t){var o=this;return new Promise((function(n,e){o.storage.get("foodie_token").then((function(a){a?o.http.post(i.a.apiUrl+"/userlocations?token="+a,{location_id:t}).subscribe((function(t){n(t)}),(function(t){e(t)})):e()}))}))},t.\u0275fac=function(o){return new(o||t)(a.Ob(r.a),a.Ob(l.b))},t.\u0275prov=a.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);