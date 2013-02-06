(function ($) {
	$(function () {
		$("div.party > p.slide").each(function (index, el) {
			var $el			= $(el),
				wait		= 1500 * index,
				direction	= index % 2 === 0 ? "left" : "right";

			setTimeout(function () {
				$el.show({
					"effect": "slide",
					"duration": 1000,
					"direction": direction
				});
			}, wait);
		});
	});
}(jQuery));
