import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-state-data",
  templateUrl: "./state-data.component.html",
  styleUrls: ["./state-data.component.scss"],
})
export class StateDataComponent implements OnInit {
  stateData = [];
  // tslint:disable: max-line-length
  pictures = {
    maharashtra:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/mumbai_pune_maharashtra_shutdo_0.jpeg?MpuyXn9UiXlQ96IAlo8NVQiwzsscPLJ6",
    tamilnadu:
      "https://www.eziholiday.com/common_area/tour_packages/5cc801e9aa798188794.jpg",
    delhi:
      "https://www.spinonholiday.com/upload_images/blog_post/15732150571.jpg",
    telangana:
      "https://www.telanganatourism.gov.in/assets/css/sslider/data1/images/city/charminar.jpg",
    rajasthan:
      "https://letstourbharat.com/wp-content/uploads/2018/08/chittorgarh-960x530.jpg",
    kerala:
      "https://static.toiimg.com/photo/68007534/backwaters-kerala.jpg?width=748&resize=4",
    uttarpradesh: "https://www.holidify.com/images/bgImages/AGRA.jpg",
    andhrapradesh:
      "https://s3.ap-southeast-1.amazonaws.com/cdn.deccanchronicle.com/sites/default/files/KAILASAGIRI-PARK_0_0.jpg",
    madhyapradesh:
      "https://www.namasteindiatrip.com/wp-content/uploads/2019/08/Madhya-Pradesh-Travel-HD.jpg",
    karnataka:
      "https://travelandleisureindia.in/wp-content/uploads/2020/04/Bengaluru-During-Lockdown-feature.jpg",
    gujarat:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2017-06/19/full/1497819464-0472.jpg",
    haryana: "https://www.hltt.in/images/page-images/kabuli-bagh-mosque.jpg",
    jammuandkashmir:
      "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/03/vaishno-devi-1569292386-1585131625.jpg",
    punjab:
      "https://www.indiafilings.com/learn/wp-content/uploads/2018/10/Punjab-Non-Encumbrance-Certificate.jpg",
    westbengal:
      "https://lp-cms-production.imgix.net/2019-06/80840681.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
    odisha:
      "https://images.assettype.com/swarajya/2018-07/db2d2a75-41f0-4bd8-9f05-35a534a3d5ff/f6f42413_abf2_4b4d_9142_beef1d4cde0c.jpg?w=1280&q=100&fmt=pjpeg&auto=format",
    bihar:
      "https://cdn.britannica.com/98/142598-050-962FD6C0/Patna-Museum-Bihar-India.jpg",
    uttarakhand: "https://www.holidify.com/images/bgImages/DEHRADUN.jpg",
    assam: "https://cdn1.goibibo.com/india-assam-14839497135o.jpg",
    chandigarh:
      "https://mk0egoveletsonla87wv.kinstacdn.com/wp-content/uploads/2020/01/Chandigarh-Moving-Towards-Resilient-and-People-Friendly-Smart-City-1.jpg",
    himachalpradesh:
      "https://www.oyorooms.com/blog/wp-content/uploads/2017/11/Feature-Image-min-12.jpg",
    ladakh: "https://www.holidify.com/images/bgImages/LADAKH.jpg",
    andamanandnicobarislands:
      "https://www.holidify.com/images/bgImages/ANDAMAN-NICOBAR-ISLANDS.jpg",
    chhattisgarh:
      "https://content3.jdmagicbox.com/comp/raipur-chhattisgarh/n7/9999px771.x771.110715104721.e3n7/catalogue/swami-vivekananda-airport-mana-raipur-chhattisgarh-domestic-airport-eiox9.jpg",
    goa:
      "https://lp-cms-production.imgix.net/2019-06/iStock_000026994380XLarge.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4",
    puducherry: "https://cdn1.goibibo.com/india-puducherry-14830868084o.jpg",
    jharkhand: "https://jharkhandtourism.gov.in//images/Water_Fall_Dam.jpg",
    manipur:
      "https://www.incredible-northeastindia.com/images/manipur-head.jpg",
    mizoram: "https://im.hunt.in/cg/miz/About/Tourism/champhai.JPG",
    arunachalpradesh: "https://static.toiimg.com/photo/63479217/.jpg",
    dadraandnagarhaveli:
      "https://static2.tripoto.com/media/filter/tst/img/77414/TripDocument/1524892366_cp.jpg",
    tripura: "https://www.nativeplanet.com/img/2017/10/05-1507180851-6.jpg",
    damananddiu:
      "https://cdn.britannica.com/27/1627-050-6E7FEBFB/fort-Portuguese-coast-Diu.jpg",
    lakshadweep: "https://www4.pictures.lonny.com/mp/rOKkgGoqQOGl.jpg",
    meghalaya:
      "https://dmgupcwbwy0wl.cloudfront.net/system/images/000/235/086/8733a9c960fbd2004a3738525f7a0708/x1000gt/shutterstock_1084247282.jpg?1552134449",
    nagaland:
      "https://upload.wikimedia.org/wikipedia/commons/f/ff/Way_o_Kohima%2CNagaland_India.jpg",
    sikkim:
      "https://img.traveltriangle.com/blog/wp-content/uploads/2017/08/yak-ride.jpg",
  };

  constructor(private navController: NavController) { }

  ngOnInit() {
    this.getStateData();
  }

  getStateData() {
    $.get("https://api.covid19india.org/data.json", (data, status) => {
      this.setStateData(data.statewise);
    });
  }
  setStateData(data) {
    this.stateData = data;
    this.updataUI();
  }

  updataUI() {
    /*
    <div style='color: red;'>[${
               this.stateData[i].deltaconfirmed
             }]</div>

             <div style='color: blue;'>[${
               // tslint:disable: radix
               parseInt(this.stateData[i].deltaconfirmed) -
               (parseInt(this.stateData[i].deltarecovered) +
                 parseInt(this.stateData[i].deltadeaths))
             }]</div>

             <div style='color: green;'>[${
               this.stateData[i].deltarecovered
             }]</div>

             <div style='color: black;'>[${this.stateData[i].deltadeaths}]</div>
    */
    // $("#state_data_card").empty();
    for (let i = 1; i < this.stateData.length; i++) {
      const state = this.stateData[i].state.replace(/\s/g, "").toLowerCase();
      const imageSource = this.pictures[state];
      $("#state_data_card").append(`
      <div id="${this.stateData[i].state}" class="cardToClickForStateData" style="background-color: #f2f2f2;display: inline-block; padding: 15px; border-radius: 12px; width: 85%; height: 450px; margin: 0px 10px 0px 0px;
       box-shadow: 1px 5px 20px 2px rgba(0, 0, 0, 0.06);">
       <img src="${imageSource}" style="height: 230px;
       width: 100%;
       pointer-events: none;" />
       <div style="  display: grid; grid-template-columns: auto; grid-gap: 10px;">
        <div id="${this.stateData[i].state}" style="text-align: center;">
            <div style='color: red; font-size: 15px;'>+${this.stateData[i].deltaconfirmed} Today</div>
            <div>
            <ion-row>
            <ion-col style="font-size: 20px;">${this.stateData[i].state}</ion-col>
            </ion-row>
            </div>
        </div>
           <div style="text-align: center;">
            <ion-row>
             <ion-col>
             <div style='color: #501717; font-size: 24px; font-weight: 700;'>${this.stateData[i].confirmed}</div>
             <div style='color: #501717;'>Affected</div>

             </ion-col>
             <ion-col>
             <div style='color: #23308e; font-size: 24px; font-weight: 700;'>${this.stateData[i].active}</div>
             <div style='color: #23308e;'>Active</div>
            </ion-row>
            <ion-row>
             </ion-col>
             <ion-col>
             <div style='color: #238e43; font-size: 24px; font-weight: 700;'>${this.stateData[i].recovered}</div>
             <div style='color: #238e43;'>Recovered</div>

             </ion-col>
             <ion-col>
             <div style='color: #2f2f2f; font-size: 24px; font-weight: 700;'>${this.stateData[i].deaths}</div>
             <div style='color: #2f2f2f;'>Deceased</div>

             </ion-col>
            </ion-row>
          </div>
          <div style='font-size: 15px; text-align: center;'>View districts >></div>
        </div>
      </div>`);
    }
    $('.cardToClickForStateData').click((event) => {
      const name = event.currentTarget.id;
      this.navController.navigateForward(`district-wise?state=${name}`);
    });
  }
  loadPage(state) {
    this.navController.navigateForward(state);
  }
}
