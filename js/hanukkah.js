var NEXT_ITEM = 0;
const ITEMS = ["Cool", "items", "here"];
const ITEM_LINKS = ["https://google.com", "https://amazon.com", "https://spotify.com"];

function revealNextHanukkah() {
    if (NEXT_ITEM < ITEMS.length) {
	    const item = $("#hanukkah-" + NEXT_ITEM);
        const newHtml = "<a target=\"_blank\" href=\"" + ITEM_LINKS[NEXT_ITEM] + "\">" + ITEMS[NEXT_ITEM] + "</a>";
	    item.html(newHtml);
        NEXT_ITEM++;
    }
}