# Front End Coding Project

**A little context on the problem:**

Our hypothetical startup has a product which allows our customers to search and find locations to target for advertising campaigns. Our prior designs only comtemplated a max of 20 locations. We have a new customer who wants to target 307 7-11 locations in the US. We need to redesign our location selection dialog to support this new use case.

**Design:**

Our designer was so kind as to provide us with a design for this dialog:
![location_selection](https://cloud.githubusercontent.com/assets/213594/9950318/f053ed1a-5d7e-11e5-9777-f9a61e6d6ad5.png)

Your challenge is to implement this UI

**General guidelines and requirements:**

- You will need to provide an html file that will display a functioning dialog
- You can use any JS/CSS framework/3rd party library you'd like to help with this
- You only need to support the latest version of Chrome on a Mac Book
- Bonus points if design functions on other browsers/OSes
- The minimum pixel width that needs to be supported is 320px wide
- Graphics don't need to match the design exactly
- If you feel automated testing would help here, feel free to add it

**Features required (in order of priority):**

- All locations are displayed in the dialog
- Locations grouped by state
- Search filters locations based on all fields
- Select All/Deselect All function as expected
- Clicking "Add" Button displays ids and names of selected locations on page
- # of selected locations displayed
- Select All works for a state
- Ability to expand UI to be 2 columns of states plus the map
- Ability to expand UI to be 4 columns of states without the map
- Ability to shrink UI to be a single column of states without a map
- Selected locations display in a map with a red pin
- Unselected locations display in a map with a grey pin
- "Show Selected" zooms map to show all selected locations

**In addition to this design, we are giving you:**

- `locations.json` - a file containing 307 locations of 7-11s in the US
- Unlimited email support :smile:

You will be evaluated primarily on your solution's cleanliness and extensibility. We intend for this task to only take a few hours and would prefer to see clean, well tested, production-worthy code than a complete implementation of every feature. Consider how you would extend your solution to implement additional features. 
