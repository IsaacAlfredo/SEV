/*
title: menu title
options: array of options titles
events: array of functions executed by the options (note: the "0" option will always be exit, so you dont need to 
pass it. For this reason, the events array must have length equal to options length - 1. Start your events 
array with the function of your option 1 instead of option 0)
repeatOptions: a boolean thats allow the menu to repeat options when a event occour (except exit)
*/

class ConsoleMenu {
  #title;
  #options;
  #events;
  #repeatOptions;

  constructor(title, options, events, repeatOptions) {
    this.title = title;
    this.options = options;
    this.events = events;
    this.repeatOptions = repeatOptions;
  }

  get title() {
    return this.#title;
  }

  set title(newTitle) {
    this.#title = newTitle;
  }
  get options() {
    return this.#options;
  }

  set options(newOptions) {
    this.#options = newOptions;
  }

  get events() {
    return this.#events;
  }

  set events(newEvents) {
    this.#events = newEvents;
  }

  get repeatOptions() {
    return this.#repeatOptions;
  }

  set repeatOptions(newRepeat) {
    this.#repeatOptions = newRepeat;
  }

  showOptions() {
    this.options.forEach((element) => {
      process.stdout.write(
        `${this.options.indexOf(element)}- ${element.trim()}\n`
      );
    });
  }

  execute() {
    process.stdout.write(this.title.trim() + "\n");

    this.showOptions();
    process.stdin.on("data", (data) => {
      if (data == 0) {
        process.exit();
      } else {
        var func = this.events[data - 1];
        func();

        if (this.repeatOptions == true) {
          process.stdout.write("\n");
          this.showOptions();
        }
      }
    });
  }
}

export { ConsoleMenu };
