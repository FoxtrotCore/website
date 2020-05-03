export class AvailabilityForm {
  available_episodes: Number[];
  missing_episodes: Number[];
  search_time: Number;

  constructor(available, missing, search, time){
    this.available_episodes = available;
    this.missing_episodes = missing;
    this.search_time = time;
  }
}
