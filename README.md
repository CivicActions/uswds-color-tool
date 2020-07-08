# About this tool
This tool was built to help match colors to colors that are defined within the USWDS design system. It was built by and is maintained by [CivicActions](https://civicactions.com/).

You can learn more about color usage in USWDS [here](https://designsystem.digital.gov/design-tokens/color/overview/).

The colors are pulled from USWDS using background utility classes. You can see which version of USWDS the css is compiled from at the top of the color comparison box. If this version is out of date or if you want to switch to a different version, you can fork this repo and change the USWDS version then re-compile.

## How to use this tool
This tool can be used to browse the available colors from USWDS. Clicking on a swatch will show the color's name and hex value in the comparison box.

The dashed boxes containing the color families can be sorted by clicking and dragging.

If you have an existing color that you would like to match, enter it into the input within the comparison box. Once a valid color is entered, the color will fill the first box and the closest match from USWDS will fill the second box. From this point you can still click other swatches to compare your color with different USWDS colors.

The state of the tool is not saved, on reload your selections and sorts will be reverted back to their original states.

## Installing locally
Clone this repo.

Run `npm install`

If you need to use a different version of USWDS, update it in the package.json file and then `npm install`

To compile a new style sheet run `gulp build-sass`

To watch for sass changes run `gulp watch`

## Resources
This tool is built with the following tools:

  - U.S. Design System: https://github.com/uswds/uswds
  - Color matching: https://github.com/dtao/nearest-color
  - Drag sorting: https://github.com/SortableJS/Sortable

If you have any issues or requests feel free to create an issue or pull request.

