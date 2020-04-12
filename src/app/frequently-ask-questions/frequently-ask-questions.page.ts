import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-frequently-ask-questions",
  templateUrl: "./frequently-ask-questions.page.html",
  styleUrls: ["./frequently-ask-questions.page.scss"],
})
export class FrequentlyAskQuestionsPage implements OnInit {
  constructor() {}

  ngOnInit() {
    this.collapseOpen();
  }
  collapseOpen() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }
}
