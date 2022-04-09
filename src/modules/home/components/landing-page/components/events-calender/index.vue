<template>
  <div class="eventSectionContainer my-3">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="sectionHeader mianTitleResposive">
            <span> simple store </span> Events
          </div>
        </v-col>
        <v-col md="4" cols="12">
          <v-date-picker
            v-model="dateEvent"
            :event-color="'#B40F1F'"
            :events="functionEvents"
            @click:date="getEvent"
            :picker-date.sync="pickerDate"
            full-width
          ></v-date-picker>
          <div class="my-3 conOfImgEvBanner hidden-md-and-down">
            <img
              class="img-fluid"
              src="@/assets/img/eventBanner.png"
              alt="event image"
            />
          </div>
        </v-col>
        <v-col md="8" cols="12" class="postion-relative">
          <div class="conOfEvent" v-if="listEvents && listEvents.length > 0">
            <h3 class="headerEv">Upcoming Events</h3>
            <v-row>
              <v-col lg="1" cols="2">
                <div class="conDate">
                  <div class="dateNum">{{ eventDateObject.day }}</div>
                  <div class="dateMon">{{ eventDateObject.month }}</div>
                </div>
              </v-col>
              <v-col lg="11" cols="10">
                <div
                  class="contentEvent"
                  v-for="listEvent in listEvents"
                  :key="listEvent.id"
                >
                  <h4 class="eventTitle">{{ listEvent.title }}</h4>
                  <div class="eventDateTime">{{ listEvent.time }} EST</div>
                  <div
                    class="imgEvent"
                    :style="{
                      'background-image': 'url(' + listEvent.image + ')',
                    }"
                  ></div>
                </div>
              </v-col>
            </v-row>
          </div>
          <div class="loaderContainer" v-if="isLoading">
            <v-progress-circular
              :size="120"
              :width="4"
              indeterminate
              color="primary"
            ></v-progress-circular>
          </div>
        </v-col>
        <v-col cols="12" class="hidden-lg-and-up conOfImgEvBannerRees">
          <img
            class="img-fluid"
            src="@/assets/img/eventBanner.png"
            alt="event image"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { ApiService } from "@/modules/shared/services/api";
let apiServices = new ApiService();
export default {
  data: () => ({
    dateHaveEvents: [],
    listEvents: null,
    pickerDate: null,
    isLoading: false,
    eventDateObject: {
      month: "",
      day: "",
    },
    dateEvent: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
  }),
  methods: {
    getEvent(date) {
      this.isLoading = true;
      this.listEvents = [];
      apiServices.getFilter("events-calendar", date).then((res) => {
        if (res.data) {
          this.listEvents = res.data;
          this.getMonthFromDate(date);
          this.isLoading = false;
        } else this.isLoading = false;
      });
    },
    getMonthFromDate(date) {
      let getDate = new Date(date);
      let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      this.eventDateObject.month = months[getDate.getMonth()];
      this.eventDateObject.day = getDate.getDate();
    },
    getdateHaveEvents(date) {
      this.dateEvent = date;
      this.dateHaveEvents = [];

      let getDate = new Date(date.replace(/-/g, "/"));
      let fullYear = getDate.getFullYear();
      let monthNumber = ("0" + (getDate.getMonth() + 1)).slice(-2);
      apiServices
        .get("monthly-events-calendar" + "/" + fullYear + "/" + monthNumber)
        .then((res) => {
          if (res.data) {
            this.dateHaveEvents = res.data;
          }
        });
    },
    getUpcomingEvent() {
      apiServices.get("events/upcoming").then((res) => {
        if (res.data) {
          this.dateEvent = res.data[0].date;
          this.pickerDate = res.data[0].date;
          this.getdateHaveEvents(res.data[0].date);
          this.getEvent(res.data[0].date);
        }
      });
    },
    functionEvents(date) {
      const [, , day] = date.split("-");
      if (this.dateHaveEvents.includes(parseInt(day, 10))) return true;
      return false;
    },
  },
  created() {
    this.getUpcomingEvent();
  },
  watch: {
    pickerDate(newval, oldval) {
      if (newval != oldval && oldval) {
        this.getdateHaveEvents(newval);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./_events-calender.scss";
</style>
