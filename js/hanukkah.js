var NEXT_ITEM = 0;
var REVEAL_ITEM = -1;

const ITEMS = [
    {
        "name": "sweater",
        "link": "https://www.llbean.com/llb/shop/123770?qs=3080290_93xLBvPhAeE-gZLQKnBcRGukwQ9JZyL2Ww&cvosrc=affiliate.linkshare.93xLBvPhAeE"
    }, 
    {
        "name": "socks",
        "link": "https://bombas.com/products/mens-merino-wool-sock-4-pack?variant=mixed&size=l"
    }, 
    {
        "name": "battery", 
        "link:": "https://www.bestbuy.com/site/nimble-eco-friendly-champ-portable-charger-10k-mah-18w-pd-turquoise/6471878.p?skuId=6471878"
    },
    {
        "name": "book",
        "link": "https://www.greenlightbookstore.com/book/9781250186447"
    }, 
    {
        "name": "gloves",
        "link": "https://www.amazon.com/dp/B081F73PC6"
    },
    {
        "name": "airtag",
        "link": "https://www.bestbuy.com/site/apple-airtag-silver/6461348.p"
    },
    {
        "name": "smart plug",
        "link": "https://www.amazon.com/dp/B07G95FFN3"
    },
    {
        "name": "kettle",
        "link": "https://www.amazon.com/Cuisinart-CPK-17-PerfecTemp-1-7-Liter-Stainless/dp/B003KYSLNQ"
    },
    {
        "name": "flipper",
        "link": "https://flipperzero.one/"
    }];

function revealNextHanukkah() {
    if (NEXT_ITEM < ITEMS.length) {
	    const itemElement = $("#hanukkah-" + NEXT_ITEM);
        const item = ITEMS[NEXT_ITEM]
        const newHtml = "<a target=\"_blank\" href=\"" + item.link + "\">" + item.name + "</a>";
	    itemElement.html(newHtml);
        NEXT_ITEM++;
    }
}

function toggleAllHanukkah() {
    if (REVEAL_ITEM < 0) {
        REVEAL_ITEM = NEXT_ITEM;
        for (var i = 0; i < 9; i++) {
            revealNextHanukkah();
        }
    } else {
        NEXT_ITEM = REVEAL_ITEM;
        REVEAL_ITEM = -1;
        for (var i = NEXT_ITEM; i < ITEMS.length; i++) {
            $("#hanukkah-" + i).html("???");
        }
    }
}