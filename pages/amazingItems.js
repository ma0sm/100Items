const { get } = require( "../utils/config" );

let I;

module.exports = {

	_init() {
		I = actor();
	},

	openHomepage() {
		try{
			I.amOnPage( "/" );
		} catch ( e ) {
			console.log( "Error opening homepage:", e );
		}
	},

	selectItem( number ) {
		try{
			if( number === 0 ) {
				I.waitForElement( "//div[@class='grid']", 5 );
				I.click( "//*[text()[contains(., 'item-0' )]]" );
				I.waitForElement( "//div[@class='grid__item grid__item--selected'][contains(., 'item-0' )]", 5 )
			} else {
				var pageCounter, scrollCounter;
				I.waitForElement("//div[@class='grid']", 5);
				pageCounter = 99;
				scrollCounter = number / 100;
				while (scrollCounter > 0) {
					I.scrollTo("//*[text()[contains(., 'item-" + pageCounter + "' )]]");
					pageCounter = pageCounter + 100;
					scrollCounter--;
				}
				I.wait( 1 );
				I.click("//*[text()[contains(., 'item-" + number + "' )]]");
				I.waitForElement("//div[@class='grid__item grid__item--selected'][contains(., 'item-" + number + "' )]", 5)
			}
		} catch ( e ) {
			console.log( "Error while selecting item:", e );
		}
	},

	unselectItem( number ) {
		try{
			if( number === 0 ) {
				I.waitForElement( "//div[@class='grid']", 5 );
				I.click( "//div[@class='grid__item grid__item--selected'][contains(., 'item-0' )]" );
				I.waitForElement( "//*[text()[contains(., 'item-0' )]]", 5 )
			} else {
				var pageCounter, scrollCounter;
				I.waitForElement("//div[@class='grid']", 5);
				pageCounter = 99;
				scrollCounter = number / 100;
				while (scrollCounter > 0) {
					I.scrollTo("//*[text()[contains(., 'item-" + pageCounter + "' )]]");
					pageCounter = pageCounter + 100;
					scrollCounter--;
				}
				I.wait( 1 );
				I.click( "//div[@class='grid__item grid__item--selected'][contains(., 'item-" + number + "' )]" );
				I.waitForElement("//*[text()[contains(., 'item-" + number + "' )]]", 5)
			}
		} catch ( e ) {
			console.log( "Error while selecting item:", e );
		}
	},

	checkItemSelected ( selectedItem ) {
		try{
			if( selectedItem === 0 ) {
				I.waitForElement( "//div[@class='grid']", 5 );
				I.waitForElement( "//div[@class='grid__item grid__item--selected'][contains(., 'item-0' )]", 5 )
			} else {
				var pageCounter, scrollCounter;
				I.waitForElement("//div[@class='grid']", 5);
				pageCounter = 99;
				scrollCounter = selectedItem / 100;
				while (scrollCounter > 0) {
					I.scrollTo("//*[text()[contains(., 'item-" + pageCounter + "' )]]");
					pageCounter = pageCounter + 100;
					scrollCounter--;
				}
				I.wait( 1 );
				I.waitForElement( "//div[@class='grid__item grid__item--selected'][contains(., 'item-" + selectedItem + "' )]", 5 );
			}
		} catch ( e ) {
			console.log( "Error while selecting item:", e );
		}
	},

	checkItemUnselected( unselectedItem ) {
		try{
			if( unselectedItem === 0 ) {
				I.waitForElement( "//div[@class='grid']", 5 );
				I.waitForElement( "//div[@class='grid__item grid__item--selected'][contains(., 'item-0' )]", 5 )
			} else {
				var pageCounter, scrollCounter;
				I.waitForElement("//div[@class='grid']", 5);
				pageCounter = 99;
				scrollCounter = unselectedItem / 100;
				while (scrollCounter > 0) {
					I.scrollTo("//*[text()[contains(., 'item-" + pageCounter + "' )]]");
					pageCounter = pageCounter + 100;
					scrollCounter--;
				}
				I.wait( 1 );
				I.waitForElement( ("//*[text()[contains(., 'item-" + unselectedItem + "' )]]"), 5 );
			}
		} catch ( e ) {
			console.log( "Error while selecting item:", e );
		}
	},

	async numberOfSelectedItems() {
		try{
			I.waitForElement( "//div[@class='grid']", 5 );
			return await I.grabNumberOfVisibleElements( "//div[@class='grid__item grid__item--selected']" );
		} catch ( e ) {
			console.log( "Error while counting number of selected items:", e );
		}
	},

	async numberOfUnselectedItems() {
		try{
			I.waitForElement( "//div[@class='grid']", 5 );
			return await I.grabNumberOfVisibleElements( "//div[@class='grid__item ']" );
		} catch ( e ) {
			console.log( "Error while counting number of selected items:", e );
		}
	},
};
