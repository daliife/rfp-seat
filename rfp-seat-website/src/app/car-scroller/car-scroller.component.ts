import { Component, OnInit, HostListener } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-car-scroller",
  templateUrl: "./car-scroller.component.html",
  styleUrls: ["./car-scroller.component.css"],
})
export class CarScrollerComponent implements OnInit {
  scrollPercentage = 0;

  constructor() {}

  ngOnInit(): void {
    this.updateMovable();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event) {
    this.scrollPercentage = this.refreshPercentage();
  }

  @HostListener("window:scroll", ["$event"])
  doSomethingOnWindowsScroll($event: Event) {
    this.scrollPercentage = this.refreshPercentage();
    this.updateAnimation();
    this.updateMovable();
  }

  private refreshPercentage(): number {
    const viewportHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    const documentHeight = $(document).height();
    const homeHeight = $("#home-container").height();
    const scrollPositionRelative =
      (scrollPosition - homeHeight) /
      (documentHeight - viewportHeight - homeHeight);
    const percentageResult =
      scrollPosition - $("#home-container").height() < 0
        ? 0
        : scrollPositionRelative;
    return percentageResult;
  }

  private updateMovable() {
    const fittingFactor = 1 - $(".movable").width() / $("#car").width();
    const percentage = this.scrollPercentage * 100 * fittingFactor + "%";
    $(".movable").css({ left: percentage });
  }

  private updateAnimation() {
    if (this.scrollPercentage > 0) {
      $("#navigation-bar").addClass("animate__slideInDown");
      $("#navigation-bar").removeClass("animate__slideOutUp");
    } else {
      $("#navigation-bar").addClass("animate__slideOutUp");
      $("#navigation-bar").removeClass("animate__slideInDown");
    }
  }
}
