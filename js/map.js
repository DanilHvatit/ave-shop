ymaps.ready(function () {
	var myMap = new ymaps.Map('map', {
		center: [51.51497705015656, -0.1369480826645343],
		zoom: 14
	}, {
		searchControlProvider: 'yandex#search'
	}),

		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Собственный значок метки',
			balloonContent: 'Это красивая метка'
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.

			// Размеры метки.
			iconImageSize: [30, 42],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-5, -38]
		});

	myMap.geoObjects
		.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
});


ymaps.ready(function () {
	var myMap = new ymaps.Map('map2', {
		center: [40.76838409794852, -73.981237277771],
		zoom: 14
	}, {
		searchControlProvider: 'yandex#search'
	}),

		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Собственный значок метки',
			balloonContent: 'Это красивая метка'
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.

			// Размеры метки.
			iconImageSize: [30, 42],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-5, -38]
		});

	myMap.geoObjects
		.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
});


ymaps.ready(function () {
	var myMap = new ymaps.Map('map3', {
		center: [48.86433756803657, 2.3355174933929757],
		zoom: 14
	}, {
		searchControlProvider: 'yandex#search'
	}),

		// Создаём макет содержимого.
		MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
			'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
		),

		myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
			hintContent: 'Собственный значок метки',
			balloonContent: 'Это красивая метка'
		}, {
			// Опции.
			// Необходимо указать данный тип макета.
			iconLayout: 'default#image',
			// Своё изображение иконки метки.

			// Размеры метки.
			iconImageSize: [30, 42],
			// Смещение левого верхнего угла иконки относительно
			// её "ножки" (точки привязки).
			iconImageOffset: [-5, -38]
		});

	myMap.geoObjects
		.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');
});