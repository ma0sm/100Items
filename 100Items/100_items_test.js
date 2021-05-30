const { get } = require( "../utils/config" );

Feature( "In order to prove that the select 100 page works\n" +
	"As a test user\n" +
    "I need to verify the functionality does what it's supposed to do" );

Before( ( { I, amazingItems } ) => {
	amazingItems.openHomepage();
} );

Scenario( "Given I am at the homepage\n" +
	"And I have not selected any items before\n" +
	"Then there are no items selected on the screen\n",
	async( { I, amazingItems } ) => {
		if( await amazingItems.numberOfSelectedItems() !== 0 ) {
			throw new Error('Unexpected number of items selected');
		}
	} );

Scenario( "Given I am at the homepage\n" +
	"And I have selected item 0\n" +
	"Then item 0 is selected\n",
	async( { I, amazingItems } ) => {
		amazingItems.selectItem( 0 );
		amazingItems.checkItemSelected( 0 );
	} );

Scenario( "Given I am at the homepage\n" +
	"And I have scrolled down to and selected item 100\n" +
	"Then item 100 is selected\n",
	async( { I, amazingItems } ) => {
		amazingItems.selectItem( 100 );
		amazingItems.checkItemSelected( 100 );
	} );

Scenario( "Given I am at the homepage\n" +
	"And I have selected item 10\n" +
	"And I have refreshed the page\n" +
	"Then item 10 is selected\n",
	async( { I, amazingItems } ) => {
		amazingItems.selectItem( 10 );
		amazingItems.checkItemSelected( 10 );
		I.refreshPage();
		amazingItems.checkItemSelected( 10 );
	} );

Scenario( "Given I am at the homepage\n" +
	"And I have scrolled down to and selected item 60\n" +
	"And I have refreshed the page\n" +
	"Then item 60 is selected\n",
	async( { I, amazingItems } ) => {
		amazingItems.selectItem( 60 );
		amazingItems.checkItemSelected( 60 );
		I.refreshPage();
		amazingItems.checkItemSelected( 60 );
	} );

Scenario( "Given I am at the homepage\n" +
	"And I have scrolled down to and selected items 15 - 20\n" +
	"And I have refreshed the page\n" +
	"Then items 15 - 20 remain selected\n",
	async( { I, amazingItems } ) => {
		amazingItems.selectItem( 15 );
		amazingItems.selectItem( 16 );
		amazingItems.selectItem( 17 );
		amazingItems.selectItem( 18 );
		amazingItems.selectItem( 19 );
		amazingItems.selectItem( 20 );
		amazingItems.checkItemSelected( 15 );
		amazingItems.checkItemSelected( 16 );
		amazingItems.checkItemSelected( 17 );
		amazingItems.checkItemSelected( 18 );
		amazingItems.checkItemSelected( 19 );
		amazingItems.checkItemSelected( 20 );
		I.refreshPage();
		amazingItems.checkItemSelected( 15 );
		amazingItems.checkItemSelected( 16 );
		amazingItems.checkItemSelected( 17 );
		amazingItems.checkItemSelected( 18 );
		amazingItems.checkItemSelected( 19 );
		amazingItems.checkItemSelected( 20 );
	} );

Scenario( "Given I am at the homepage\n" +
	"And I have scrolled down to and selected items 60 - 65\n" +
	"And I have refreshed the page\n" +
	"Then items 60 - 65 remain selected\n",
	async( { I, amazingItems } ) => {
		amazingItems.selectItem( 60 );
		amazingItems.selectItem( 61 );
		amazingItems.selectItem( 62 );
		amazingItems.selectItem( 63 );
		amazingItems.selectItem( 64 );
		amazingItems.selectItem( 65 );
		amazingItems.checkItemSelected( 60 );
		amazingItems.checkItemSelected( 61 );
		amazingItems.checkItemSelected( 62 );
		amazingItems.checkItemSelected( 63 );
		amazingItems.checkItemSelected( 64 );
		amazingItems.checkItemSelected( 65 );
		I.refreshPage();
		amazingItems.checkItemSelected( 60 );
		amazingItems.checkItemSelected( 61 );
		amazingItems.checkItemSelected( 62 );
		amazingItems.checkItemSelected( 63 );
		amazingItems.checkItemSelected( 64 );
		amazingItems.checkItemSelected( 65 );
	} );

Scenario( "Given I am at the homepage\n" +
	"And I have scrolled down to and selected item 987\n" +
	"And I have refreshed the page\n" +
	"Then item 987 remains selected\n",
	async( { I, amazingItems } ) => {
		amazingItems.selectItem( 987 );
		amazingItems.checkItemSelected( 987 );
		I.refreshPage();
		amazingItems.checkItemSelected( 987 );
	} );
